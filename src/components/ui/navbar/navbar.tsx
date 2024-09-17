'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IRoute, Routes } from '../../../data/routes';
import Image from 'next/image';
import close from '@/../public/assets/icons/x-mark.svg'

const ConnectWalletComponent = dynamic(
    () => import('@/components/ui/button/ConnectWalletButton'),
    {
        ssr: false,
        loading: () => <p>loading wallet btn</p>
    }
);

const Navbar = () => {
    const pathname = usePathname();
    const getClassNames = (path: string) => {
        return pathname === path
            ? 'dark:bg-gradient-text-dark text-gradient'
            : 'dark:text-white';
    };

    return (
        <div className="navbar items-center border-b border-gray-600 bg-transparent pl-4 ">
            <div className="flex items-center justify-start gap-2 ">
                <div>
                    <Image src={close} alt='close' />
                </div>
                <div className="dropdown hidden">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
                    >
                        {Routes.map((data: IRoute, index: number) => {
                            return (
                                <li key={index}>
                                    <Link
                                        href={data.href}
                                        className={`${getClassNames(data.href)} font-sora text-base`}
                                    >
                                        {data.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <a className=" text-xl dark:text-white">
                    Whale Dex
                </a>
            </div>
            <div className="navbar-center hidden ">
                <ul className="menu menu-horizontal px-1">
                    {Routes.map((data: IRoute, index: number) => {
                        return (
                            <li key={index}>
                                <Link
                                    href={data.href}
                                    className={`${getClassNames(data.href)} font-sora text-base`}
                                >
                                    {data.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="navbar-end hidden">
                <ConnectWalletComponent />
            </div>
        </div>
    );
};

export default Navbar;
