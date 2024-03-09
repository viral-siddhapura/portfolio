import Image from 'next/image';

export default function BackendSkills() {
    return (
        <>
            <div>
                <p className="flex flex-row justify-center text-lime-200 font-serif font-semibold text-2xl p-5">Backend Skills</p>
            </div>
            <div className="flex justify-center p-2 space-x-6">
                <div className='border-gray-400 border-2 p-2 rounded-lg'>
                    <div className='flex flex-row space-x-4 items-center'>
                        <Image
                            src="/images/techIcons/java.svg"
                            alt="React icon"
                            width={24}
                            height={24}
                        />
                        <p className='text-sm text-emerald-300'>Java</p>
                    </div>
                </div>
                <div className='border-gray-400 border-2 p-2 rounded-lg'>
                    <div className='flex flex-row space-x-4 items-center'>
                        <Image
                            src="/images/techIcons/python.svg"
                            alt="React icon"
                            width={24}
                            height={24}
                        />
                        <p className='text-sm text-emerald-300'>Python</p>
                    </div>
                </div>
                <div className='border-gray-400 border-2 p-2 rounded-lg'>
                    <div className='flex flex-row space-x-4 items-center'>
                        <Image
                            src="/images/techIcons/spring.svg"
                            alt="NodeJs icon"
                            width={24}
                            height={24}
                        />
                        <p className='text-sm text-emerald-300'>Spring boot</p>
                    </div>
                </div>
            </div>
            <div className="flex px-4 py-2 space-x-6 justify-center">
                <div className='border-gray-400 border-2 p-2 rounded-lg'>
                    <div className='flex flex-row space-x-4 items-center'>
                        <Image
                            src="/images/techIcons/expressjs.svg"
                            alt="React icon"
                            width={24}
                            height={24}
                        />
                        <p className='text-sm text-emerald-300'>Express Js</p>
                    </div>
                </div>
                <div className='border-gray-400 border-2 p-2 rounded-lg'>
                    <div className='flex flex-row space-x-4 items-center'>
                        <Image
                            src="/images/techIcons/flask.svg"
                            alt="React icon"
                            width={24}
                            height={24}
                        />
                        <p className='text-sm text-emerald-300'>Flask</p>
                    </div>
                </div>
                <div className='border-gray-400 border-2 p-2 rounded-lg'>
                    <div className='flex flex-row space-x-4 items-center'>
                        <Image
                            src="/images/techIcons/bun.svg"
                            alt="React icon"
                            width={24}
                            height={24}
                        />
                        <p className='text-sm text-emerald-300'>Bun Js</p>
                    </div>
                </div>
            </div>
            <div className="flex px-4 py-2 space-x-6 justify-center">
                <div className='border-gray-400 border-2 p-2 rounded-lg'>
                    <div className='flex flex-row space-x-4 items-center'>
                        <Image
                            src="/images/techIcons/nodejs.svg"
                            alt="React icon"
                            width={24}
                            height={24}
                        />
                        <p className='text-sm text-emerald-300'>Node Js</p>
                    </div>
                </div>
                <div className='border-gray-400 border-2 p-2 rounded-lg'>
                    <div className='flex flex-row space-x-4 items-center'>
                        <Image
                            src="/images/techIcons/gradle.svg"
                            alt="React icon"
                            width={24}
                            height={24}
                        />
                        <p className='text-sm text-emerald-300'>Gradle</p>
                    </div>
                </div>
            </div>
        </>
    )
}