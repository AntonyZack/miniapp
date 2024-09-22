'use client';
import x from '@/../public/assets/icons/x-mark.svg'
import coin5 from '@/../public/assets/icons/tokens/coin5.svg'
import coin2 from '@/../public/assets/icons/tokens/coin2.svg'
import circle from '@/../public/assets/icons/circle.svg'
import ques from '@/../public/assets/icons/ques.svg'




import Image from 'next/image';
import { FC, RefObject } from 'react';
import copy from '@/../public/assets/icons/copy.svg'

interface SwapClickProps {
    modalRef: RefObject<HTMLDialogElement>;
}

const SwapClick: FC<SwapClickProps> = ({ modalRef }) => {
    return (
        <dialog id="my_modal_2" className="modal backdrop-blur-sm " ref={modalRef}>
            <div className="modal-box flex flex-col bg-[#09191ECC] border text-white border-transparent gap-4">
                <div className='flex justify-between'>
                    <h3 className="font-bold text-lg">Swap Confirmation</h3>
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">                    <Image src={x} alt='close ' />
                        </button>
                    </form>
                </div>
                <div className="py-4 flex justify-between border-gradient p-4">
                    <div className='flex gap-4' >

                        <Image src={coin5} alt='cooin5' width={40} />
                        <p className='flex flex-col'>
                            <span className='text-[.85rem]'>Transfer out 42 USDT</span>
                            <span className='text-[#858E9B] text-[.85rem]'> 0x780bb2e0cad31</span>
                        </p>

                    </div>

                    <Image width={20} src={copy} alt='copy' />
                </div>
                <div className="py-4 flex justify-between border-gradient p-4">
                    <div className='flex gap-4' >

                        <Image src={coin2} alt='cooin2' width={40} />
                        <p className='flex flex-col'>
                            <span className='text-[.85rem]'>Receive 0.002376 BNB</span>
                            <span className='text-[#858E9B] text-[.85rem]'>fcd0b976e0e129d</span>
                        </p>

                    </div>

                    <Image width={20} src={copy} alt='copy' />
                </div>
                <div className='border-gradient px-2' >
                    <div className="my-4 flex justify-between">
                        <div className=" text-[#858E9B] text-[.85rem]">Select Exchange Path</div>
                        <div className="text-right flex items-center gap-1 ">
                            <Image src={circle} alt='circle' />



                            <span className='text-[.85rem]'>Bridges</span></div>
                    </div>
                    <div className="my-4 flex justify-between">
                        <div className="text-[#858E9B] flex items-center gap-1">
                            <span className='text-[.85rem]'>Service Fee</span>
                            <Image width={20} src={ques} alt='ques' />
                        </div>
                        <div className=" text-right text-[.85rem]">0.3%</div>
                    </div>
                    <div className="my-4 flex justify-between">
                        <div className="text-[#858E9B] flex items-center gap-1">
                            <span className='text-[.85rem]'>Gas Fees</span>
                            <Image width={20} src={ques} alt='ques' />
                        </div>
                        <div className=" text-right text-[.85rem]">0.000781 BNB(BSC)</div>
                    </div>
                    <div className="my-4 flex justify-between ">
                        <div className="w-1/2 text-[#858E9B] text-[.85rem]">You Will Recive</div>
                        <div className="w-1/2 text-right text-[.85rem]">0.00345 BNB(BSC)</div>
                    </div>


                </div>
                <button className='bg-transparent border border-[#00CCF5] self-stretch py-2 px-4 text-[.85rem] rounded-md text-[#00CCF5]'>Approve</button>

                <button className='swap-gradient self-stretch py-2 px-4 text-[.85rem] rounded-md'>Confirm</button>
            </div>

        </dialog>
    );
};

export default SwapClick;
