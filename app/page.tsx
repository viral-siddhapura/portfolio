import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col'>
      {
        <div className='flex flex-col'>
          <div className='flex flex-row items-center justify-center p-8'>
            <div className='border_top_div bg-zinc-800'>
              <div className="flex flex-row space-x-6 mx-5">
                <div>
                  <p className='top_horizontal_div'>About</p>
                </div>
                <div>
                  <p className='top_horizontal_div'>Experience</p>
                </div>
                <div>
                  <p className='top_horizontal_div'>Projects</p>
                </div>
                <div>
                  <p className='top_horizontal_div'>Education</p>
                </div>
                <div>
                  <p className='top_horizontal_div'>Contact</p>
                </div>
              </div>
            </div>
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
        </div>
      }
    </main>
  );
}