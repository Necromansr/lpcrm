


// // const excelToJson = require('convert-excel-to-json');
// // const region = require('./regions');

// // const result = excelToJson({
// //     sourceFile: 'med.xlsx'
// // });



// // for (let index = 1; index < result['Лист1'].length; index++) {
// //     const element = result['Лист1'][index]['B'];
// //     const element1 = result['Лист1'][index]['C'];
// //     const element2 = result['Лист1'][index]['D'];
// //     const element3 = result['Лист1'][index]['E'];
// //     const element4 = result['Лист1'][index]['F'];
// //     const element5 = result['Лист1'][index]['G'];
// //     console.log(element);
// //     console.log(element1);
// //     console.log(element2);
// //     console.log(element3);
// //     console.log(element4);
// //     console.log(element5);
// // }


// // // console.log(region['areas'].filter(x => x.name.includes(result['Лист1'][1]['D'])) );




// let {
//     parsePhoneNumber,
//     AsYouType,
//     PhoneNumber,
//     Metadata,
//     getCountryCallingCode
// } = require('libphonenumber-js');
// let phones = ['380965895953', '+380965895953', '12345678999987', '123456', '23423406812']

// let format = (phone, country = 'UA') => {
//     if (phone) {
//         const { Metadata, getCountryCallingCode } = require('libphonenumber-js');
//         const metadata = new Metadata();
//         metadata.selectNumberingPlan(country);
//         let rx = /(?<=(?:^\+380)|(?:^380)|(?:^80)|(?:^0))\d+/gm;
//         let number = phone.match(rx)?.[0] ?? phone;

//         let maxLen = metadata.numberingPlan.possibleLengths()[0] + getCountryCallingCode(country).length;
//         number = number.slice(0, maxLen);
//         number = `+${getCountryCallingCode(country).slice(0, maxLen - number.length)}` + number;
//         number = number + " ".repeat(maxLen + 1 - number.length);
//         number = number.replace(/\+(.{2})(.{3})(.{3})(.{2})(.{2})/, "+$1 $2 $3 $4 $5").trimEnd();
//         return number;
//     }

//     return '';
// }
// let time0 = Date.now();
// for (let i = 0; i < 100000; i++) {
//     phones.forEach(x => {
//         let number = format(x);
//     });
//     process.stdout.write(`\r${~~(i / (100000 / 100))}%`);
// }
// let time1 = Date.now();
// console.log(`Elapsed time:${time1 - time0}ms`);


