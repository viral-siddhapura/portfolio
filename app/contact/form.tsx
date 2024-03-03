"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function ContactForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    async function handleSubmit(event: any) {

        event.preventDefault();

        try {

            console.log("name: ", name, " email: ", email, " subject: ", subject, " message: ", message);

            const response = await fetch('http://127.0.0.1:3000/api/email', {
                headers: { 'Content-Type': 'application/json' },
                method: 'POST',
                body: JSON.stringify({
                    name: name,
                    email: email,
                    subject: subject,
                    message: message
                }),
                mode: 'no-cors',
            });

            if (!response.ok) {
                console.log("falling over")
                throw new Error(`response status: ${response.status}`);
            }

            const responseData = await response.json();
            console.log(responseData['message'])

            alert('Message successfully sent');
        } catch (err) {
            console.error(err);
            alert("Error, please try resubmitting the form");
        }
    }

    return (
        <main className="flex flex-row items-center">
            <form className="animation_slideIn_right" onSubmit={handleSubmit} >
                <div>
                    <input type='text' placeholder='John Doe' name='name' id="form-name" autoComplete="name" maxLength={50}
                        className="w-full rounded-md my-2 py-3 px-4 bg-[#292929] text-sm text-white border-2 border-blue-400" 
                        onChange={(e) => setName(e.target.value)} />
                    <input type='email' placeholder='hello@example.com' name='email' id="form-email" required autoComplete="email"
                        className="w-full rounded-md my-2 py-3 px-4 bg-[#292929] text-sm text-white border-2 border-blue-400"
                        onChange={(e) => setEmail(e.target.value)} />
                    <input type='text' placeholder='Subject' name='subject' id="form-subject" required autoComplete="subject"
                        className="w-full rounded-md my-2 py-3 px-4 bg-[#292929] text-sm text-white border-2 border-blue-400" 
                        onChange={(e) => setSubject(e.target.value)}  />
                    <textarea placeholder='I heard you are the best' rows={6} required name='message' id="form-message"
                        className="w-full rounded-md my-2 py-3 px-4 bg-[#292929] text-sm text-white border-2 border-blue-400" 
                        onChange={(e) => setMessage(e.target.value)} />
                </div>
                <button type='submit'
                    className=" w-full bg-[#2f60d1] hover:bg-[#5c80d5] font-semibold rounded-md text-sm text-white px-4 py-4">Send Message</button>
            </form>
        </main>
    );
}