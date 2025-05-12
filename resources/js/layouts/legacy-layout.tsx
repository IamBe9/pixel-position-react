import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function LegacyLayout({ children }: PropsWithChildren) {
    return (
        <div className="bg-black text-white font-sans pb-20">
            <div className="px-10">
                <nav className="flex justify-between items-center py-4 border-b border-white/10">
                    <div>
                        <Link href="/">
                            <img src="/images/logo.svg" alt="Logo" />
                        </Link>
                    </div>

                    <div className="space-x-6 font-bold">
                        <Link href="/">Jobs</Link>
                        <Link href="#">Careers</Link>
                        <Link href="#">Salaries</Link>
                        <Link href="#">Companies</Link>
                    </div>

                    <div className="space-x-6 font-bold">
                        <Link href="/register">Sign Up</Link>
                        <Link href="/login">Log In</Link>
                    </div>
                </nav>

                <main className="mt-10 max-w-[986px] mx-auto">{children}</main>
            </div>
        </div>
    );
}
