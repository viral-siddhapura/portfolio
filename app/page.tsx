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
          <div className='flex flex-row my-20'>
            <div className='flex flex-col w-2/3'>
              <div>
                <p className='hello_word'>Hello.</p>
              </div>
              <div className='intro'>
                <p className='intro_css'>
                  I'm Viral Siddhapura. Full stack developer, Cloud technology enthusiast. Always learning new concepts.
                  I love to work with diverse group of people to build great products and get my professional skills polished.
                </p>
              </div>
              <SocialMedia />
              <div className='social_media_contact_me_div_css'>
                <button className='contact_me_button'>
                  Contact me
                </button>
                <Link href={'https://drive.google.com/file/d/15cNEgKz8EnYlLc-w5lMPw--1hJDUlj00/view?usp=drive_link'}
                      target='_blank' >
                  <button className='contact_me_button'>
                    See my Resume
                  </button>
                </Link>
              </div>
            </div>
            <div className='flex flex-col w-1/3'>
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