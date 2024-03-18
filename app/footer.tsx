import Image from "next/image";

export default function Footer() {
    return (
        <footer className="flex flex-row justify-center sticky inset-x-0 bottom-0 shrink-0">
            <p className="text-lg font-semibold text-black dark:text-white">Made by</p>
            <div className="mx-1"></div>
            <Image
                className="mx-1"
                src="/images/heart.svg"
                alt="Viral Siddhapura"
                width={24}
                height={24}
            />
            <p className="text-lg font-semibold text-black dark:text-white mx-1">Viral Siddhapura</p>
        </footer>
    )
}
