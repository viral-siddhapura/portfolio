import Image from 'next/image'
import NavigationBar from '../navigation_bar';
import ProjectList from './project_list';
import Footer from '../footer';
import Link from "next/link";

export default function Projects() {
    const project_title = "Projects 🎒";
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
                                <h1 className="ml-5 overflow-hidden leading-6 text-black dark:text-white">
                                    {project_title.match(/./gu)!.map((char, index) => (
                                        <span
                                            className="animate-text-reveal font-medium inline-block [animation-fill-mode:backwards]"
                                            key={`${char}-${index}`}
                                            style={{ animationDelay: `${index * 0.04}s` }}
                                        >
                                            {char === " " ? "\u00A0" : char}
                                        </span>
                                    ))}
                                </h1>
                            </div>
                        </div>
                    </div>
                    <ProjectList />
                    <div className='flex flex-row justify-center mt-20 mb-20'>
                        <Link href="https://github.com/HVMS/" target="_blank" className="projects_button">
                            More Projects (GitHub)
                        </Link>
                    </div>
                    <Footer />
                </div>
            }
        </main>
    );
}

// References:

// 1. https://www.julienthibeaut.xyz/blog/create-text-reveal-effect-with-tailwind-css ==> Text Reveal Effect
