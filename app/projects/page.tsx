import Image from 'next/image'
import NavigationBar from '../navigation_bar';

export default function Projects() {
    const project_title = "Welcome To My Universe.";
    return (
        <main className='flex min-h-screen flex-col'>
            {
                <div className='flex flex-col'>
                    <div className='sticky-nav'>
                        <NavigationBar />
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex flex-row my-20  justify-center'>
                            <div className='flex flex-col'>
                                <h1 className="overflow-hidden leading-6 text-white">
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
                            </div>
                        </div>
                    </div>
                </div>
            }
        </main>
    );
}

// References:

// 1. https://www.julienthibeaut.xyz/blog/create-text-reveal-effect-with-tailwind-css ==> Text Reveal Effect
