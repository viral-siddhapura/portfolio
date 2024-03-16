import Image from "next/image";

export default function Footer() {
    return (
        <footer className="mt-auto flex flex-col sm:flex-row md:flex-row lg:flex-row items-center justify-center py-4">
            <div className="flex flex-row justify-center items-center">
                <p className="text-lg text-black dark:text-white sm:text-center">Made by</p>
                <div className="mx-1"></div>
                <Image
                    className="mx-1"
                    src="/images/heart.svg"
                    alt="Viral Siddhapura"
                    width={24}
                    height={24}
                />
                <p className="text-lg text-black dark:text-white sm:text-center md:text-center mx-1">Viral Siddhapura</p>
            </div>
        </footer>
    )
}
