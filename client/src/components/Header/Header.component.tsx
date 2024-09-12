'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Header = () => {
    const path = usePathname();

    if (path !== '/') {
        return (
            <header className="flex w-full mb-5">
                <Link
                    href={'/'}
                    className="text-xl mx-auto 
                hover:text-gray-300 transition-colors duration-200 ease-in-out"
                >
                    Home
                </Link>
            </header>
        );
    }
    return;
};
