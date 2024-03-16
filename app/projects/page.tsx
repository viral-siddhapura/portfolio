import Image from 'next/image'
import NavigationBar from '../navigation_bar';
import ProjectList from './project_list';
import Footer from '../footer';
import Link from "next/link";
import ProjectHeading from './project_heading';

export default function Projects() {
    return (
        <main className='flex min-h-screen flex-col'>
            {
                <div className='flex flex-col p-5'>
                    <NavigationBar />
                    <ProjectHeading />
                    <ProjectList />
                    <div className='flex flex-row justify-center'>
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
