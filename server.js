const path = require('path');
const express = require('express');
const app = express();
app.use(express.static(path.join(__dirname, 'build')))
app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/build/index.html`);
});
app.listen(8080,'0.0.0.0' , () => {
    console.log('Application listening on port 3333!');
});