"use client";
import Link from 'next/link';

export default function ContactForm() {

    async function handleSubmit(event: any) {
        event.preventDefault();
        const formData = new FormData(event.target)
        try {
  
            const response = await fetch('/api/contact', {
                method: 'post',
                body: formData,
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
        <form className="animation_slideIn_right" onSubmit={handleSubmit} >
            <input type='text' placeholder='John Doe'
                className="w-full rounded-md my-2 py-3 px-4 bg-[#292929] text-sm text-white border-2 border-blue-400" />
            <input type='email' placeholder='hello@example.com'
                className="w-full rounded-md my-2 py-3 px-4 bg-[#292929] text-sm text-white border-2 border-blue-400" />
            <input type='text' placeholder='Subject'
                className="w-full rounded-md my-2 py-3 px-4 bg-[#292929] text-sm text-white border-2 border-blue-400" />
            <textarea placeholder='I heard you are the best' rows={6}
                className="w-full rounded-md my-2 py-3 px-4 bg-[#292929] text-sm text-white border-2 border-blue-400"></textarea>
            <button type='button'
                className=" w-full bg-[#2f60d1] hover:bg-[#5c80d5] font-semibold rounded-md text-sm text-white px-4 py-4">Send Message</button>
        </form>
    );
}