const fs = require('node:fs');

const contact = async (req, res) => {
    try {
        const { 
            
            name,
            email,
            subject,
            description,
        } = req.body;
        console.log(req.body)

        var nodemailer = require('nodemailer');

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.gmail_user,
                pass: process.env.gmail_pass
            }
        });

        var mailOptions = {
            from: email,
            to: 'dato9613@gmail.com',
            //   to: 'myfriend@yahoo.com, myotherfriend@yahoo.com',
            // text: text,
            subject: subject,
            html: `
                <p>სახელი: ${name}</p>
                <p>ემაილი: ${email}</p>
                <p>სათური: ${subject}</p>
                <p>აღწერა: ${description}</p>
                `
        };

        transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
        });
    } catch (error) {
        console.log(error)
        return res.status(500).send("Something went wrong while getting cars!");
    }
};

module.exports = {contact}