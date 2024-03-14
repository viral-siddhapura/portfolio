"use client";
import { useState } from 'react';
import ThemeToggle from './components/ThemeToggle';

export default function NavigationBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex items-center space-x-3 rtl:space-x-reverse mx-5">
                    <div className="flex justify-between items-center bg-[#E1FBEA] dark:bg-[#1C3226] rounded-full p-1">
                        <div className="text-normal font-medium text-green-500 mx-1.5">Available for work</div>
                    </div>
                </div>
                <button onClick={toggleMenu} data-collapse-toggle="navbar-default" type="button" className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ${isOpen ? 'active' : ''}`} aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`w-full md:block md:w-auto ${isOpen ? 'block' : 'hidden'}`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 items-center justify-center space-y-4 md:space-y-0">
                        <li className='md:mx-2'>
                            <a href="/" className="top_horizontal_div" aria-current="page">About</a>
                        </li>
                        <li className='md:mx-2'>
                            <a href="/experience" className="top_horizontal_div">Experience</a>
                        </li>
                        <li className='md:mx-2'>
                            <a href="/projects" className="top_horizontal_div">Project</a>
                        </li>
                        <li className='md:mx-2'>
                            <a href="/education" className="top_horizontal_div">Education</a>
                        </li>
                        <li className='md:mx-2'>
                            <a href="/contact" className="top_horizontal_div">Contact</a>
                        </li>
                        <li className='md:mx-2'>
                            <ThemeToggle />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}