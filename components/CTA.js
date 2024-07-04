import Link from "next/link";
import { CTAButton } from "./Button";

export default function CTA() {
    return (
        <section className="md:container mx-auto my-16 md:my-28 md:rounded-3xl bg-gradient-to-r from-blue-800 to-sky-700 text-white py-28 md:py-40">
            <div className="flex flex-col items-center justify-center gap-10">
                <h1 className="text-5xl md:text-6xl lg:text-8xl font-semibold text-center">Ready to learn more?</h1>
                <p className="text-lg w-3/5 md:text-xl lg:text-2xl tracking-wide font-light text-center">Discover how Angler can transform how you manage product data and accelerate your growth.</p>
                <Link href="https://calendly.com/amay-angler/chat-with-angler">
                    <CTAButton bck='dark'>Book a Demo</CTAButton>
                </Link>
            </div>
        </section>
    );
}