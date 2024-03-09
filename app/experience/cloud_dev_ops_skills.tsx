import Image from 'next/image';

export default function CloudAndDevOpsSkills() {
    return (
        <>
            <div>
                <p className="flex flex-row justify-center text-rose-200 text-2xl font-serif font-semibold p-5">Cloud & DevOps Skills</p>
            </div>
            <div className="flex justify-center p-2 space-x-6">
                <div className='border-gray-400 border-2 p-2 rounded-lg'>
                    <div className='flex flex-row space-x-4 justify-center'>
                        <Image
                            src="/images/techIcons/aws.svg"
                            alt="React icon"
                            width={24}
                            height={24}
                        />
                        <p className='text-sm text-emerald-300'>Amazon Web Services</p>
                    </div>
                </div>
                <div className='border-gray-400 border-2 p-2 rounded-lg'>
                    <div className='flex flex-row space-x-4 justify-center'>
                        <Image
                            src="/images/techIcons/gcp.svg"
                            alt="React icon"
                            width={24}
                            height={24}
                        />
                        <p className='text-sm text-emerald-300'>Google Cloud Platform</p>
                    </div>
                </div>
            </div>
            <div className="flex px-4 py-2 space-x-6 justify-center">
                <div className='border-gray-400 border-2 p-2 rounded-lg'>
                    <div className='flex flex-row space-x-4 justify-center'>
                        <Image
                            src="/images/techIcons/netlify.svg"
                            alt="NodeJs icon"
                            width={24}
                            height={24}
                        />
                        <p className='text-sm text-emerald-300'>Netlify</p>
                    </div>
                </div>
                <div className='border-gray-400 border-2 p-2 rounded-lg'>
                    <div className='flex flex-row space-x-4 justify-center'>
                        <Image
                            src="/images/techIcons/vercel.svg"
                            alt="React icon"
                            width={24}
                            height={24}
                        />
                        <p className='text-sm text-emerald-300'>Vercel</p>
                    </div>
                </div>
                <div className='border-gray-400 border-2 p-2 rounded-lg'>
                    <div className='flex flex-row space-x-4 justify-center'>
                        <Image
                            src="/images/techIcons/docker.svg"
                            alt="React icon"
                            width={24}
                            height={24}
                        />
                        <p className='text-sm text-emerald-300'>Docker</p>
                    </div>
                </div>
            </div>
            <div className="flex px-4 py-2 space-x-6 justify-center">
                <div className='border-gray-400 border-2 p-2 rounded-lg'>
                    <div className='flex flex-row space-x-4 justify-center'>
                        <Image
                            src="/images/techIcons/git.svg"
                            alt="React icon"
                            width={24}
                            height={24}
                        />
                        <p className='text-sm text-emerald-300'>Git Tools</p>
                    </div>
                </div>
                <div className='border-gray-400 border-2 p-2 rounded-lg'>
                    <div className='flex flex-row space-x-4 justify-center'>
                        <Image
                            src="/images/techIcons/jira.svg"
                            alt="React icon"
                            width={24}
                            height={24}
                        />
                        <p className='text-sm text-emerald-300'>Jira</p>
                    </div>
                </div>
                <div className='border-gray-400 border-2 p-2 rounded-lg'>
                    <div className='flex flex-row space-x-4 justify-center'>
                        <Image
                            src="/images/techIcons/postman.svg"
                            alt="React icon"
                            width={24}
                            height={24}
                        />
                        <p className='text-sm text-emerald-300'>Postman</p>
                    </div>
                </div>
            </div>
        </>
    )
}