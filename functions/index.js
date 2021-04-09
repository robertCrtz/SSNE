const functions = require("firebase-functions");
const nodemailer = require ("nodemailer");
const express = require('express');
const cors = require('cors');

if(process.env.NODE_ENV !="production" ){
    require('dotenv').config()
}

const app = express();
app.use(cors({ origin:true }));


app.post('/', (req, res) =>{
    const {body} = req;
    const isValidMessage = body.message && body.to && body.subject;

    if(!isValidMessage){
        return res.status(400).send ({message: 'Invalid request'});
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "robertelias3306@gmail.com",
            pass: "uzlnjbsqogngqcht"
        }
    });

    //email to send
    const mailOptions = {
        from: "robertelias3306@gmail.com",
        to: "robertelias3306@gmail.com",
        subject: "Interested customer!",
        html: `
            <b>Hello world</b>
            ${this.name}
        `
    };

    transporter.sendMail(mailOptions, (err, data) =>{
        if(err){
            return res.status(500).send({ message: "error "+ err.message });
        }

        return res.send ({ message: "email sent" });
    });
});

module.exports.mailer = functions.https.onRequest(app);