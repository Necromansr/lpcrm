


const excelToJson = require('convert-excel-to-json');
const region = require('./regions');

const result = excelToJson({
    sourceFile: 'med.xlsx'
});



console.log(result['Лист1'][1]['D']);


// console.log(region['areas'].filter(x => x.name.includes(result['Лист1'][1]['D'])) );

