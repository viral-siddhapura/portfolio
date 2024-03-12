import NavigationBar from './navigation_bar';
import SocialMedia from './social_media';
import Footer from './footer';
import HomePage from './homepage';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col'>
      {
        <div className='flex flex-col flex-grow p-5'>
          <div className='flex flex-col basis-1/3'>
            <NavigationBar />
          </div>
          <div className='flex flex-col basis-1/3'>
            <HomePage />
          </div>
          <div className='flex flex-col basis-1/3'>
            <Footer />
          </div>
        </div>
      }
    </main>
  );
}