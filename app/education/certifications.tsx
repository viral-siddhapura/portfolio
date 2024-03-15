import Image from 'next/image';
import Link from "next/link";

export default function Certifications() {
    return (
        <div className="flex flex-col mt-20 justify-center items-center">
            <p className="text-2xl font-bold dark:text-white text-black">Certifications 🎉</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
                <Link href={"https://drive.google.com/file/d/1UIzWl-X6H1xr09N4dIswi_5AxoBMZ9kE/view?usp=drive_link"} target="_blank">
                    <div className="transition-opacity ease-in-out opacity-0 animate-fadeIn border-2 border-orange-300 dark:border-2 dark:border-gray-700 rounded-xl hover:shadow-xl hover:shadow-orange-300">
                        <div className="flex justify-center px-4 sm:px-8 md:px-12 lg:px-36 py-2 sm:py-4 bg-orange-300 rounded-tl-lg rounded-tr-lg">
                            <Image
                                src="/images/aws_logo.svg"
                                width={50}
                                height={50}
                                alt={"education image"}
                            ></Image>
                        </div>
                        <div className="flex flex-row basis-1/3 justify-center">
                            <p className="text-sm sm:text-lg font-bold text-black dark:text-white py-2 sm:py-5">AWS Cloud Practitioner</p>
                        </div>
                    </div>
                </Link>
                <Link href={"https://drive.google.com/file/d/1kN3xuhZ09hjV3p4cKiKfmpPTUVQszi_5/view?usp=drive_link"} target="_blank">
                    <div className="transition-opacity ease-in-out opacity-0 animate-fadeIn border-2 border-gray-500 dark:border-gray-700 rounded-lg hover:shadow-xl hover:shadow-gray-500 dark:hover:shadow-white">
                        <div className="flex justify-center px-4 sm:px-8 md:px-12 lg:px-36 py-2 sm:py-4 bg-white rounded-tl-lg rounded-tr-lg">
                            <Image
                                src="/images/microsoft_logo.svg"
                                width={50}
                                height={50}
                                alt={"education image"}
                            ></Image>
                        </div>
                        <div className="flex flex-row basis-1/3 justify-center">
                            <p className="text-sm sm:text-lg font-bold text-black dark:text-white py-2 sm:py-5">Azure Cloud Fundamentals</p>
                        </div>
                    </div>
                </Link>
                <Link href={"https://drive.google.com/file/d/1nkt3eruzN2QwYvhkDLoiIqA5oUPoaGkI/view?usp=drive_link"} target="_blank">
                    <div className="transition-opacity ease-in-out opacity-0 animate-fadeIn border-2 border-blue-500 dark:border-gray-700 rounded-lg hover:shadow-xl hover:shadow-blue-500">
                        <div className="flex justify-center px-4 sm:px-8 md:px-12 lg:px-36 py-2 sm:py-4 bg-ibm_blue rounded-tl-lg rounded-tr-lg">
                            <Image
                                src="/images/ibm_logo.svg"
                                width={50}
                                height={50}
                                alt={"education image"}
                            ></Image>
                        </div>
                        <div className="flex flex-row basis-1/3 justify-center">
                            <p className="text-sm sm:text-lg font-bold text-black dark:text-white py-2 sm:py-5">IBM Data Science</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}