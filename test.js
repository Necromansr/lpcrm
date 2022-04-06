


const excelToJson = require('convert-excel-to-json');
const region = require('./regions');

const result = excelToJson({
    sourceFile: 'med.xlsx'
});



for (let index = 1; index < result['Лист1'].length; index++) {
    const element = result['Лист1'][index]['B'];
    const element1 = result['Лист1'][index]['C'];
    const element2 = result['Лист1'][index]['D'];
    const element3 = result['Лист1'][index]['E'];
    const element4 = result['Лист1'][index]['F'];
    const element5 = result['Лист1'][index]['G'];
    console.log(element);
    console.log(element1);
    console.log(element2);
    console.log(element3);
    console.log(element4);
    console.log(element5);
}


// console.log(region['areas'].filter(x => x.name.includes(result['Лист1'][1]['D'])) );

