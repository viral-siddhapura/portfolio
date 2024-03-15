import NavigationBar from '../navigation_bar';
import Link from 'next/link';
import Footer from '../footer';
import Certifications from './certifications';
import Colleges from './college';
import Heading from './heading';

export default function Education() {
    return (
        <main className='flex flex-col'>
            {
                <div className='flex flex-col p-5'>
                    <NavigationBar />
                    <Heading />
                    <Colleges />
                    <Certifications />
                    <Footer />
                </div>
            }
        </main>
    );
}