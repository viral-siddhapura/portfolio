import Image from 'next/image';

export default function DatabaseSkills() {
    return (
        <>
            <div>
                <p className="flex flex-row justify-center text-cyan-200 font-serif font-semibold text-2xl p-5">Database Skills</p>
            </div>
            <div className="flex justify-center p-2 space-x-6">
                <div className='border-gray-400 border-2 p-2 rounded-lg'>
                    <div className='flex flex-row space-x-4 items-center'>
                        <Image
                            src="/images/techIcons/mysql.svg"
                            alt="React icon"
                            width={24}
                            height={24}
                        />
                        <p className='text-sm text-emerald-300'>MySQL</p>
                    </div>
                </div>
                <div className='border-gray-400 border-2 p-2 rounded-lg'>
                    <div className='flex flex-row space-x-4 items-center'>
                        <Image
                            src="/images/techIcons/postgresql.svg"
                            alt="React icon"
                            width={24}
                            height={24}
                        />
                        <p className='text-sm text-emerald-300'>PostGre SQL</p>
                    </div>
                </div>
                <div className='border-gray-400 border-2 p-2 rounded-lg'>
                    <div className='flex flex-row space-x-4 items-center'>
                        <Image
                            src="/images/techIcons/mongodb.svg"
                            alt="NodeJs icon"
                            width={24}
                            height={24}
                        />
                        <p className='text-sm text-emerald-300'>MongoDB</p>
                    </div>
                </div>
            </div>
            <div className="flex px-4 py-2 space-x-6 justify-center">
                <div className='border-gray-400 border-2 p-2 rounded-lg'>
                    <div className='flex flex-row space-x-4 items-center'>
                        <Image
                            src="/images/techIcons/firebase.svg"
                            alt="React icon"
                            width={24}
                            height={24}
                        />
                        <p className='text-sm text-emerald-300'>Firebase</p>
                    </div>
                </div>
                <div className='border-gray-400 border-2 p-2 rounded-lg'>
                    <div className='flex flex-row space-x-4 items-center'>
                        <Image
                            src="/images/techIcons/dynamodb.svg"
                            alt="React icon"
                            width={24}
                            height={24}
                        />
                        <p className='text-sm text-emerald-300'>Dyanamo DB</p>
                    </div>
                </div>
                <div className='border-gray-400 border-2 p-2 rounded-lg'>
                    <div className='flex flex-row space-x-4 items-center'>
                        <Image
                            src="/images/techIcons/graphql.svg"
                            alt="React icon"
                            width={24}
                            height={24}
                        />
                        <p className='text-sm text-emerald-300'>Graph QL</p>
                    </div>
                </div>
            </div>
        </>
    )
}