import Link from "next/link";
import Image from 'next/image';

export default function ProjectList() {
    return (
        <div className="flex flex-row">
            <div className="basis-1/6"></div>
            <div className="basis-2/3">
                <div className="grid grid-cols-3 grid-rows-2 gap-16">
                    <div className="flex flex-col">
                        <div className="project_card">
                            <Image
                                src="/images/triplify.svg"
                                alt="Claim"
                                width={64}
                                height={64}
                            />
                            <a href="#">
                                <h5 className="project_title">Triplify</h5>
                            </a>
                            <p className="project_description">A java gradle based application, using design patterns and SOLID principles.</p>
                            <a href="https://github.com/HVMS/ASDCProject" target="_blank" className="project_link">
                                GitHub.com
                                <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div >
                        <div className="project_card">
                            <Image
                                src="/images/aws_cloud.svg"
                                alt="Claim"
                                width={64}
                                height={64}
                            />
                            <a href="#">
                                <h5 className="project_title">Just Click</h5>
                            </a>
                            <p className="project_description">Online Order System based on Amazon Cloud - using ML based services.</p>
                            <a href="https://github.com/HVMS/CloudProject" target="_blank" className="project_link">
                                GitHub.com
                                <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div >
                        <div className="project_card">
                            <Image
                                src="/images/classmate.svg"
                                alt="classmate website"
                                width={64}
                                height={64}
                            />
                            <a href="https://github.com/HVMS/Classmate" target="_blank">
                                <h5 className="project_title">Class Mate</h5>
                            </a>
                            <p className="project_description">A one step solution for students, professors, TAs for educational services.</p>
                            <a href="https://classmate-g7.netlify.app/" target="_blank" className="project_link">
                                Netlify.com
                                <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="col-start-1 row-start-2">
                        <div className="project_card">
                            <Image
                                src="/images/inquiry.svg"
                                alt="Education android"
                                width={64}
                                height={64}
                            />
                            <a href="https://github.com/HVMS/Inquiry_Management">
                                <h5 className="project_title">Inquiry Management</h5>
                            </a>
                            <p className="project_description">An Android Platform where a professor can get inquiries digitally from parents.</p>
                            <a href="https://github.com/HVMS/Inquiry_Management" target="_blank" className="project_link">
                                GitHub.com
                                <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                                </svg>
                            </a>
                        </div>
                    </div>
                        <div className="col-start-2 row-start-2">
                            <div className="project_card">
                                <Image
                                    src="/images/trivia_game.svg"
                                    alt="trivia games"
                                    width={64}
                                    height={64}
                                />
                                <a href="https://github.com/HVMS/Multi_Trivia_Game">
                                    <h5 className="project_title">Trivia Titans</h5>
                                </a>
                                <p className="project_description">A Multi-Cloud Online Gaming platform designed for collaborative fun learning.</p>
                                <a href="https://github.com/HVMS/Multi_Trivia_Game" target="_blank" className="project_link">
                                    GitHub.com
                                    <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    <div className="col-start-3 row-start-2">
                        <div className="col-start-2 row-start-2">
                            <div className="project_card">
                                <Image
                                    src="/images/phamra_trac.svg"
                                    alt="Pharma trac application"
                                    width={64}
                                    height={64}
                                />
                                <a href="https://github.com/HVMS/pharma_trac">
                                    <h5 className="project_title">Pharma Trac</h5>
                                </a>
                                <p className="project_description">Flutter based Health care application to measure vital signs and ADRs of drugs.</p>
                                <a href="https://github.com/HVMS/pharma_trac" target="_blank" className="project_link">
                                    GitHub.com
                                    <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="basis-1/6"></div>
        </div>
    );
}