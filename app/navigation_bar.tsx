"use client";
import { useState } from 'react';
import Link from "next/link";

export default function NavigationBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/#" className="flex items-center space-x-3 rtl:space-x-reverse mx-5">
                    <img src="/images/viral_35_45mm.jpg" className="rounded-full h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl text-white font-semibold whitespace-nowrap dark:text-white">Viral Siddhapura</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="#" className="top_horizontal_div" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" className="top_horizontal_div">About</a>
                        </li>
                        <li>
                            <a href="#" className="top_horizontal_div">Services</a>
                        </li>
                        <li>
                            <a href="#" className="top_horizontal_div">Pricing</a>
                        </li>
                        <li>
                            <a href="#" className="top_horizontal_div">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


        // <nav>
        //     <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        //         <button onClick={toggleMenu} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        //             <span className="sr-only">Open main menu</span>
        //             <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        //                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
        //             </svg>
        //         </button>
        //     </div>
        //     <div className={isOpen ? 'block w-full md:block md:w-auto' : 'hidden w-full md:block md:w-auto'} id="navbar-default">
        //         <div className="">
        //             <div className='border_top_div bg-zinc-800'>
        //                 <ul className="flex flex-col md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        //                     <li>
        //                         <Link className='top_horizontal_div' href={'/'}>About</Link>
        //                     </li>
        //                     <li>
        //                         <Link className='top_horizontal_div' href={'/experience'}>Experience</Link>
        //                     </li>
        //                     <li>
        //                         <Link className='top_horizontal_div' href={'/projects'}>Projects</Link>
        //                     </li>
        //                     <li>
        //                         <Link className='top_horizontal_div' href={'/education'}>Education</Link>
        //                     </li>
        //                     <li>
        //                         <Link className='top_horizontal_div' href={'/contact'}>Contact</Link>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>
        //     {/* <div className={isOpen ? 'block w-full md:block md:w-auto' : 'hidden w-full md:block md:w-auto'} id="navbar-default">
        //         <div className='flex flex-row items-center justify-center p-8'>
        //             <div className='border_top_div bg-zinc-800'>
        //                 <ul className="flex flex-row sm:flex-row sm:space-x-6 mx-2 space-x-6">
        //                     <li>
        //                         <Link className='top_horizontal_div' href={'/'}>About</Link>
        //                     </li>
        //                     <li>
        //                         <Link className='top_horizontal_div' href={'/experience'}>Experience</Link>
        //                     </li>
        //                     <li>
        //                         <Link className='top_horizontal_div' href={'/projects'}>Projects</Link>
        //                     </li>
        //                     <li>
        //                         <Link className='top_horizontal_div' href={'/education'}>Education</Link>
        //                     </li>
        //                     <li>
        //                         <Link className='top_horizontal_div' href={'/contact'}>Contact</Link>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </div> */}
        // </nav>
    );
}

// sm:flex-row sm:space-x-6 mx-2 space-x-6
// font-medium flex flex-row md:p-0 mt-4 border_top_div bg-zinc-800
// border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700