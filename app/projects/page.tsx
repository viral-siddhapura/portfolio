import Image from 'next/image'
import NavigationBar from '../navigation_bar';
import ProjectList from './project_list';
import Footer from '../footer';
import Link from "next/link";

export default function Projects() {
    const project_title = "Projects";
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
                                <svg className='animate-fadeIn delay-4s' xmlns="http://www.w3.org/2000/svg" fill="none" height="66" viewBox="0 0 66 66" width="66"><path d="m28.1267 4.23225c1.1879-5.175299 8.5587-5.175287 9.7466.00001l3.7596 16.38014c.4287 1.8676 1.8871 3.326 3.7547 3.7547l16.3802 3.7596c5.1752 1.1879 5.1752 8.5587-.0001 9.7466l-16.3801 3.7596c-1.8676.4287-3.326 1.8871-3.7547 3.7547l-3.7596 16.3802c-1.1879 5.1752-8.5587 5.1752-9.7466-.0001l-3.7596-16.3801c-.4287-1.8676-1.8871-3.326-3.7547-3.7547l-16.38015-3.7596c-5.175299-1.1879-5.175287-8.5587.00001-9.7466l16.38014-3.7596c1.8676-.4287 3.326-1.8871 3.7547-3.7547z" fill="#FFCC4C" /></svg>
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
