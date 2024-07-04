import Image from 'next/image';
import Link from 'next/link';
import { Button } from './Button';
import { useRouter } from 'next/router';

export default function NavBar() {
    const router = useRouter();

    const handleLogin = () => {
        router.push('https://auth.anglercloud.com/en/login');
    }

    return (
        <nav className="p-4">
            <div className="container mx-auto flex justify-center sm:justify-between items-center">
                <Link href="/" className='transition-all duration-500 bg-white py-0.5 px-6 rounded-full hover:shadow-xl'>
                    <Image src="/angler_white.png" alt="logo" width="0"
                        height="0"
                        sizes="100vw"
                        className="w-36 sm:w-40" />
                </Link>
                <div className='sm:flex gap-4 items-center hidden'>
                    <Button type="secondary" onClick={handleLogin}>Login</Button>
                    <Link href="https://calendly.com/amay-angler/chat-with-angler">
                        <Button type="primary">Book a Demo</Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
