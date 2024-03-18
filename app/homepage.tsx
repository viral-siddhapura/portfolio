import Link from 'next/link'
import Image from 'next/image'
import SocialMedia from './social_media'

export default function HomePage() {
    return (
        <div className='flex flex-col my-5 sm:my-10 md:my-20'>
            <div className='flex flex-col sm:flex-row'>
                <div className='animation_slideIn_left flex flex-col sm:w-2/3 md:w-2/3 lg:w-2/3'>
                    <div>
                        <p className='mx-5 sm:mx-10 md:mx-20 lg:mx-60 text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-black dark:text-white font-bold p-2 sm:p-3 md:p-4 lg:p-4'>
                            Hello, I'm Viral! 🤔
                        </p>
                    </div>
                    <div className='mx-5 sm:mx-10 md:mx-20 lg:mx-60 font-bold p-2 sm:p-3 md:p-4 lg:p-4'>
                        <p className='text-base sm:text-lg md:text-2xl lg:text-4xl font-medium text-zinc-600 dark:text-zinc-400'>
                            Human 🧔🏽‍♂️ | Full Stack Developer
                        </p>
                    </div>
                    <div className='flex flex-row mx-5 sm:mx-10 md:mx-20 lg:mx-60 font-bold p-1 sm:p-3 md:p-4 lg:p-4'>
                        <Link href={'https://www.google.com/maps/place/Halifax,+NS,+Canada'} target='_blank' >
                            <Image src="/images/location.svg" alt="location" width={24} height={24} />
                        </Link>
                        <p className='ml-2 text-base sm:text-md md:text-lg lg:text-xl font-medium text-[#3F99E2] dark:text-[#3F99E2]'>Halifax, Canada</p>
                    </div>
                    <div className='mx-5 sm:mx-10 md:mx-20 lg:mx-60 font-bold p-2 sm:p-3 md:p-4 lg:p-4'>
                        <p className='text-xs sm:text-sm md:text-base lg:text-base font-medium text-zinc-600 dark:text-zinc-400'>
                            Passionate about learning Next generation web & Cloud technologies with 3+ years of experience. Skilled in Python, Lightning Web Components, Core Java, AWS, and Web Development.
                        </p>
                    </div>
                    <SocialMedia />
                    <div className='flex flex-col sm:flex-row mx-5 sm:mx-10 md:mx-20 lg:mx-60 space-y-4 sm:space-y-0 space-x-0 sm:space-x-4 p-2 sm:p-3 md:p-4 lg:p-4'>
                        <Link href={'/contact'}>
                            <button className='p-2 sm:p-3 w-full sm:w-44 items-center justify-center rounded-md bg-sky-300 hover:bg-sky-500 text-black font-semibold transition delay-150 duration-300 ease-in-out hover:-translate-y-1'>
                                Contact me
                            </button>
                        </Link>
                        <Link href={'https://drive.google.com/file/d/15cNEgKz8EnYlLc-w5lMPw--1hJDUlj00/view?usp=drive_link'} target='_blank' >
                            <button className='p-2 sm:p-3 w-full sm:w-44 items-center justify-center rounded-md bg-sky-300 hover:bg-sky-500 text-black font-semibold transition delay-150 duration-300 ease-in-out hover:-translate-y-1'>
                                See my Resume
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='flex flex-col md:w-1/3 sm:w-1/3 lg:w-1/3 '>
                    <Image
                        className='animation_slideIn_right'
                        src="/images/developer.svg"
                        alt="Description of the GIF"
                        width={350}
                        height={350}
                    />
                </div>
            </div>
        </div>
    )
}