let t = {
    "Украина": {
        "title": "Посольство Украины",
        "number": "+38 (044) 238-16-57",
        "source": 0
    },
    "Австралия": {
        "title": "Посольство Украины",
        "number": "(+61) 452 664 592",
        "source": 0
    },
    "Австрия": {
        "title": "Посольство Украины",
        "number": "(+43) 1 479 717 252",
        "source": 0
    },
    "Азербайджан": {
        "title": "Посольство Украины",
        "number": "(+99450) 255 75 18",
        "source": 0
    },
    "Албания": {
        "title": "Посольство Украины",
        "number": "(+3069) 3276 5606",
        "source": 0
    },
    "Алжир": {
        "title": "Посольство Украины",
        "number": "(+213) 553 384 241",
        "source": 0
    },
    "Ангола": {
        "title": "Посольство Украины",
        "number": "(+244) 2227 167 58",
        "source": 0
    },
    "Аргентина": {
        "title": "Посольство Украины",
        "number": "(+549) 1161 99 94 14",
        "source": 0
    },
    "Афганистан": {
        "title": "Посольство Украины",
        "number": "(+992) 37 235 84 12",
        "source": 0
    },
    "Бангладеш": {
        "title": "Посольство Украины",
        "number": "(+91) 9205 507 157",
        "source": 0
    },
    "Бельгия": {
        "title": "Посольство Украины",
        "number": "(+320) 47 625 77 35",
        "source": 0
    },
    "Бенин": {
        "title": "Посольство Украины",
        "number": "(+234)8091155338",
        "source": 0
    },
    "Беларусь": {
        "title": "Посольство Украины",
        "number": "(+375) 2560 311 84",
        "source": 0
    },
    "Болгария": {
        "title": "Посольство Украины",
        "number": "(+359) 878 015 102",
        "source": 0
    },
    "Боливия": {
        "title": "Посольство Украины",
        "number": "(+55)-61-33-65-14-57",
        "source": 0
    },
    "Босния и Герцоговина": {
        "title": "Посольство Украины",
        "number": "(+3851)-461-62-96",
        "source": 0
    },
    "Ботсвана": {
        "title": "Посольство Украины",
        "number": "(+460) 8545 258 80",
        "source": 0
    },
    "Бразилия": {
        "title": "Посольство Украины",
        "number": "(+55) 1195 9578 289",
        "source": 0
    },
    "Ватикан": {
        "title": "Посольство Украины",
        "number": "(+39) 0639 378 800",
        "source": 0
    },
    "Великая Британия": {
        "title": "Посольство Украины",
        "number": "(+44) 7553 483 628",
        "source": 0
    },
    "Въетнам": {
        "title": "Посольство Украины",
        "number": "(+8424) 9034 222 16",
        "source": 0
    },
    "Армения": {
        "title": "Посольство Украины",
        "number": "(+374) 7710 0273",
        "source": 0
    },
    "Гватемала": {
        "title": "Посольство Украины",
        "number": "(+52155) 78 78 07 08",
        "source": 0
    },
    "Гвинея": {
        "title": "Посольство Украины",
        "number": "(+7499) 238 10 85",
        "source": 0
    },
    "Гвинея-Бисау": {
        "title": "Посольство Украины",
        "number": "(+221) 77 474 55 63",
        "source": 0
    },
    "Греция": {
        "title": "Посольство Украины",
        "number": "(+3069) 327 656 06",
        "source": 0
    },
    "Грузия": {
        "title": "Посольство Украины",
        "number": "(+995) 5950 822 88",
        "source": 0
    },
    "Дания": {
        "title": "Посольство Украины",
        "number": "(+45) 7154 1531",
        "source": 0
    },
    "Эквадор": {
        "title": "Посольство Украины",
        "number": "(+51)-16-39-68-56",
        "source": 0
    },
    "Эстония": {
        "title": "Посольство Украины",
        "number": "(+372) 588 744 77",
        "source": 0
    },
    "Эфиопия": {
        "title": "Посольство Украины",
        "number": "(+251)-96-741-90-01",
        "source": 0
    },
    "Египет": {
        "title": "Посольство Украины",
        "number": "(+20)100 003 96 48",
        "source": 0
    },
    "Йемен": {
        "title": "Посольство Украины",
        "number": "(+966)114508534",
        "source": 0
    },
    "Израиль": {
        "title": "Посольство Украины",
        "number": "(+972) 54 667 67 82",
        "source": 0
    },
    "Индия": {
        "title": "Посольство Украины",
        "number": "(+9192) 055 071 57",
        "source": 0
    },
    "Индонезия": {
        "title": "Посольство Украины",
        "number": "(+62) 8788 489 0918",
        "source": 0
    },
    "Ирак": {
        "title": "Посольство Украины",
        "number": "(+964) 780 986 51 70",
        "source": 0
    },
    "Иран": {
        "title": "Посольство Украины",
        "number": "(+98) 9128 436 681",
        "source": 0
    },
    "Ирландия": {
        "title": "Посольство Украины",
        "number": "(+353) 86 069 09 30",
        "source": 0
    },
    "Исландия": {
        "title": "Посольство Украины",
        "number": "(+35840) 471 92 00",
        "source": 0
    },
    "Испания": {
        "title": "Посольство Украины",
        "number": "(+34620) 641 324",
        "source": 0
    },
    "Австрия": {
        "title": "Посольство Украины",
        "number": "(+43) 1 479 717 252",
        "source": 0
    },
    "Австрия": {
        "title": "Посольство Украины",
        "number": "(+43) 1 479 717 252",
        "source": 0
    }
}