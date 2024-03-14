import Image from 'next/image'
import NavigationBar from '../navigation_bar';
import Footer from '../footer';
import Link from "next/link";
import ExperienceList from './experience_list';

export default function Experience() {
    const project_title = "Experience 💼";
    return (
        <main className='flex min-h-screen flex-col'>
            <div className='flex flex-col flex-grow p-5'>
                <NavigationBar />
                <div className='flex flex-col md:flex-row justify-center'>
                    <div className='flex flex-row my-20 justify-center md:justify-center'>
                        <h1 className="ml-5 overflow-hidden leading-6 text-black dark:text-white">
                            {project_title.match(/./gu)!.map((char, index) => (
                                <span
                                    className="animate-text-reveal font-medium inline-block [animation-fill-mode:backwards]"
                                    key={`${char}-${index}`}
                                    style={{ animationDelay: `${index * 0.05}s` }}
                                >
                                    {char === " " ? "\u00A0" : char}
                                </span>
                            ))}
                        </h1>
                    </div>
                </div>
                <ExperienceList />
                <Footer />
            </div>
        </main>
    );
}

// References:

// 1. https://www.julienthibeaut.xyz/blog/create-text-reveal-effect-with-tailwind-css ==> Text Reveal Effect
