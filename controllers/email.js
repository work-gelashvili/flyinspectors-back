const fs = require('node:fs');

const emailSend = async (req, res) => {
    try {
        const { 
            passportImage,
            ticketImage,
            firstName,
            lastName,
            phone,
            email,
            city,
            address,
            problem,
            flightNumber,
            date,
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
            from: 'datoogelashvili@gmail.com',
            to: 'dato9613@gmail.com',
            //   to: 'myfriend@yahoo.com, myotherfriend@yahoo.com',
            // text: text,
            subject: 'NEW CLIENT',
            attachments: [
                {
                    filename: 'pasport-image.jpg',
                    path: String(passportImage)
                },
                {
                    filename: 'ticket-image.jpg',
                    path: String(ticketImage)
                }
            ],
            html: `
                <h1>მოგესალმებით</h1>
                <p>სახელი: ${firstName}</p>
                <p>გვარი: ${lastName}</p>
                <p>ტელ: ${phone}</p>
                <p>ემაილი: ${email}</p>
                <p>ქალაქი: ${city}</p>
                <p>მისამართი: ${address}</p>
                <p>პრობლემა: ${problem}</p>
                <p>ფრენის ნომერი: ${flightNumber}</p>
                <p>დრო: ${date}</p>
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

module.exports = {emailSend}