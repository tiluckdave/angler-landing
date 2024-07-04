import Link from "next/link";

export default function Footer() {
    return (
        <footer className="text-gray-700 py-8">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-center sm:text-left">© 2021 Angler. All rights reserved.</p>
                <Link href="mailto:amay@anglercloud.com" legacyBehavior>
                    <a className="text-center sm:text-left hover:underline">
                        Contact Us
                    </a>
                </Link>
            </div>
        </footer>
    );
}