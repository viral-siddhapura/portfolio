import Image from 'next/image'

export default function GlobalITInfoSolutions() {
    return (
        <div className='p-2'>
            <div className="flex justify-between m-2">
                <p className="text-black dark:text-emerald-500 text-lg font-serif font-semibold">GlobalIT InfoSolutions Pvt Ltd</p>
                <p className="text-gray-500 dark:text-white font-sans font-semibold">Dec 2019 - Jun 2020</p>
            </div>
            <div className="flex items-center justify-between px-4 m-2 text-gray-500 dark:text-white font-sans font-semibold">
                <p>Android Developer</p>
                <p>Ahmedabad, India</p>
            </div>
            <div className='flex flex-row'>
                <p className='text-black dark:text-white font-sans font-normal p-2'> - Built a secure CRM mobile app for handling confidential user data (personal & financial) and improved server response times by 47% by revamping the pagination module in a separate coaching inquiry system</p>
            </div>
            <div className='flex flex-row'>
                <p className='text-black dark:text-white font-sans font-normal p-2'> - Enhanced class management system by migrating build tool from Maven to Gradle for 30% faster testing/delivery and ensured smooth project delivery as Scrum Master via weekly meetings</p>
            </div>
        </div>
    )
}