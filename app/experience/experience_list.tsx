import BackendSkills from "./backend_skills";
import BankOfAmerica from "./bank_of_america";
import CloudAndDevOpsSkills from "./cloud_dev_ops_skills";
import DatabaseSkills from "./database_skills";
import FrontendSkills from "./frontend_skills";
import GlobalITInfoSolutions from "./globalit";
import Image from 'next/image';
import PersuasiveComputingLab from "./persuasive_computing_lab";

export default function ExperienceList() {
    return (
        <div>
            <div className="flex flex-col w-full md:flex-row lg:flex-row justify-evenly gap-10">
                <div className="experience_card_animation">
                    <PersuasiveComputingLab />
                </div>
                <div className="experience_card_animation">
                    <BankOfAmerica />
                </div>
                <div className="experience_card_animation">
                    <GlobalITInfoSolutions />
                </div>
            </div>
            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-bold mb-8 text-center">Skills</h1>
                <p className="text-lg mb-8 text-center">Here are some of my skills on which I have been working on for the past 2 years.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    <div className="border-2 border-gray-900 dark:border-white bg-white dark:bg-zinc-800 p-6 rounded-lg">
                        <h2 className="text-2xl font-bold mb-4 text-center text-black dark:text-white">Frontend</h2>
                        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-2">
                            <div className="text-black dark:text-white rounded-md border-2 border-gray-400 px-2 py-2 text-center font-semibold">React Js</div>
                            <div className="text-black dark:text-white rounded-md border-2 border-gray-400 px-2 py-2 text-center font-semibold">JavaScript</div>
                            <div className="text-black dark:text-white rounded-md border-2 border-gray-400 px-2 py-2 text-center font-semibold">Next.js</div>
                            <div className="text-black dark:text-white rounded-md border-2 border-gray-400 px-2 py-2 text-center font-semibold">TypeScript</div>
                            <div className="text-black dark:text-white rounded-md border-2 border-gray-400 px-2 py-2 text-center font-semibold">HTML</div>
                            <div className="text-black dark:text-white rounded-md border-2 border-gray-400 px-2 py-2 text-center font-semibold">Flutter</div>
                            <div className="text-black dark:text-white rounded-md border-2 border-gray-400 px-2 py-2 text-center font-semibold">Tailwind CSS</div>
                            <div className="text-black dark:text-white rounded-md border-2 border-gray-400 px-2 py-2 text-center font-semibold">Material UI</div>
                        </div>
                    </div>
                    <div className="border-2 border-gray-900 dark:border-white bg-white dark:bg-zinc-800 p-6 rounded-lg">
                        <h2 className="text-2xl font-bold mb-4 text-center">Backend</h2>
                        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-2">
                            <div className="text-black dark:text-white rounded-md border-2 border-gray-400 px-2 py-2 text-center">Java</div>
                            <div className="text-black dark:text-white rounded-md border-2 border-gray-400 px-2 py-2 text-center">Python</div>
                            <div className="text-black dark:text-white rounded-md border-2 border-gray-400 px-2 py-2 text-center">Spring</div>
                            <div className="text-black dark:text-white rounded-md border-2 border-gray-400 px-2 py-2 text-center">Express.js</div>
                            <div className="text-black dark:text-white rounded-md border-2 border-gray-400 px-2 py-2 text-center">Flask</div>
                            <div className="text-black dark:text-white rounded-md border-2 border-gray-400 px-2 py-2 text-center">Bun.js</div>
                            <div className="text-black dark:text-white rounded-md border-2 border-gray-400 px-2 py-2 text-center">Node.js</div>
                            <div className="text-black dark:text-white rounded-md border-2 border-gray-400 px-2 py-2 text-center">Django</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    <div className="border-2 border-gray-900 dark:border-white bg-white dark:bg-zinc-800 p-6 rounded-lg">
                        <h2 className="text-2xl font-bold mb-4 text-center">Database</h2>
                        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-2">
                            <div className="text-black dark:text-white rounded-md border-2 border-gray-400 px-2 py-2 text-center">MySQL</div>
                            <div className="text-black dark:text-white rounded-md border-2 border-gray-400 px-2 py-2 text-center">PostgreSQL</div>
                            <div className="text-black dark:text-white rounded-md border-2 border-gray-400 px-2 py-2 text-center">MongoDB</div>
                            <div className="text-black dark:text-white rounded-md border-2 border-gray-400 px-2 py-2 text-center">Firebase</div>
                            <div className="text-black dark:text-white rounded-md border-2 border-gray-400 px-2 py-2 text-center">DynamoDB</div>
                            <div className="text-black dark:text-white rounded-md border-2 border-gray-400 px-2 py-2 text-center">GraphQL</div>
                            <div className="text-black dark:text-white rounded-md border-2 border-gray-400 px-2 py-2 text-center">SQLite</div>
                            <div className="text-black dark:text-white rounded-md border-2 border-gray-400 px-2 py-2 text-center">Ne04j</div>
                        </div>
                    </div>
                    <div className="border-2 border-gray-900 dark:border-white bg-white dark:bg-zinc-800 p-6 rounded-lg">
                        <h2 className="text-2xl font-bold mb-4 text-center">Cloud and DevOps</h2>
                        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-2">
                            <div className="text-black dark:text-white rounded-md border-2 border-gray-400 px-2 py-2 text-center">Amazon Web Services</div>
                            <div className="text-black dark:text-white rounded-md border-2 border-gray-400 px-2 py-2 text-center">Google Cloud Platform</div>
                            <div className="text-black dark:text-white rounded-md border-2 border-gray-400 px-2 py-2 text-center">Azure Cloud Platform</div>
                            <div className="text-black dark:text-white rounded-md border-2 border-gray-400 px-2 py-2 text-center">Netlify</div>
                            <div className="text-black dark:text-white rounded-md border-2 border-gray-400 px-2 py-2 text-center">Vercel</div>
                            <div className="text-black dark:text-white rounded-md border-2 border-gray-400 px-2 py-2 text-center">Render</div>
                            <div className="text-black dark:text-white rounded-md border-2 border-gray-400 px-2 py-2 text-center">Docker</div>
                            <div className="text-black dark:text-white rounded-md border-2 border-gray-400 px-2 py-2 text-center">Git tools</div>
                            <div className="text-black dark:text-white rounded-md border-2 border-gray-400 px-2 py-2 text-center">JIRA</div>
                            <div className="text-black dark:text-white rounded-md border-2 border-gray-400 px-2 py-2 text-center">Postman</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="flex flex-col w-full md:flex-row lg:flex-row justify-evenly mt-40">
                <div className="flex flex-col w-full basis-1/4 md:basis-1/4 lg:basis-1/4 bg-zinc-800 rounded-lg">
                    <FrontendSkills />
                </div>
                <div className="flex flex-col w-full basis-1/4 md:basis-1/4 lg:basis-1/4 bg-zinc-800 rounded-lg">
                    <BackendSkills />
                </div>
            </div>
            <div className="flex flex-col md:flex-row lg:flex-row justify-evenly mt-20">
                <div className="flex flex-col w-full basis-1/4 md:basis-1/4 lg:basis-1/4 bg-zinc-800 rounded-lg">
                    <DatabaseSkills />
                </div>
                <div className="flex flex-col w-full basis-1/4 md:basis-1/4 lg:basis-1/4 bg-zinc-800 rounded-lg">
                    <CloudAndDevOpsSkills />
                </div>
            </div> */}
        </div>
    )
}