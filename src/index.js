const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const viewsPath = path.join(__dirname, '../public/views');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
// hbs.registerPartials(path.join(__dirname, '../public/views/partials'));
app.use(express.static(publicPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Encoder',
        subtitle: 'Encode your messages',
        message1: 'Use the ',
        message2: ' to decode the message!',
        boldtext: 'strong'
    });
});

app.listen(port, () => {
    console.log('Server is up and running on port ' + port);
    console.log(path.join(__dirname, '../public/views/partials'));
});