import Image from 'next/image'

export default function PersuasiveComputingLab() {
    return (
        <div className='p-2'>
            <div className="flex items-center justify-between px-4 m-2">
                <p className="text-emerald-500 text-xl font-serif font-semibold">Persuasive Computing Lab</p>
                <p className="text-white font-sans font-semibold">Sep 2023 - Present</p>
            </div>
            <div className="flex items-center justify-between px-4 m-2 text-white font-sans font-semibold">
                <p>Software Developer - (Remote)</p>
                <p>Halifax, Canada</p>
            </div>
            <div className='flex flex-row px-2 mx-2 mt-10'>
                <div className='flex flex-row justify-between'>
                    <Image
                        src='/images/dot.svg'
                        width={25}
                        height={25}
                        alt={'education image'}
                    />
                </div>
                <p className='text-white font-sans font-normal p-2'>Developed healthcare web app for vitals signs and drug reactions</p>
            </div>
            <div className='flex flex-row px-2 mx-2'>
                <div className='flex flex-row justify-between'>
                    <Image
                        src='/images/dot.svg'
                        width={25}
                        height={25}
                        alt={'education image'}
                    />
                </div>
                <p className='text-white font-sans font-normal p-2'>Enhanced Authentication and Authorization with OAuth2 concepts</p>
            </div>
            <div className='flex flex-row px-2 mx-2'>
                <div className='flex flex-row justify-between'>
                    <Image
                        src='/images/dot.svg'
                        width={25}
                        height={25}
                        alt={'education image'}
                    />
                </div>
                <p className='text-white font-sans font-normal p-2'>Reduced page loading time using microservices based REST APIs</p>
            </div>
            <div className='flex flex-row px-2 mx-2'>
                <div className='flex flex-row justify-between'>
                    <Image
                        src='/images/dot.svg'
                        width={25}
                        height={25}
                        alt={'education image'}
                    />
                </div>
                <p className='text-white font-sans font-normal p-2'>Designed interactive app UI with vital sign graphs for visualization</p>
            </div>
        </div>
    )
}