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
            <div className="flex flex-row p-20">

            </div>
            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-bold mb-8 text-center">Skills</h1>
                <p className="text-lg mb-8 text-center">Here are some of my core skills on which I have been working on to diversify my portfolio.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20">
                    <div className="border-2 border-emerald-500 shadow-emerald-400 shadow-lg dark:shadow-white dark:shadow-lg dark:border-white bg-white dark:bg-transparent p-6 rounded-lg">
                        <h2 className="text-2xl font-bold mb-4 text-center text-black dark:text-white">Frontend</h2>
                        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-2">
                            <div className="flex justify-center rounded-md sm:p-5 md:p-5">
                                <Image src="/images/techIcons/react.svg" title="React" alt="React" width={64} height={64} />
                            </div>
                            <div className="flex justify-center rounded-md sm:p-5 md:p-5">
                                <Image src="/images/techIcons/javascript.svg" title="JavaScript" alt="React" width={64} height={64} />
                            </div>
                            <div className="flex justify-center rounded-md sm:p-5 md:p-5">
                                <Image src="/images/techIcons/nextjs.svg" title="Next.js" alt="React" width={64} height={64} />
                            </div>
                            <div className="flex justify-center rounded-md sm:p-5 md:p-5">
                                <Image src="/images/techIcons/typescript.svg" title="TypeScript" alt="React" width={64} height={64} />
                            </div>
                            <div className="flex justify-center rounded-md sm:p-5 md:p-5">
                                <Image src="/images/techIcons/html.svg" title="HTML" alt="React" width={64} height={64} />
                            </div>
                            <div className="flex justify-center rounded-md sm:p-5 md:p-5">
                                <Image src="/images/techIcons/flutter.svg" title="Flutter" alt="React" width={64} height={64} />
                            </div>
                            <div className="flex justify-center rounded-md sm:p-5 md:p-5">
                                <Image src="/images/techIcons/tailwindcss.svg" title="Tailwind CSS" alt="React" width={64} height={64} />
                            </div>
                            <div className="flex justify-center rounded-md sm:p-5 md:p-5">
                                <Image src="/images/techIcons/materialui.svg" title="Material UI" alt="React" width={64} height={64} />
                            </div>
                        </div>
                    </div>
                    <div className="border-2 border-red-500 shadow-red-400 shadow-lg dark:shadow-white dark:shadow-lg dark:border-white bg-white dark:bg-transparent p-6 rounded-lg">
                        <h2 className="text-2xl font-bold mb-4 text-center text-black dark:text-white">Backend</h2>
                        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-2">
                            <div className="flex justify-center rounded-md sm:p-5 md:p-5">
                                <Image src="/images/techIcons/java.svg" title="Java" alt="React" width={64} height={64} />
                            </div>
                            <div className="flex justify-center rounded-md sm:p-5 md:p-5">
                                <Image src="/images/techIcons/python.svg" title="Python" alt="React" width={64} height={64} />
                            </div>
                            <div className="flex justify-center rounded-md sm:p-5 md:p-5">
                                <Image src="/images/techIcons/spring.svg" title="Spring" alt="React" width={64} height={64} />
                            </div>
                            <div className="flex justify-center rounded-md sm:p-5 md:p-5">
                                <Image src="/images/techIcons/expressjs.svg" title="Express.js" alt="React" width={64} height={64} />
                            </div>
                            <div className="flex justify-center rounded-md sm:p-5 md:p-5">
                                <Image src="/images/techIcons/flask.svg" title="Flask" alt="React" width={64} height={64} />
                            </div>
                            <div className="flex justify-center rounded-md sm:p-5 md:p-5">
                                <Image src="/images/techIcons/bun.svg" title="Bun.js" alt="React" width={64} height={64} />
                            </div>
                            <div className="flex justify-center rounded-md sm:p-5 md:p-5">
                                <Image src="/images/techIcons/nodejs.svg" title="Node.js" alt="React" width={64} height={64} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20">
                    <div className="border-2 border-yellow-500 shadow-yellow-400 shadow-lg dark:shadow-white dark:shadow-lg dark:border-white bg-white dark:bg-transparent p-6 rounded-lg">
                        <h2 className="text-2xl font-bold mb-4 text-center text-black dark:text-white">Database</h2>
                        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-2">
                            <div className="flex justify-center rounded-md sm:p-5 md:p-5">
                                <Image src="/images/techIcons/mysql.svg" title="MySQL" alt="React" width={64} height={64} />
                            </div>
                            <div className="flex justify-center rounded-md sm:p-5 md:p-5">
                                <Image src="/images/techIcons/postgresql.svg" title="PostgreSQL" alt="React" width={64} height={64} />
                            </div>
                            <div className="flex justify-center rounded-md sm:p-5 md:p-5">
                                <Image src="/images/techIcons/mongodb.svg" title="Next.js" alt="React" width={64} height={64} />
                            </div>
                            <div className="flex justify-center rounded-md sm:p-5 md:p-5">
                                <Image src="/images/techIcons/firebase.svg" title="TypeScript" alt="React" width={64} height={64} />
                            </div>
                            <div className="flex justify-center rounded-md sm:p-5 md:p-5">
                                <Image src="/images/techIcons/dynamodb.svg" title="HTML" alt="React" width={64} height={64} />
                            </div>
                            <div className="flex justify-center rounded-md sm:p-5 md:p-5">
                                <Image src="/images/techIcons/graphql.svg" title="GraphQL" alt="React" width={64} height={64} />
                            </div>
                            <div className="flex justify-center rounded-md sm:p-5 md:p-5">
                                <Image src="/images/techIcons/sqlite.svg" title="SQLite" alt="React" width={64} height={64} />
                            </div>
                            <div className="flex justify-center rounded-md sm:p-5 md:p-5">
                                <Image src="/images/techIcons/neo4j.svg" title="Neo4j" alt="React" width={64} height={64} />
                            </div>
                        </div>
                    </div><div className="border-2 border-sky-500 shadow-sky-400 shadow-lg dark:shadow-white dark:shadow-lg dark:border-white bg-white dark:bg-transparent p-6 rounded-lg">
                        <h2 className="text-2xl font-bold mb-4 text-center text-black dark:text-white">Cloud and DevOps</h2>
                        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-2">
                            <div className="flex justify-center rounded-md sm:p-5 md:p-5">
                                <Image src="/images/techIcons/aws.svg" title="Amazon Web Services" alt="React" width={64} height={64} />
                            </div>
                            <div className="flex justify-center rounded-md sm:p-5 md:p-5">
                                <Image src="/images/techIcons/gcp.svg" title="Google Cloud Platform" alt="React" width={64} height={64} />
                            </div>
                            <div className="flex justify-center rounded-md sm:p-5 md:p-5">
                                <Image src="/images/techIcons/azure.svg" title="Azure CLoud Platform" alt="React" width={64} height={64} />
                            </div>
                            <div className="flex justify-center rounded-md sm:p-5 md:p-5">
                                <Image src="/images/techIcons/netlify.svg" title="Netlify" alt="React" width={64} height={64} />
                            </div>
                            <div className="flex justify-center rounded-md sm:p-5 md:p-5">
                                <Image src="/images/techIcons/docker.svg" title="Docker" alt="React" width={64} height={64} />
                            </div>
                            <div className="flex justify-center rounded-md sm:p-5 md:p-5">
                                <Image src="/images/techIcons/git.svg" title="GIT Tools" alt="React" width={64} height={64} />
                            </div>
                            <div className="flex justify-center rounded-md sm:p-5 md:p-5">
                                <Image src="/images/techIcons/jira.svg" title="JIRA" alt="React" width={64} height={64} />
                            </div>
                            <div className="flex justify-center rounded-md sm:p-5 md:p-5">
                                <Image src="/images/techIcons/postman.svg" title="Postman" alt="React" width={64} height={64} />
                            </div>
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