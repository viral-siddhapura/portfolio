import Image from 'next/image';

export default function FrontendSkills() {
    return (
        <>
            <div>
                <p className="flex flex-row justify-center text-amber-200 font-serif font-semibold text-2xl p-5">Frontend Skills</p>
            </div>
            <div className="flex justify-center p-2 space-x-6">
                <div className='border-gray-400 border-2 p-2 rounded-lg'>
                    <div className='flex flex-row space-x-4 items-center'>
                        <Image
                            src="/images/techIcons/react.svg"
                            alt="React icon"
                            width={24}
                            height={24}
                        />
                        <p className='text-sm text-emerald-300'>React Js</p>
                    </div>
                </div>
                <div className='border-gray-400 border-2 p-2 rounded-lg'>
                    <div className='flex flex-row space-x-4 items-center'>
                        <Image
                            src="/images/techIcons/javascript.svg"
                            alt="React icon"
                            width={24}
                            height={24}
                        />
                        <p className='text-sm text-emerald-300'>JavaScript</p>
                    </div>
                </div>
                <div className='border-gray-400 border-2 p-2 rounded-lg'>
                    <div className='flex flex-row space-x-4 items-center'>
                        <Image
                            src="/images/techIcons/typescript.svg"
                            alt="React icon"
                            width={24}
                            height={24}
                        />
                        <p className='text-sm text-emerald-300'>TypeScript</p>
                    </div>
                </div>
            </div>
            <div className="flex px-4 py-2 space-x-6 justify-center">
                <div className='border-gray-400 border-2 p-2 rounded-lg'>
                    <div className='flex flex-row space-x-4 items-center'>
                        <Image
                            src="/images/techIcons/nextjs.svg"
                            alt="React icon"
                            width={24}
                            height={24}
                        />
                        <p className='text-sm text-emerald-300'>Next Js</p>
                    </div>
                </div>
                <div className='border-gray-400 border-2 p-2 rounded-lg'>
                    <div className='flex flex-row space-x-4 items-center'>
                        <Image
                            src="/images/techIcons/html.svg"
                            alt="React icon"
                            width={24}
                            height={24}
                        />
                        <p className='text-sm text-emerald-300'>HTML</p>
                    </div>
                </div>
                <div className='border-gray-400 border-2 p-2 rounded-lg'>
                    <div className='flex flex-row space-x-4 items-center'>
                        <Image
                            src="/images/techIcons/flutter.svg"
                            alt="React icon"
                            width={24}
                            height={24}
                        />
                        <p className='text-sm text-emerald-300'>Flutter</p>
                    </div>
                </div>
            </div>
            <div className="flex px-4 py-2 space-x-6 justify-center">
                <div className='border-gray-400 border-2 p-2 rounded-lg'>
                    <div className='flex flex-row space-x-4 items-center'>
                        <Image
                            src="/images/techIcons/tailwindcss.svg"
                            alt="React icon"
                            width={24}
                            height={24}
                        />
                        <p className='text-sm text-emerald-300'>Tailwind CSS</p>
                    </div>
                </div>
            </div>
        </>
    )
}