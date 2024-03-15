import Image from 'next/image'

export default function PersuasiveComputingLab() {
    return (
        <div className='p-2'>
            <div className="flex justify-between m-2">
                <p className="text-black dark:text-emerald-500 text-lg font-serif font-semibold">Persuasive Computing Lab</p>
                <p className="text-gray-500 dark:text-white font-sans font-semibold">Sep 2023 - Present</p>
            </div>
            <div className="flex justify-between m-2 text-gray-500 dark:text-white font-sans font-semibold">
                <p>Software Developer</p>
                <p>Halifax, Canada</p>
            </div>
            <div className='flex flex-row'>
                <p className='text-black dark:text-white font-sans font-normal p-2'> - Developed a healthcare web application utilizing OAuth2 for secure authentication and authorization, facilitating the monitoring of vital signs and potential drug reactions</p>
            </div>
            <div className='flex flex-row'>
                <p className='text-black dark:text-white font-sans font-normal p-2'> - Implemented microservices-based REST APIs to optimize page load times and designed an interactive app UI featuring vital sign visualizations through graphs</p>
            </div>
        </div>
    )
}