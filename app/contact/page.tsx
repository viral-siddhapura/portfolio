import Image from 'next/image'
import NavigationBar from '../navigation_bar'
import Footer from '../footer'
import ContactForm from './form';
import SocialMedia from '../social_media';
import Link from 'next/link';

export default function Contact() {
    const project_title = "Get In Touch ❓";
    return (
        <main className='flex flex-col'>
            {
                <div className='flex flex-col p-5'>
                    <NavigationBar />
                    <div className='flex flex-row md:flex-row justify-center'>
                        <div className='flex flex-row md:flex-row lg:flex-row my-20 justify-center md:justify-centerlg:justify-center'>
                            <h1 className='animate-zoomIn font-semibold font-sans text-black dark:text-white text-5xl'>{project_title}</h1>
                        </div>
                    </div>
                    <div>
                        <div className="grid sm:grid-cols-2 items-center gap-16 my-6 mx-auto max-w-4xl text-[#333] font-[sans-serif]">
                            <div className='animation_slideIn_left'>
                                <h1 className="text-3xl font-bold text-black dark:text-white">Am I right fit?</h1>
                                <p className="text-md text-zinc-600 dark:text-zinc-400 mt-3">Are you seeking a versatile and innovative software engineer with a proven track record in full-stack development, cloud architecture, and DevOps?</p>
                                <div className="mt-12">
                                    <h2 className="text-3xl font-bold text-black dark:text-white">Hire me</h2>
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
                                            <a href="mailto:viral.siddhapurra@gmail.com" className="text-[rgb(113,113,122)] text-lg ml-3">
                                                <strong>viral.siddhapurra@gmail.com</strong>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-12">
                                    <h2 className="text-3xl font-bold text-black dark:text-white">Socials</h2>
                                    <ul className="flex mt-3 space-x-6">
                                        <li className="h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                            <div>
                                                {/* Github Button */}
                                                <Link href="https://github.com/HVMS" target="_blank" rel="noopener noreferrer">
                                                    <button
                                                        type="button"
                                                        className="rounded-full p-3.5 hover:shadow-xl hover:shadow-zinc-800"
                                                        style={{ backgroundColor: '#333333' }}>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-5 w-5"
                                                            fill="#fff"
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
                                                <Link href="mailto:viral.siddhapurra@gmail.com">
                                                    <button
                                                        type="button"
                                                        className="rounded-full p-3.5 hover:shadow-lg hover:shadow-red-400"
                                                        style={{ backgroundColor: '#EA4335' }}>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-5 w-5"
                                                            fill="#fff"
                                                            viewBox="0 0 24 24">
                                                            <path
                                                                d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z" />
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
                                                        className="rounded-full p-3.5 hover:shadow-lg hover:shadow-cyan-300"
                                                        style={{ backgroundColor: '#0D76A9' }}>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-5 w-5"
                                                            fill="#fff"
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
                    {/* <Footer /> */}
                </div>
            }
        </main>
    );
}