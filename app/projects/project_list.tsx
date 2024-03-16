import Link from "next/link";
import Image from 'next/image';

export default function ProjectList() {
    const project_read_more_title = "Read More";

    return (
        <div className="flex flex-col justify-center items-center p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div className="flex flex-col">
                    <div className="transition-opacity animation_slideIn_left max-w-sm p-6 bg-white border-2 border-gray-600 rounded-lg dark:bg-zinc-900 dark:border-gray-700 shadow-xl dark:shadow-xl dark:hover:shadow-sky-500 hover:shadow-sky-500">
                        <Image
                            src="/images/triplify.svg"
                            alt="Claim"
                            width={64}
                            height={64}
                        />
                        <a href="#">
                            <h5 className="mb-2 mt-5 text-2xl font-semibold text-black dark:text-white">Triplify</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">A java gradle based application, using design patterns and SOLID principles.</p>
                        <a href="https://github.com/HVMS/ASDCProject" target="_blank" className="project_link">
                            {project_read_more_title}
                            <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div>
                    <div className="transition-opacity animate-zoomIn max-w-sm p-6 bg-white border-2 border-gray-600 rounded-lg dark:bg-zinc-900 dark:border-gray-700 shadow-xl dark:shadow-xl dark:hover:shadow-red-500 hover:shadow-red-500">
                        <Image
                            src="/images/aws_cloud.svg"
                            alt="Claim"
                            width={64}
                            height={64}
                        />
                        <a href="#">
                            <h5 className="mb-2 mt-5 text-2xl font-semibold text-black dark:text-white">Just Click</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Online Order System based on Amazon Cloud - using ML based services.</p>
                        <a href="https://github.com/HVMS/CloudProject" target="_blank" className="project_link">
                            {project_read_more_title}
                            <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div>
                    <div className="transition-opacity animation_slideIn_right max-w-sm p-6 bg-white border-2 border-gray-600 rounded-lg dark:bg-zinc-900 dark:border-gray-700 shadow-xl dark:shadow-xl dark:hover:shadow-emerald-300 hover:shadow-emerald-300">
                        <Image
                            src="/images/classmate.svg"
                            alt="classmate website"
                            width={64}
                            height={64}
                        />
                        <a href="https://github.com/HVMS/Classmate" target="_blank">
                            <h5 className="mb-2 mt-5 text-2xl font-semibold text-black dark:text-white">Class Mate</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">A one step solution for students, professors, TAs for educational services.</p>
                        <a href="https://classmate-g7.netlify.app/" target="_blank" className="project_link">
                            {project_read_more_title}
                            <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="transition-opacity animation_slideIn_left max-w-sm p-6 bg-white border-2 border-gray-600 rounded-lg dark:bg-zinc-900 dark:border-gray-700 shadow-xl dark:shadow-xl dark:hover:shadow-yellow-500 hover:shadow-yellow-500">
                        <Image
                            src="/images/inquiry.svg"
                            alt="Education android"
                            width={64}
                            height={64}
                        />
                        <a href="https://github.com/HVMS/Inquiry_Management">
                            <h5 className="mb-2 mt-5 text-2xl font-semibold text-black dark:text-white">Inquiry Management</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">An Android Platform where a professor can get inquiries digitally from parents.</p>
                        <a href="https://github.com/HVMS/Inquiry_Management" target="_blank" className="project_link">
                            {project_read_more_title}
                            <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div>
                    <div className="transition-opacity animate-zoomIn max-w-sm p-6 bg-white border-2 border-gray-600 rounded-lg dark:bg-zinc-900 dark:border-gray-700 shadow-xl dark:shadow-xl dark:hover:shadow-orange-500 hover:shadow-orange-500">
                        <Image
                            src="/images/trivia_game.svg"
                            alt="trivia games"
                            width={64}
                            height={64}
                        />
                        <a href="https://github.com/HVMS/Multi_Trivia_Game">
                            <h5 className="mb-2 mt-5 text-2xl font-semibold text-black dark:text-white">Trivia Titans</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">A Multi-Cloud Online Gaming platform designed for collaborative fun learning.</p>
                        <a href="https://github.com/HVMS/Multi_Trivia_Game" target="_blank" className="project_link">
                            {project_read_more_title}
                            <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div>
                    <div className="transition-opacity animation_slideIn_right max-w-sm p-6 bg-white border-2 border-gray-600 rounded-lg dark:bg-zinc-900 dark:border-gray-700 shadow-xl dark:shadow-xl dark:hover:shadow-cyan-500 hover:shadow-cyan-500">
                        <Image
                            src="/images/phamra_trac.svg"
                            alt="Pharma trac application"
                            width={64}
                            height={64}
                        />
                        <a href="https://github.com/HVMS/pharma_trac">
                            <h5 className="mb-2 mt-5 text-2xl font-semibold text-black dark:text-white">Pharma Trac</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Flutter based Health care application to measure vital signs and ADRs of drugs.</p>
                        <a href="https://github.com/HVMS/pharma_trac" target="_blank" className="project_link">
                            {project_read_more_title}
                            <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}