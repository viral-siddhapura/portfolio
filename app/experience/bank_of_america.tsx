import Image from 'next/image'

export default function PersuasiveComputingLab() {
    return (
        <div className='p-2'>
            <div className="flex justify-between m-2">
                <p className="text-black dark:text-emerald-500 text-lg font-serif font-semibold">Bank of America Corporation</p>
                <p className="text-gray-500 dark:text-white font-sans font-semibold">July 2020 - Sep 2022</p>
            </div>
            <div className="flex justify-between m-2 text-gray-500 dark:text-white font-sans font-semibold">
                <p>Software Development Engineer</p>
                <p>GIFT CITY, India</p>
            </div>
            <div className='flex flex-row'>
                <p className='text-black dark:text-white font-sans font-normal p-2'> - Built high-performance loan application system using Java and AWS for 213,000 clients, featuring automation testing and a React.js UI with optimized page load times</p>
            </div>
            <div className='flex flex-row'>
                <p className='text-black dark:text-white font-sans font-normal p-2'> - Led a 9-person team for 3.5 months, addressing technical issues, guiding architectural decisions, and improving code quality, while also acting as SME to onboard new hires</p>
            </div>
        </div>
    )
}