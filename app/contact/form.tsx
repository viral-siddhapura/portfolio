export default function ContactForm() {
    return (
        <form className="ml-auto space-y-4 rounded-lg p-5 bg-[#303030] shadow-md shadow-gray-600">
            <input type='text' placeholder='Enter your name'
                className="w-full rounded-md py-3 px-4 bg-[#292929] text-sm text-white outline-[#fcfcfc]" />
            <input type='email' placeholder='Email'
                className="w-full rounded-md py-3 px-4 bg-[#292929] text-sm text-white outline-[#fcfcfc]" />
            <input type='text' placeholder='Subject'
                className="w-full rounded-md py-3 px-4 bg-[#292929] text-sm text-white outline-[#fcfcfc]" />
            <textarea placeholder='Message' rows={6}
                className="w-full rounded-md py-3 px-4 bg-[#292929] text-sm text-white outline-[#fcfcfc]"></textarea>
            <button type='button'
                className="bg-[#2f60d1] font-semibold rounded-md text-sm text-white px-4 py-4 w-full">Send Message</button>
        </form>
    );
}