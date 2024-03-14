import Image from 'next/image';
import NavigationBar from '../navigation_bar';
import Link from 'next/link';
import Footer from '../footer';

export default function Education() {
    const project_title = "Education 🏫";
    return (
        <main className='flex flex-col'>
            {
                <div className='flex flex-col p-5'>
                    <div>
                        <NavigationBar />
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex flex-row mt-20 justify-center'>
                            <div className='flex flex-row'>
                                <h1 className="ml-5 overflow-hidden leading-6 text-black dark:text-white">
                                    {project_title.match(/./gu)!.map((char, index) => (
                                        <span
                                            className="animate-text-reveal font-medium inline-block [animation-fill-mode:backwards]"
                                            key={`${char}-${index}`}
                                            style={{ animationDelay: `${index * 0.04}s` }}
                                        >
                                            {char === " " ? "\u00A0" : char}
                                        </span>
                                    ))}
                                </h1>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center mt-10'>
                            <p className='education_css animate-fadeIn delay-4s'>I actively participate in hackathons and other tech-related activities.</p>
                            <p className='education_css animate-fadeIn delay-4s'>Below are some of my major certifications.</p>
                        </div>
                    </div>
                    <div className='flex flex-row mt-20 justify-center items-center'>
                        <div className='education_card flex flex-row'>
                            <div className='relative flex flex-col flex-grow p-5 overflow-hidden'>
                                <Image
                                    className='object-contain p-10 rounded-lg'
                                    src='/images/dal_1.png'
                                    width={250}
                                    height={200}
                                    alt={'education image'}
                                />
                                <Link href={'https://www.dal.ca/'} target='_blank' className='mt-5'>
                                    <div className="text_over_image">
                                        Visit Website
                                    </div>
                                </Link>
                            </div>
                            <div className='vertical_border'></div>
                            <div className='flex flex-col flex-grow p-10'>
                                <div className='flex flex-col'>
                                    <div className='flex flex-row justify-between'>
                                        <p className='university_name'>Dalhousie University</p>
                                        <p className='course_name'>2022-2023</p>
                                    </div>
                                    <p className='course_name'>Master of Applied Computer Science</p>
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
                                    <p className='course_name ml-2'>Studied Advanced Software Development concepts with SOLID and Design Pattern practices</p>
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
                                    <p className='course_name ml-2'>Achieved certifications in Cloud Infrastructure - Amazon Web Services and Azure Cloud Platform</p>
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
                                    <p className='course_name ml-2'>Diverse projects with combination of front-end and back-end technologies</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row mt-20 justify-center items-center'>
                        <div className='education_card flex flex-row'>
                            <div className='relative flex flex-col flex-grow p-5 overflow-hidden'>
                                <Image
                                    className='object-contain p-10 rounded-none'
                                    src='/images/nirma_white.png'
                                    width={250}
                                    height={200}
                                    alt={'education image'}
                                />
                                <Link href={'https://nirmauni.ac.in/'} target='_blank' className='mt-5'>
                                    <div className="text_over_image">
                                        Visit Website
                                    </div>
                                </Link>
                            </div>
                            <div className='vertical_border'></div>
                            <div className='flex flex-col flex-grow p-10'>
                                <div className='flex flex-col'>
                                    <div className='flex flex-row justify-between'>
                                        <p className='university_name'>Nirma University</p>
                                        <p className='course_name'>2016-2020</p>
                                    </div>
                                    <p className='course_name'>B.Tech in Information Technology</p>
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
                                    <p className='course_name ml-2'>Studied core subjects like Data Structures, DBMS, Networking, Security, etc.</p>
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
                                    <p className='course_name ml-2'>Completed various online courses for ML/DL, Web Development, Mobile App Development, etc.</p>
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
                                    <p className='course_name ml-2'>Implemented several projects based on what I've learnt under my Computer Engineering course.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col mt-20 justify-center items-center'>
                        <p className='text-2xl font-bold dark:text-white text-white'>Certifications 🎉</p>
                        <div className="flex-grow grid grid-cols-3 grid-rows-2 gap-10 mt-20">
                            <Link href={'https://drive.google.com/file/d/1UIzWl-X6H1xr09N4dIswi_5AxoBMZ9kE/view?usp=drive_link'} target='_blank'>
                                <div className='certification_animation border dark:border-gray-700 rounded-lg hover:shadow-lg hover:shadow-orange-300'>
                                    <div className='flex flex-row basis-2/3 px-36 py-4 bg-orange-300 rounded-tl-lg rounded-tr-lg'>
                                        <Image
                                            className='py-5'
                                            src='/images/aws_logo.svg'
                                            width={100}
                                            height={100}
                                            alt={'education image'}
                                        ></Image>
                                    </div>
                                    <div className='flex flex-row basis-1/3 justify-center'>
                                        <p className='text-lg font-medium text-zinc-400 py-5'>AWS Cloud Practitioner</p>
                                    </div>
                                </div>
                            </Link>
                            <Link href={'https://drive.google.com/file/d/1kN3xuhZ09hjV3p4cKiKfmpPTUVQszi_5/view?usp=drive_link'} target='_blank'>
                                <div className='certification_animation border dark:border-gray-700 rounded-lg hover:shadow-lg hover:shadow-white'>
                                    <div className='flex flex-row basis-2/3 px-36 py-4 bg-white rounded-tl-lg rounded-tr-lg'>
                                        <Image
                                            src='/images/microsoft_logo.svg'
                                            width={100}
                                            height={0}
                                            alt={'education image'}
                                        ></Image>
                                    </div>
                                    <div className='flex flex-row basis-1/3 justify-center'>
                                        <p className='text-lg font-medium text-zinc-400 py-5'>Azure Cloud Fundamentals</p>
                                    </div>
                                </div>
                            </Link>
                            <Link href={'https://drive.google.com/file/d/1nkt3eruzN2QwYvhkDLoiIqA5oUPoaGkI/view?usp=drive_link'} target='_blank'>
                                <div className='certification_animation border dark:border-gray-700 rounded-lg hover:shadow-lg hover:shadow-ibm_blue'>
                                    <div className='flex flex-row basis-2/3 px-36 py-4 bg-ibm_blue rounded-tl-lg rounded-tr-lg'>
                                        <Image
                                            className='py-8'
                                            src='/images/ibm_logo.svg'
                                            width={100}
                                            height={0}
                                            alt={'education image'}
                                        ></Image>
                                    </div>
                                    <div className='flex flex-row basis-1/3 justify-center'>
                                        <p className='text-lg font-medium text-zinc-400 py-5'>AI and Data Science by IBM</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <Footer />
                </div>
            }
        </main>
    );
}