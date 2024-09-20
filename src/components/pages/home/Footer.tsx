'use client';

import Image from 'next/image';
import stake from '@/../public/assets/icons/stake.svg';
import swap from '@/../public/assets/icons/swap.svg';
import wallet from '@/../public/assets/icons/wallet.svg';
import Link from 'next/link';
import { useRef } from 'react';
import SwapWallet from '../../ui/modals/swap/wallet';

function Footer() {
    const modalRef = useRef<HTMLDialogElement>(null);

    const openModal = () => {
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    };

    return (
        <div className="sticky bottom-0 z-50 flex w-full justify-around border-t border-[#00CCF5] bg-[#09191E] py-2">
            <Link href="stake">
                <Image src={stake} width={40} height={40} alt="stake" />
            </Link>
            <Link href="/">
                <Image src={swap} width={40} height={40} alt="swap" />
            </Link>

            <button className='outline-none active:outline-none' onClick={openModal}>
                <Image src={wallet} width={45} height={45} alt="wallet" />
            </button>

            <SwapWallet modalRef={modalRef} />
        </div>
    );
}

export default Footer;
