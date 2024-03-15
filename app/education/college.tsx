import Image from 'next/image';
import Link from "next/link";

export default function Colleges() {
    return (
        <>
            <div className='flex flex-col mt-20 sm:flex-row justify-center items-center'>
                <div className='flex flex-col sm:flex-row transition-opacity ease-in-out opacity-0 animate-fadeIn border-4 border-amber-300 dark:border-2 dark:border-gray-700 rounded-lg hover:shadow-lg dark:hover:shadow-white hover:shadow-amber-300'>
                    <div className='relative flex flex-col flex-grow items-center sm:basis-1/3'>
                        <Link href={'https://www.dal.ca/'} target='_blank' className='mt-5'>
                            <Image
                                src='/images/dal_1.png'
                                width={250}
                                height={250}
                                alt={'education image'}
                            />
                        </Link>
                    </div>
                    <div className='border-r-4 border-amber-300 dark:border-r-2 dark:border-gray-700 hidden sm:flex'></div>
                    <div className='flex flex-col flex-grow p-8 sm:basis-2/3'>
                        <div className='flex flex-col'>
                            <div className='flex flex-row justify-between md:flex-row lg:flex-row'>
                                <p className='text-2xl font-semibold text-black dark:text-white'>Dalhousie University</p>
                                <p className='text-lg font-semibold text-zinc-600 dark:text-zinc-400'>2022-2023</p>
                            </div>
                            <p className='text-lg md:text-md lg:text-md font-semibold text-zinc-600 dark:text-zinc-400'>Master of Applied Computer Science</p>
                        </div>
                        <div className='flex flex-row mt-5'>
                            <p className='text-lg font-semibold text-zinc-600 dark:text-zinc-400 ml-2'> - Studied Advanced Software Development concepts with SOLID and Design Pattern practices</p>
                        </div>
                        <div className='flex flex-row mt-2'>
                            <p className='text-lg font-semibold text-zinc-600 dark:text-zinc-400 ml-2'> - Achieved certifications in Cloud Infrastructure - Amazon Web Services and Azure Cloud Platform</p>
                        </div>
                        <div className='flex flex-row mt-2'>
                            <p className='text-lg font-semibold text-zinc-600 dark:text-zinc-400 ml-2'> - Diverse projects with combination of front-end and back-end technologies</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col mt-20 sm:flex-row justify-center items-center'>
                <div className='flex flex-col sm:flex-row transition-opacity ease-in-out opacity-0 animate-fadeIn border-4 border-red-500 dark:border-2 dark:border-gray-700 rounded-lg hover:shadow-lg dark:hover:shadow-white hover:shadow-red-500'>
                    <div className='relative flex flex-col flex-grow items-center sm:basis-1/3'>
                        <Link href={'https://nirmauni.ac.in/'} target='_blank' className='mt-5'>
                            <Image
                                src='/images/nirma_white.png'
                                width={250}
                                height={250}
                                alt={'education image'}
                            />
                        </Link>
                    </div>
                    <div className='border-r-4 border-red-500 dark:border-r-2 dark:border-gray-700 hidden sm:flex'></div>
                    <div className='flex flex-col flex-grow p-8 sm:basis-2/3'>
                        <div className='flex flex-col'>
                            <div className='flex flex-row justify-between'>
                                <p className='text-2xl font-semibold text-black dark:text-white'>Nirma University</p>
                                <p className='text-lg font-semibold text-zinc-600 dark:text-zinc-400'>2016-2020</p>
                            </div>
                            <p className='text-lg font-semibold text-zinc-600 dark:text-zinc-400'>B.Tech in Information Technology</p>
                        </div>
                        <div className='flex flex-row mt-5'>
                            <p className='text-lg font-semibold text-zinc-600 dark:text-zinc-400 ml-2'> - Studied core subjects like Data Structures, DBMS, Networking, Security, etc.</p>
                        </div>
                        <div className='flex flex-row mt-2'>
                            <p className='text-lg font-semibold text-zinc-600 dark:text-zinc-400 ml-2'> - Completed various online courses for ML/DL, Web Development, Mobile App Development, etc.</p>
                        </div>
                        <div className='flex flex-row mt-2'>
                            <p className='text-lg font-semibold text-zinc-600 dark:text-zinc-400 ml-2'> - Implemented several projects based on what I've learnt under my Computer Engineering course.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}