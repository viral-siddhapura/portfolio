import Image from 'next/image'

export default function GlobalITInfoSolutions() {
    return (
        <div className='p-2'>
            <div className="flex items-center justify-between px-4 m-2">
                <p className="text-emerald-500 text-xl font-serif font-semibold">GlobalIT InfoSolutions Pvt Ltd</p>
                <p className="text-white font-sans font-semibold">Dec 2019 - Jun 2020</p>
            </div>
            <div className="flex items-center justify-between px-4 m-2 text-white font-sans font-semibold">
                <p>Android Developer</p>
                <p>Ahmedabad, India</p>
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