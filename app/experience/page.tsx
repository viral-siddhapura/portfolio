import Image from 'next/image'
import NavigationBar from '../navigation_bar';
import Footer from '../footer';
import Link from "next/link";
import ExperienceList from './experience_list';

export default function Experience() {
    const project_title = "Experience";
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
                                <Image
                                    className='animate-fadeIn delay-4s' 
                                    src="/images/experience.svg"
                                    alt="Experience"
                                    width={64}
                                    height={64}
                                />
                            </div>
                        </div>
                    </div>
                    <ExperienceList />
                    <Footer />
                </div>
            }
        </main>
    );
}

// References:

// 1. https://www.julienthibeaut.xyz/blog/create-text-reveal-effect-with-tailwind-css ==> Text Reveal Effect
