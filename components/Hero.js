import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CTAButton } from "./Button";

export default function Hero() {
    const productForList = ['Distributors', 'Retailers', 'Brands', 'Marketplaces'];
    const [productFor, setProductFor] = useState(0);
    const [animationClass, setAnimationClass] = useState('fade-in-up');

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimationClass('fade-out-down');

            setTimeout(() => {
                setProductFor((prev) => (prev + 1) % productForList.length);
                setAnimationClass('fade-in-up');
            }, 500); // Match the duration of fade-out-down animation
        }, 2000);

        return () => clearInterval(interval);
    }, [productForList.length]);

    return (
        <div id="heroa" className="container mx-auto flex flex-col gap-10 justify-center items-center">
            <div className="flex font-light justify-center items-center gap-2 text-md text-neutral-800 bg-white/30 shadow px-6 rounded-full ">
                Backed By
                <Image src="/yc.png" alt="Hero Image" width="0" height="0" sizes="100vw" className="w-28" />
            </div>
            <h1 className="text-[2.75rem] xs:text-5xl sm:text-6xl xl:text-7xl leading-tight font-bold w-4/5 text-center">
                Catalog Management For{" "}
                <div className={`bg-gradient-to-tr from-blue-800 to-sky-700 mt-4 text-transparent bg-clip-text ${animationClass}`}>
                    {productForList[productFor]}
                </div>
            </h1>
            <p className="text-xl text-center font-light text-neutral-700">Create a rich, standardized, and accurate<br />
                product catalog to <b className="font-semibold">drive more sales.</b></p>
            <div>
                <Link href="https://calendly.com/amay-angler/chat-with-angler">
                    <CTAButton bck='light'>Book a Demo</CTAButton>
                </Link>
            </div>
        </div>
    );
}
