


// const excelToJson = require('convert-excel-to-json');
// const region = require('./regions');

// const result = excelToJson({
//     sourceFile: 'med.xlsx'
// });



// for (let index = 1; index < result['Лист1'].length; index++) {
//     const element = result['Лист1'][index]['B'];
//     const element1 = result['Лист1'][index]['C'];
//     const element2 = result['Лист1'][index]['D'];
//     const element3 = result['Лист1'][index]['E'];
//     const element4 = result['Лист1'][index]['F'];
//     const element5 = result['Лист1'][index]['G'];
//     console.log(element);
//     console.log(element1);
//     console.log(element2);
//     console.log(element3);
//     console.log(element4);
//     console.log(element5);
// }


// // console.log(region['areas'].filter(x => x.name.includes(result['Лист1'][1]['D'])) );




let {
    parsePhoneNumber,
    AsYouType,
    PhoneNumber,
    Metadata,
    getCountryCallingCode
} = require('libphonenumber-js');
let phones = ['380965895953', '+380965895953', '12345678999987', '123456', '23423406812']

let format = (phone, country = 'UA') => {
    if (phone) {
        const { Metadata, getCountryCallingCode } = require('libphonenumber-js');
        const metadata = new Metadata();
        metadata.selectNumberingPlan(country);
        let rx = /(?<=(?:^\+380)|(?:^380)|(?:^80)|(?:^0))\d+/gm;
        let number = phone.match(rx)?.[0] ?? phone;

        let maxLen = metadata.numberingPlan.possibleLengths()[0] + getCountryCallingCode(country).length;
        number = number.slice(0, maxLen);
        number = `+${getCountryCallingCode(country).slice(0, maxLen - number.length)}` + number;
        number = number + " ".repeat(maxLen + 1 - number.length);
        number = number.replace(/\+(.{2})(.{3})(.{3})(.{2})(.{2})/, "+$1 $2 $3 $4 $5").trimEnd();
        return number;
    }

    return '';
}
let time0 = Date.now();
for (let i = 0; i < 100000; i++) {
    phones.forEach(x => {
        let number = format(x);
    });
    process.stdout.write(`\r${~~(i / (100000 / 100))}%`);
}
let time1 = Date.now();
console.log(`Elapsed time:${time1 - time0}ms`);