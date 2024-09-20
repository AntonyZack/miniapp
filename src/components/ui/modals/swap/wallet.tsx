'use client';

import Image from 'next/image';
import { FC, RefObject } from 'react';
import copy from '@/../public/assets/icons/copy.svg'

interface SwapWalletProps {
    modalRef: RefObject<HTMLDialogElement>;
}

const SwapWallet: FC<SwapWalletProps> = ({ modalRef }) => {
    return (
        <dialog id="my_modal_2" className="modal backdrop-blur-sm " ref={modalRef}>
            <div className="modal-box flex flex-col bg-[#09191ECC] border text-white border-[#00CCF5] absolute bottom-24">
                <h3 className="font-bold text-lg">Your Wallet Name</h3>
                <div className="py-4 flex justify-between">
                    <p className='text-[#70747E] flex flex-col'><span>0x780bb2e0cad31...</span>
                        <span> fcd0b976e0e129d</span></p>
                    <Image width={35} src={copy} alt='copy' />
                </div>
                <button className='swap-gradient self-stretch py-3 px-4  rounded-md'>Disconnect</button>
            </div>
            {/* <form method="dialog" className="modal-backdrop ">
                <button className="btn">close</button>
            </form> */}
        </dialog>
    );
};

export default SwapWallet;
