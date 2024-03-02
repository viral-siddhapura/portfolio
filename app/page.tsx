import Image from 'next/image'
import Link from 'next/link'
import NavigationBar from './navigation_bar';
import SocialMedia from './social_media';
import Footer from './footer';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col'>
      {
        <div className='flex flex-col flex-grow p-5'>
          <div>
            <NavigationBar />
          </div>
          <div className='flex flex-col sm:flex-row my-20'>
            <div className='flex flex-col sm:w-2/3'>
              <div>
                <p className='text-start mx-5 sm:mx-80 text-4xl sm:text-6xl text-white font-bold p-5'>
                  Hello.
                </p>
              </div>
              <div className='text-start mx-5 sm:mx-80 font-bold p-5'>
                <p className='text-base font-medium text-zinc-600 dark:text-zinc-400'>
                  I'm Viral Siddhapura. Full stack developer, Cloud technology enthusiast. Always learning new concepts.
                  I love to work with diverse group of people to build great products and get my professional skills polished.
                </p>
              </div>
              <SocialMedia />
              <div className='flex flex-col sm:flex-row mx-5 sm:mx-80 space-y-4 sm:space-y-0 space-x-0 sm:space-x-4 p-4'>
                <Link href={'/contact'}>
                  <button className='p-3 w-full sm:w-44 items-center justify-center rounded-md bg-sky-300 hover:bg-sky-500 text-black font-semibold transition delay-150 duration-300 ease-in-out hover:-translate-y-1'>
                    Contact me
                  </button>
                </Link>
                <Link href={'https://drive.google.com/file/d/15cNEgKz8EnYlLc-w5lMPw--1hJDUlj00/view?usp=drive_link'} target='_blank' >
                  <button className='p-3 w-full sm:w-44 items-center justify-center rounded-md bg-sky-300 hover:bg-sky-500 text-black font-semibold transition delay-150 duration-300 ease-in-out hover:-translate-y-1'>
                    See my Resume
                  </button>
                </Link>
              </div>
            </div>
            <div className='flex flex-col sm:w-1/3'>
              <Image
                src="/images/developer.svg"
                alt="Description of the GIF"
                width={450}
                height={450}
              />
            </div>
          </div>
          <Footer />
        </div>
      }
    </main>
  );
}