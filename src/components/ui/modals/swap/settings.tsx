import Image from 'next/image';
import { Fragment } from 'react';

const SwapSettings = () => {
    return (
        <Fragment>
            <input
                type="checkbox"
                id="swap_setting_modal"
                className="modal-toggle"
            />
            <dialog id="swap_setting_modal" className="modal backdrop-blur">
                <div className="modal-box bg-gradient-dark text-token">
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
                        <div className="flex flex-col gap-3">
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

                                    <p className="text-balance capitalize">
                                        Slippage Tolerance
                                    </p>
                                </div>
                                <div>1%</div>
                            </div>
                            <div className="flex h-[44px] flex-row items-center justify-between rounded-lg p-2 shadow-card-neumorphism">
                                <div>1.00%</div>
                                <div className="flex flex-row gap-2">
                                    <button className="box-shadow-inset w-[25%] rounded-lg bg-gradient-to-br from-[#2C3341] to-[#313949] p-1 transition hover:bg-gradient-orange hover:text-white active:scale-[.96]">
                                        25%
                                    </button>
                                    <button className="box-shadow-inset w-[25%] rounded-lg bg-gradient-to-br from-[#2C3341] to-[#313949] p-1 transition hover:bg-gradient-orange hover:text-white active:scale-[.96]">
                                        50%
                                    </button>
                                    <button className="box-shadow-inset w-[25%] rounded-lg bg-gradient-to-br from-[#2C3341] to-[#313949] p-1 transition hover:bg-gradient-orange hover:text-white active:scale-[.96]">
                                        75%
                                    </button>
                                    <button className="box-shadow-inset w-[25%] rounded-lg bg-gradient-to-br from-[#2C3341] to-[#313949] p-1 transition hover:bg-gradient-orange hover:text-white active:scale-[.96]">
                                        MAX
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-row items-center justify-between">
                                <div className="flex flex-row items-center gap-1">
                                    <Image
                                        loading="lazy"
                                        priority={false}
                                        src={'/assets/icons/clock.svg'}
                                        width={15}
                                        height={15}
                                        alt="balance chart icon"
                                    />

                                    <p className="text-balance capitalize">
                                        Transaction deadline
                                    </p>
                                </div>
                                <div>30 min</div>
                            </div>
                            <div className="flex h-[44px] flex-row items-center justify-between rounded-lg p-2 shadow-card-neumorphism">
                                <div>30</div>
                                <div className="flex flex-row gap-2">
                                    <p className="capitalize">minutes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </dialog>
        </Fragment>
    );
};

export default SwapSettings;
