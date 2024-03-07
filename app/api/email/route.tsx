import { NextResponse, NextRequest } from "next/server";
const nodeMailer = require('nodemailer');

export async function POST(request: any) {
    const { name, email, subject, message } = await request.json();
    console.log("name: ", name, " email: ", email, " subject: ", subject, " message: ", message);

    const username = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;

    const transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            user: username,
            pass: pass,
        }
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: subject,
        text: message,
        html: `
            <p>Name: ${name} </p>
            <p>Email: ${email} </p>
            <p>Subject: ${subject} </p>
            <p>Message: ${message} </p>
            `,
    };

    return transporter.sendMail(mailOptions)
        .then((info:any) => {
            console.log('Email sent: ' + info.response);
            return NextResponse.json({ status: '200', message: "Email sent" });
        })
        .catch((error:any) => {
            console.error(error);
            return NextResponse.json({ status: '400', message: "Error sending email" });
        });
}