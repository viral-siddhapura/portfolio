import Image from 'next/image'
import NavigationBar from '../navigation_bar'
import Footer from '../footer'
import ContactForm from './form';
import SocialMedia from '../social_media';
import Link from 'next/link';

export default function Contact() {
    const project_title = "Get In Touch";
    return (
        <main className='flex flex-col'>
            {
                <div className='flex flex-col p-5'>
                    <div>
                        <NavigationBar />
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex flex-row my-20 justify-center'>
                            <div className='flex flex-row'>
                                <h1 className="ml-5 overflow-hidden leading-6 text-white">
                                    {project_title.match(/./gu)!.map((char, index) => (
                                        <span
                                            className="animate-text-reveal inline-block [animation-fill-mode:backwards]"
                                            key={`${char}-${index}`}
                                            style={{ animationDelay: `${index * 0.04}s` }}
                                        >
                                            {char === " " ? "\u00A0" : char}
                                        </span>
                                    ))}
                                </h1>
                                <svg width="100px" height="100px" viewBox="0 0 1024 1024" className='animate-fadeIn delay-4s' version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M715.720415 207.522102C675.902539 136.26685 603.803606 95.397443 518.015326 95.397443c-129.594189 0-205.287984 72.306782-238.682003 195.401348-20.885213 76.845665 110.976883 131.618411 140.38594 27.173916 15.792407-56.028029 37.099461-79.499576 98.296063-79.499576 33.883437 0 58.475115 13.134401 72.864799 38.912762 15.649063 28.014526 14.18286 62.384309 3.633769 79.571248-17.119363 27.874254-35.489913 44.013758-56.72939 62.663829-44.432528 39.05201-99.619947 88.864031-99.619946 221.809398 0 70.489385 71.537844 71.537844 71.537843 71.537844 39.470779 0 71.537844-32.067064 71.537844-71.537844 0-69.581199 14.880125-82.643928 50.856384-114.224647 25.013518-21.933671 55.960452-49.11066 84.325148-95.35956 39.677604-64.691123 39.399107-152.714544-0.701362-224.324059z" fill="#F4CE73"></path><path d="M670.72987 403.764058c-24.240485 39.399107-50.648535 62.595229-73.980834 83.134369-40.172141 35.210392-69.16243 60.710256-69.16243 154.531941 0 9.850801-7.965828 17.884205-17.884205 17.884205-9.850801 0-17.884205-8.033404-17.884205-17.884205 0-110.031836 39.470779-144.68114 81.316973-181.430432 22.494761-19.769178 45.759483-40.168045 67.066536-74.960692 22.355512-36.326427 21.307054-91.374598-2.514662-133.850481-23.893388-42.758475-66.436847-66.369271-119.671717-66.369271-86.768138 0-134.762763 39.12061-150.969843 123.022894-1.884973 9.711552-11.213592 16.070904-20.925144 14.182859-9.711552-1.884973-16.067832-11.245333-14.181836-20.956885 19.493753-100.879326 82.05417-152.017278 186.076823-152.017278 66.78804 0 120.368983 30.11042 150.898172 84.672245 30.32134 54.071384 31.018606 122.393204 1.816372 170.040731z" fill="#F4CE73"></path><path d="M513.19385 757.121218c-47.433535 0-85.859952 38.423345-85.859951 85.859952 0 47.433535 38.426416 85.859952 85.859951 85.859952 47.364935 0 85.791351-38.426416 85.791352-85.859952 0-47.436607-38.426416-85.859952-85.791352-85.859952z" fill="#F4CE73"></path><path d="M513.19385 875.187483c-17.812533 0-32.206313-14.39378-32.206313-32.206313 0-17.744957 14.39378-32.206313 32.206313-32.206313 17.744957 0 32.138736 14.461356 32.138737 32.206313-0.001024 17.812533-14.39378 32.206313-32.138737 32.206313z" fill="#F4CE73"></path></g></svg></div>
                        </div>
                    </div>
                    {/* <div className='flex flex-col justify-center items-center'>
                        <p className='text-xl font-medium text-gray-500 dark:text-gray-400'>I'm currently looking for new opportunities, my inbox is always open.</p>
                        <p className='text-xl font-medium text-gray-500 dark:text-gray-400'>You can contact me at the places mentioned below. I will try to get back to you as fast as I can.</p>
                        <SocialMedia />
                    </div> */}
                    <div>
                        <div className="grid sm:grid-cols-2 items-center gap-16 my-6 mx-auto max-w-4xl text-[#333] font-[sans-serif]">
                            <div>
                                <h1 className="text-3xl font-bold text-white">Am I right fit?</h1>
                                <p className="text-md text-gray-500 dark:text-gray-400 mt-3">Are you seeking a versatile and innovative software engineer with a proven track record in full-stack development, cloud architecture, and DevOps?</p>
                                <div className="mt-12">
                                    <h2 className="text-3xl font-bold text-white">Email</h2>
                                    <ul className="mt-3">
                                        <li className="flex items-center">
                                            <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#18181B'
                                                    viewBox="0 0 479.058 479.058">
                                                    <path
                                                        d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                                        data-original="#000000" />
                                                </svg>
                                            </div>
                                            <a href="mailto:viral.siddhapurra@gmail.com" className="text-[#9CA3AF] text-lg ml-3">
                                                <strong>viral.siddhapurra@gmail.com</strong>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-12">
                                    <h2 className="text-3xl font-bold text-white">Socials</h2>
                                    <ul className="flex mt-3 space-x-4">
                                        <li className="h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                            <div>
                                                {/* Github Button */}
                                                <Link href="https://github.com/HVMS" target="_blank" rel="noopener noreferrer">
                                                    <button
                                                        type="button"
                                                        data-te-ripple-init
                                                        data-te-ripple-color="light"
                                                        className="social_media_css hover:shadow-lg hover:shadow-zinc-800"
                                                        style={{ backgroundColor: '#333333' }}>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-4 w-4"
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24">
                                                            <path
                                                                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                        </svg>
                                                    </button>
                                                </Link>
                                            </div>
                                        </li>
                                        <li className="h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                            <div>
                                                <Link href="https://www.instagram.com/viru_1116/" target="_blank" rel="noopener noreferrer">
                                                    <button
                                                        type="button"
                                                        data-te-ripple-init
                                                        data-te-ripple-color="light"
                                                        className="social_media_css hover:shadow-lg hover:shadow-rose-500"
                                                        style={{ backgroundColor: '#E4405F' }}>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-4 w-4"
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24">
                                                            <path
                                                                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                                        </svg>
                                                    </button>
                                                </Link>
                                            </div>
                                        </li>
                                        <li className="h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                            <div>
                                                <Link href="https://www.linkedin.com/in/viral-siddhapura-a5042714a/" target="_blank" rel="noopener noreferrer">
                                                    <button
                                                        type="button"
                                                        data-te-ripple-init
                                                        data-te-ripple-color="light"
                                                        className="social_media_css hover:shadow-lg hover:shadow-sky-300"
                                                        style={{ backgroundColor: '#0D76A9' }}>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-4 w-4"
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24">
                                                            <path
                                                                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                                        </svg>
                                                    </button>
                                                </Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <ContactForm></ContactForm>
                        </div>
                    </div>
                    <Footer />
                </div>
            }
        </main>
    );
}