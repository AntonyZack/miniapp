
'use client'
import Image from 'next/image';
import { Fragment } from 'react';
import background from '@/../public/assets/icons/background2.svg'

const SwapSecondTokenModal = () => {
    const data = [1, 2, 3, 4, 5, 6, 7];

    return (
        <Fragment>
            <input
                type="checkbox"
                id="token_list_modal_2"
                className="modal-toggle"
            />
            <dialog id="token_list_modal_2" className="modal fixed inset-0 z-50 flex items-center justify-center">
                <div className="modal-box bg-[#000B0F] text-token w-full h-full max-w-none max-h-none p-8 relative">
                    <form method="dialog">
                        <label
                            htmlFor="token_list_modal_2"
                            className="btn btn-circle btn-ghost btn-sm absolute right-6 top-5"
                        >
                            ✕
                        </label>
                    </form>
                    <h3 className="mb-4 text-lg font-bold capitalize">
                        Select a Token
                    </h3>

                    <div className="flex flex-col gap-6">
                        <label className="input input-bordered flex flex-row-reverse items-center gap-2 bg-[#09191ECC] border focus-visible:outline-[#00CCF5] border-[#00CCF5]">
                            <input
                                type="text"
                                className="grow placeholder:text-white"
                                placeholder="Search name or contract address"
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="white"
                                className="h-5 w-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </label>



                        <div className=" flex flex-col gap-3  py-[5px] h-[23rem] overflow-y-auto">
                            {data.map((item, index: number) => (
                                <div
                                    key={index}
                                    className="flex flex-row items-center justify-between rounded-lg p-3 hover:cursor-pointer hover:bg-hover-item"
                                >
                                    <div className="flex flex-col">
                                        <div className="flex flex-row items-center gap-2">
                                            <Image
                                                loading="lazy"
                                                priority={false}
                                                src={`/assets/icons/tokens/coin${index + 1}.svg`}
                                                width={42}
                                                height={42}
                                                alt="token icon"
                                            />
                                            <div className="flex flex-col gap-1">
                                                <div>Syscoin</div>
                                                <div>SYS</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1 text-right">
                                        <div>200</div>
                                        <div>$3.66</div>
                                    </div>
                                </div>
                            ))}

                        </div>
                        <button
                            onClick={() => {
                                const modalCheckbox = document.getElementById("token_list_modal_2") as HTMLInputElement;
                                if (modalCheckbox) modalCheckbox.checked = false;
                            }}
                            className='bg-[#00CCF5] self-stretch py-4 rounded-md mt-2 flex flex-row-reverse gap-2 items-center justify-center'
                        >
                            <span>Back to Swap</span>
                            <Image src={'/assets/icons/arrow.svg'} alt='arrow' width={25} height={25} />
                        </button>
                    </div>
                </div>
            </dialog>
        </Fragment>
    );
};

export default SwapSecondTokenModal;
