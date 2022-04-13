//@ts-check
let countryCode = {
    'UA': { code: "380", maxLen: 12, mask: '+## ### ### ####', codes: ['0', '80', '380'] }, //+38 096 555 55 55
    'KZ': { code: '7', maxLen: 11, mask: '+# ### ### ####', codes: ['7', '8'] }, //+7 777 001 44 99
    'GLOBAL': { code: '', minLen: 5, maxLen: 13, mask: '+#############', codes: [] }
};
/**
 * Function to return country name by international code 
 * @param {String|Number} code  String or numeric representation of country prefix
 * @returns Alpha‑2 code country name if found otherwise 'GLOBAL'  
 */
export let getCountry = code => Object.entries(countryCode).find(([key, value]) => value.code == code)?.[0] ?? 'GLOBAL';
let operatorsUA = {
    'Kyivstar': [
        '067',
        '068',
        '096',
        '097',
        '098',
    ],
    'Vodafone': [
        '050',
        '066',
        '095',
        '099'
    ],
    'lifecell': [
        '063',
        '073',
        '093',
    ]
}
let operatorsKZ = {
    'Activ': [
        '727',
        '701',
        '702',
        '772',
        '778',
    ],
    'Altel': [
        '700',
        '708',
    ],
    'Beeline': [
        '705',
        '771',
        '776',
        '777'
    ],
    'Tele2': [
        '707',
        '747',
    ]
}
let operatorPrefixes = {
    'UA': operatorsUA,
    'KZ': operatorsKZ
}

let proxying = map => new Proxy(Object.entries(map).reduce((obj, [key, value]) => ({ ...obj, [value.join('|')]: key }), {}), {
    get: (target, property, reciever) => {
        for (let k in target)
            if (new RegExp(k).test(property.toString()))
                return target[k];
        return null;
    }
})
let proxy = Object.entries(operatorPrefixes).reduce((obj, [key, value]) => ({ ...obj, [key]: proxying(value) }), {});
let recognize = (code, country) => proxy[country][code];
let localOperatorIcons = {
    'UA': {
        'Kyivstar': 'icon-Union-1',
        'Vodafone': 'icon-Vector-1',
        'lifecell': 'icon-Vector-3'

    },
    'KZ': {
        'Activ': 'icons-Activ',
        'Altel': 'icons-Altel',
        'Beeline': 'icons-Beeline',
        'Tele2': 'icons-Tele2'

    },
    'UNKNOWN': 'icon-Union',
    'INCORRECT': 'icon-Union-18',
    'EMPTY': ''//'icon-uniE941',
}

let normalizeCountryName = country => {
    switch (country) {
        case 'Украина':
        case 'UA':
            country = 'UA';
            break;
        case 'Казахстан':
        case 'KZ':
            country = 'KZ';
            break;
        default:
            country = 'GLOBAL';
            break;
    }
    return country;
}
/**
 * 
 * @param {String} phone number to be masked
 * @param {String} pattern pattern to mask inputted number which contains '#' as placceholder 
 * @returns masked phone number e.g. value=123453, pattern='+### # ##' will gives '+123 4 53'
 */
let mask = (phone = '', pattern = '+#############') => {
    let i = 0;
    const v = phone.toString();
    return pattern.replace(/#/g, _ => v[i++] ?? '').trimEnd();
}
/**
 * Function of converting mobile number to international format e.g. phone = '0965558844' and country = 'UA' -> +38 096 555 88 44
 * @param {String} phone 
 * @param {'UA'| 'KZ'| 'GLOBAL'} country 
 * @returns {String} Formatted 
 */
export let formatPhone = (phone, country) => {
    if (phone) {
        let rx = Object.entries(countryCode).map(([key, value]) => value.code).filter(x => x).map(x => `^\\+${x}`).join('|');
        rx = `(?<=${rx}).*`;
        let regexp = new RegExp(rx,'gm');
        let stripped = phone.match(regexp)?.[0];
        stripped=stripped?.length>0?stripped:null;
        phone=stripped??phone;
        country = normalizeCountryName(country);
        //prevent formatting before any national/international prefix were inputted
        if (phone.replace(/^\+/, '').length <= countryCode[country].code.length)
            return phone;
        //strip all non-numeric characters
        phone = phone.replace(/\D/gm, '');

        //attempt to find any  phone prefix further replacement with international
        if (countryCode[country].codes.some(x => new RegExp(`^${x}`).test(phone))) {
            countryCode[country].codes.forEach(x => phone = phone.replace(new RegExp(`^${x}`), countryCode[country].code));
        }
        //if nothing was found just add the prefix
        else {
            phone = `${countryCode[country].code}${phone}`;
        }
        //masking the phone to natural human representation
        phone = mask(phone, countryCode[country].mask);
        return phone;
    }
    return '';
}
/**
 *  Mobile operator icon recognition function by phone number
 * @param {String} phone 
 * @param {'UA'| 'KZ'| 'GLOBAL'} country 
 * @returns {String} icon name of specific recognized mobile operator
 */
export let recognizeOperator = (phone, country = 'GLOBAL') => {
    country = normalizeCountryName(country);
    phone = formatPhone(phone, country);
    let currentCountryCode = countryCode[country];
    if (phone.replace(/^\+/, '').length == 0)
        return localOperatorIcons.EMPTY;
    //counting phone digits
    let numLen = (phone.match(/\d/g) || []).length;
    if (country == 'GLOBAL') {
        if (numLen >= currentCountryCode.minLen && numLen <= currentCountryCode.maxLen)
            return localOperatorIcons.UNKNOWN;
    }
    if (numLen != currentCountryCode.maxLen) {
        return localOperatorIcons.INCORRECT
    }
    let { int, operator } = phone.replace('+', '').match(/(?<int>^\d+) (?<operator>\d+)/)?.groups;
    if (!!operator && !!int) {
        operator = recognize(operator, country);
        if (operator)
            return localOperatorIcons[country][operator];
        return localOperatorIcons.UNKNOWN;
    }
    return localOperatorIcons.INCORRECT;
}