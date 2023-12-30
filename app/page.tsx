import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
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
          {/* <div className='flex flex-row'>
            <div>
              <Image
                src="/images/viral_35_45mm.jpg" // Path to your image
                alt="Viral Image"
                width={100} // Width of the image
                height={100} // Height of the image
                className="rounded-full mt-4" // Add some margin-top
              />
            </div>
          </div> */}
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
                <div>
                  <p>Hello.</p>
                </div>
                <div>
                  <p>Hello.</p>
                </div>
              </div>
            </div>
            <div className='flex flex-col w-1/3'>
              <Image
                src="/images/developer.svg" // Path to your GIF
                alt="Description of the GIF"
                width={400} // Width of the GIF
                height={400} // Height of the GIF
              />
            </div>
          </div>
          <div className="social-media-div">
            <a href="https://github.com/" className="icon-button github" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
              <span></span>
            </a>
            <a href="https://www.linkedin.com/in/viral-siddhapura-a5042714a/" className="icon-button linkedin" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
              <span></span>
            </a>
            <a href="mailto:viralsid2330@gmail.com" className="icon-button google" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-google"></i>
              <span></span>
            </a>
            <a href="https://twitter.com/hvms2330" className="icon-button twitter" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
              <span></span>
            </a>
            <a href="https://www.instagram.com/viru_1116/" className="icon-button instagram" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
              <span></span>
            </a>
          </div>
        </div>
      }
    </main>
  );
}