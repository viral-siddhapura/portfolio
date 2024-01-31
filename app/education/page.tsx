import Image from 'next/image';
import NavigationBar from '../navigation_bar';
import Link from 'next/link';
import Footer from '../footer';

export default function Education() {
    const project_title = "Education";
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
                                <h1 className="ml-5 overflow-hidden leading-6 text-white">
                                    {project_title.match(/./gu)!.map((char, index) => (
                                        <span
                                            className="animate-text-reveal inline-block [animation-fill-mode:backwards]"
                                            key={`${char}-${index}`}
                                            style={{ animationDelay: `${index * 0.04}s` }}
                                        >
                                            {char === " " ? "\u00A0" : char}
                                        </span>
                                    ))}
                                </h1>
                                <svg className='animate-fadeIn delay-4s' width="64px" height="64px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g data-name="17_Graduation" id="_17_Graduation"> <rect height="10" fill="#febc00" width="54" x="5" y="36"></rect> <path d="M7,36H5V46H59V44H15A8,8,0,0,1,7,36Z" fill="#edaa03"></path> <path d="M34.044,45.477a8,8,0,0,1-6.529-4.087L17,51.907a1,1,0,0,0,.516,1.689l2.854.555.579,2.883a1,1,0,0,0,1.688.51L34.327,45.853,34,45.523Z" fill="#cc2600"></path> <path d="M46.156,51.407l-10.3-10.3a8,8,0,0,1-6.728,3.889l.03.029-.329.33L40.519,57.044a1,1,0,0,0,1.687-.51l.579-2.883L45.64,53.1a1,1,0,0,0,.516-1.689Z" fill="#cc2600"></path> <path d="M32.126,47.994c-.042,0-.083.006-.126.006-.154,0-.3-.014-.456-.023l-.046.046.329.33.329-.33Z" fill="#cc2600"></path> <path d="M15,12H49a0,0,0,0,1,0,0V30a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V12A0,0,0,0,1,15,12Z" fill="#0455bf"></path> <path d="M17,12H15V30a2,2,0,0,0,2,2H47a2,2,0,0,0,2-2H35A18,18,0,0,1,17,12Z" fill="#004787"></path> <rect height="12" fill="#0455bf" width="2" x="53" y="11"></rect> <rect height="12" fill="#004787" width="1" x="54" y="11"></rect> <path d="M56.25,34h-4.5c-.414,0-.75-.447-.75-1V22c0-.553.336-1,.75-1h4.5c.414,0,.75.447.75,1V33C57,33.553,56.664,34,56.25,34Z" fill="#f74e0c"></path> <path d="M53.75,32c-.414,0-.75-.447-.75-1V21H51.75c-.414,0-.75.447-.75,1V33c0,.553.336,1,.75,1h4.5c.414,0,.75-.447.75-1V32Z" fill="#cc2600"></path> <path d="M5,46c-1.71,0-3-2.149-3-5s1.29-5,3-5,3,2.149,3,5S6.71,46,5,46Z" fill="#f74e0c"></path> <path d="M4,40a6.5,6.5,0,0,1,1.157-3.975C5.1,36.021,5.054,36,5,36c-1.71,0-3,2.149-3,5s1.29,5,3,5a2.37,2.37,0,0,0,1.843-1.025C5.214,44.845,4,42.761,4,40Z" fill="#cc2600"></path> <path d="M59,46c-1.71,0-3-2.149-3-5s1.29-5,3-5,3,2.149,3,5S60.71,46,59,46Z" fill="#f74e0c"></path> <path d="M32,49a8,8,0,1,1,8-8A8.009,8.009,0,0,1,32,49Z" fill="#f74e0c"></path> <path d="M32,45a4,4,0,1,1,4-4A4,4,0,0,1,32,45Z" fill="#cc2600"></path> <path d="M56,14H8a1,1,0,0,1-1-1V9A1,1,0,0,1,8,8H56a1,1,0,0,1,1,1v4A1,1,0,0,1,56,14Z" fill="#0455bf"></path> <path d="M57,12H9V8H8A1,1,0,0,0,7,9v4a1,1,0,0,0,1,1H56a1,1,0,0,0,1-1Z" fill="#004787"></path> </g> </g></svg></div>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
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
                        <p className='text-2xl font-bold dark:text-white text-black'>Certifications 🎉</p>
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