import NavigationBar from './navigation_bar';
import Footer from './footer';
import HomePage from './homepage';
import ThemeToggle from './components/ThemeToggle';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col'>
      {
        <div className='flex flex-col flex-grow p-5'>
          <NavigationBar />
          <HomePage />
          <Footer />
        </div>
      }
    </main>
  );
}