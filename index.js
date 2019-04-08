const nodemailer = require('nodemailer')
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const settings = {
    port: process.env.PORT || 3000
}


let mailOptions = null;

// create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        auth: {
            user: 'from@gmail.com',
            pass: 'password'
        }
    });

    mailOptions = {
        from: 'from@gmail.com', // sender address
        to: 'to@email.com',
        subject: 'Message Test', // Subject line
        html: '<p>HELLO !</p>',
    };


    // send mail with defined transport object

    app.get('/send/email/', (req, res) => {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message %s sent: %s', info.messageId, info.response);
        });
    })

    app.listen(settings.port, function() {
        console.log("Listening on port: ", settings.port);
    })