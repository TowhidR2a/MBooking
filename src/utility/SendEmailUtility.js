const nodemailer = require('nodemailer');

const SendEmailUtility = async (EmailTo,EmailSubject,EmailText)=>{

    let SMTP_USER = process.env.MAIL_SMTP_USER

    let  transporter = nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:587,
        secure:false,
        auth: {
            user: SMTP_USER,
            pass: process.env.MAIL_SMTP_PASSWORD
        },
        tls:{rejectUnauthorized:false}
    })

    let mailOptions = {
        from:`MBooking System <${SMTP_USER}>`,
        to:EmailTo,
        subject:EmailSubject,
        text:EmailText
    }

    return await transporter.sendMail(mailOptions)
}

module.exports=SendEmailUtility;