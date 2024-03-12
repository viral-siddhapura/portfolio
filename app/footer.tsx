import Image from "next/image";

export default function Footer() {
    return (
        <footer className="flex flex-col sm:flex-col items-center justify-center m-10">
            <div className="flex flex-row justify-center items-center">
                <p className="text-normal text-white sm:text-center">Made by</p>
                <div className="mx-1"></div>
                <Image
                    className="mx-1"
                    src="/images/heart.svg"
                    alt="Viral Siddhapura"
                    width={24}
                    height={24}
                >
                </Image>
                <p className="text-normal text-white sm:text-center mx-1">Viral Siddhapura</p>
            </div>
        </footer>
    )
}
