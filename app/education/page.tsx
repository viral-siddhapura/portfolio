import Image from 'next/image';
import NavigationBar from '../navigation_bar';

export default function Education() {
    return (
        <main className='flex flex-col'>
            {
                <div className='flex flex-col p-5'>
                    <div className='sticky-nav'>
                        <NavigationBar />
                    </div>
                    <div className='flex flex-row'>
                        <div className='flex flex-row basis-4/5 p-4'>
                            <div className='flex flex-col flex-grow'>
                                <Image
                                    className='object-contain'
                                    src='/images/dal_white.png'
                                    width={300}
                                    height={200}
                                    alt={'education image'}
                                />
                            </div>
                            <div className='flex flex-col flex-grow p-4'>
                                <div className='flex flex-col'>
                                    <div className='flex flex-row justify-between'>
                                        <p>Master of Applied Computer Science</p>
                                        <p>2022-2023</p>
                                    </div>
                                    <p>Halifax, Canada</p>
                                </div>
                                <div className='flex flex-row mt-10'>
                                    <div className='flex flex-row justify-between'>
                                        <Image
                                            src='/images/light.svg'
                                            width={25}
                                            height={25}
                                            alt={'education image'}
                                        />
                                    </div>
                                    <p className='ml-2'>Studied Advanced Software Development concepts with SOLID and Design Pattern practices</p>
                                </div>
                                <div className='flex flex-row mt-2'>
                                    <div className='flex flex-row justify-between'>
                                        <Image
                                            src='/images/light.svg'
                                            width={25}
                                            height={25}
                                            alt={'education image'}
                                        />
                                    </div>
                                    <p className='ml-2'>Achieved certifications in Cloud Infrastructure - Amazon Web Services and Azure Cloud Platform</p>
                                </div>
                                <div className='flex flex-row mt-2'>
                                    <div className='flex flex-row justify-between'>
                                        <Image
                                            src='/images/light.svg'
                                            width={25}
                                            height={25}
                                            alt={'education image'}
                                        />
                                    </div>
                                    <p className='ml-2'>Diverse projects with combination of front-end and back-end technologies</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row'>
                        <div className='flex flex-row basis-1/5'></div>
                        <div className='flex flex-row basis-4/5 p-4'>
                        </div>
                    </div>
                </div>
            }
        </main>
    );
}