import Image from 'next/image';

const SwapSettings = () => {
    return (
        <>
            <input
                type="checkbox"
                id="swap_setting_modal"
                className="modal-toggle"
            />
            <dialog id="swap_setting_modal" className="modal backdrop-blur-sm">
                <div className="modal-box border-gradient bg-[#09191ECC] text-white">
                    <form method="dialog">
                        <label
                            htmlFor="swap_setting_modal"
                            className="btn btn-circle btn-ghost btn-sm absolute right-6 top-5"
                        >
                            ✕
                        </label>
                    </form>
                    <h3 className="mb-4 text-lg font-bold capitalize">
                        Transaction Settings
                    </h3>

                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-3 ">
                            <div className="flex flex-row items-center justify-between">
                                <div className="flex flex-row items-center gap-1">
                                    <Image
                                        loading="lazy"
                                        priority={false}
                                        src={'/assets/icons/chart.svg'}
                                        width={15}
                                        height={15}
                                        alt="balance chart icon"
                                    />

                                    <p className=" text-[#C6F0FF] capitalize">
                                        Slippage Tolerance
                                    </p>
                                </div>
                                <div>1%</div>
                            </div>
                            <div className="flex  flex-row items-center justify-between bg-[#000B0F]  border border-[#00CCF5]  rounded-lg p-4 shadow-card-neumorphism">
                                <div>1.00%</div>
                                <div className="flex flex-row gap-2">
                                    <button className="box-shadow-inset w-[25%] rounded-lg  bg-[#244855] p-1 transition hover:bg-sky-500 hover:text-white active:scale-[.96]">
                                        25%
                                    </button>
                                    <button className="box-shadow-inset w-[25%] rounded-lg  bg-[#244855] p-1 transition hover:bg-sky-500 hover:text-white active:scale-[.96]">
                                        50%
                                    </button>
                                    <button className="box-shadow-inset w-[25%] rounded-lg  bg-[#244855] p-1 transition hover:bg-sky-500 hover:text-white active:scale-[.96]">
                                        75%
                                    </button>
                                    <button className="box-shadow-inset w-[25%] rounded-lg  bg-[#244855] p-1 transition hover:bg-sky-500 hover:text-white active:scale-[.96]">
                                        MAX
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-row items-center justify-between">
                                <div className="flex flex-row items-center gap-1">
                                    <Image className='text-[#C6F0FF]'
                                        loading="lazy"
                                        priority={false}
                                        src={'/assets/icons/clock.svg'}
                                        width={15}
                                        height={15}
                                        alt="balance chart icon"
                                    />

                                    <p className=" text-[#C6F0FF] capitalize">
                                        Transaction deadline
                                    </p>
                                </div>
                                <div>30 min</div>
                            </div>
                            <div className="flex bg-[#000B0F]  border border-[#00CCF5] flex-row items-center justify-between rounded-lg p-4 shadow-card-neumorphism">
                                <div>30</div>
                                <div className="flex flex-row gap-2">
                                    <p className="capitalize">minutes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default SwapSettings;
