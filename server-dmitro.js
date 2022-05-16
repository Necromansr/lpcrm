const path = require('path');
const express = require('express');
const app = express();
app.use(express.static(path.join(__dirname, 'dmitro')))

app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/dmitro/index.html`);
});

app.listen(7777,'0.0.0.0' , () => {
    console.log('Application listening on port 3333!');
});




// // let f = code => console.log(code);
//     //
// let country = { code: '380', get: function () {
//     return Array(this.code.length).fill(this.code).map((x, i) => x.slice(i, this.code.length)).reverse();
// }
// };

// console.log(country.get());