import NavigationBar from './navigation_bar';
import Footer from './footer';
import HomePage from './homepage';
import ThemeToggle from './components/ThemeToggle';

export default function Home() {
  return (
    <main>
      {
        <div className='flex flex-col flex-grow p-5'>
          <div className='flex flex-col basis-1/6'>
            <NavigationBar />
          </div>
          <div className='flex flex-col basis-5/6'>
            <HomePage />
          </div>
          {/* <div className='flex flex-col basis-1/6'>
            <Footer />
          </div> */}
        </div>
      }
    </main>
  );
}