import Image from 'next/image';
import { Fragment } from 'react';

const SwapFirstTokenModal = () => {
    const data = [1, 2, 3, 4, 5, 6, 7];


    return (
        <Fragment>
            <input
                type="checkbox"
                id="token_list_modal_1"
                className="modal-toggle"
            />
            <dialog id="token_list_modal_1" className="modal fixed inset-0 z-50 flex items-center justify-center">
                <div className="modal-box bg-[#000B0F] text-token w-full h-full max-w-none max-h-none p-8 relative">
                    <form method="dialog">
                        <label
                            htmlFor="token_list_modal_1"
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

                        <div className="flex justify-center items-center gap-2">
                            <div className="flex flex-row cursor-pointer justify-center gap-1  rounded-md bg-[#00CCF5] text-black  px-2 py-[8px]">
                                <Image className=''
                                    loading="lazy"
                                    priority={false}
                                    src={'/assets/icons/tokens/eth.svg'}
                                    width={16}
                                    height={16}
                                    alt="ethereum token icon"
                                />
                                <span className=''>Ethereum</span>
                            </div>
                            <div className="flex flex-row cursor-pointer justify-center gap-1 rounded-md bg-[#244855] text-white  px-2 py-[8px]">
                                <Image
                                    loading="lazy"
                                    priority={false}
                                    src={'/assets/icons/tokens/binance.svg'}
                                    width={16}
                                    height={16}
                                    alt="binance token icon"
                                />
                                <span>Binance</span>
                            </div>
                            <div className="flex flex-row cursor-pointer justify-center gap-1 rounded-md bg-[#244855] text-white  px-2 py-[8px]">
                                <Image
                                    loading="lazy"
                                    priority={false}
                                    src={'/assets/icons/tokens/fantom.svg'}
                                    width={16}
                                    height={16}
                                    alt="fantom token icon"
                                />
                                <span>Fantom</span>
                            </div>
                        </div>

                        <div className="mt-2 flex flex-col gap-3 py-[5px] h-[20rem] overflow-y-auto">
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
                        <button className='bg-[#00CCF5] self-stretch py-4 rounded-md mt-2 flex flex-row-reverse gap-2 items-center justify-center'>
                            <span> Back to Swap</span>
                            <Image src={'/assets/icons/arrow.svg'} alt='arrow' width={25} height={25} />
                        </button>
                    </div>
                </div>
            </dialog>
        </Fragment>
    );
};

export default SwapFirstTokenModal;
