import Image from "next/image"

export default function CatalogExpert() {
    return (
        <div className="container flex flex-col gap-8 mx-auto px-4 md:px-0 my-8 md:my-16 overflow-x-hidden">
            <p className="text-xl font-light text-neutral-500 text-center ">Built by catalog experts from</p>
            <div className="flex mx-auto w-full md:w-4/5 lg:w-2/3 animate-marquee md:animate-none whitespace-nowrap items-center justify-around gap-10">
                <Image src="/microsoft.svg" alt="Hero Image" width="0" height="0" sizes="100vw" className="w-[7.5rem] lg:w-36 grayscale hover:grayscale-0" />
                <Image src="/meta-logo.png" alt="Hero Image" width="0" height="0" sizes="100vw" className="w-[7.5rem] lg:w-36 grayscale hover:grayscale-0" />
                <Image src="/uber-eats.png" alt="Hero Image" width="0" height="0" sizes="100vw" className="w-[7.5rem] lg:w-36 grayscale hover:grayscale-0" />
                <Image src="/stanford.png" alt="Hero Image" width="0" height="0" sizes="100vw" className="w-[7.5rem] lg:w-36 grayscale hover:grayscale-0" />
            </div>
        </div>
    )
}