import React from 'react';
import Image from 'next/image';
import plusIcon from '../../assets/icons/plus.svg';
import clockIcon from '../../assets/icons/clock.svg';
import usdtIcon from '../../assets/icons/usdt.svg';
function Page() {
    return (
        <section className="flex  w-full flex-wrap items-center justify-center py-8">
            <section className="flex w-full flex-wrap rounded   p-4 shadow md:w-7/12">
                <section className="flex w-full flex-wrap  content-start justify-between">
                    <div className="w-full rounded py-2 md:w-1/2">
                        <div className="flex w-full items-center gap-2 p-2 font-bold text-white">
                            <Image
                                src={plusIcon}
                                alt={''}
                                width={20}
                                height={20}
                            />
                            Add Token
                        </div>
                        <div className="box-shadow-inset mt-2 flex w-full flex-wrap rounded-xl   p-2 shadow-2xl bg-[#09191ECC] text-white border-gradient  ">
                            <div className="avatar placeholder w-2/12">
                                <div className="w-12 rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="flex w-10/12 flex-wrap content-between text-sm">
                                <div className="flex w-full flex-wrap items-center justify-between p-1">
                                    <strong>42</strong>
                                    <strong className="text-[11px]">
                                        Balance: 0.86
                                    </strong>
                                </div>
                                <div className="flex w-full flex-wrap items-center p-1 ">
                                    ~108.07 USD
                                </div>
                            </div>
                            <div className="mt-2 flex w-full flex-wrap items-center justify-between p-2">
                                <button className="box-shadow-inset w-[24%] rounded-lg bg-[#244855] p-1 transition hover:bg-[#00CCF5] hover:text-white active:scale-[.96]">
                                    25%
                                </button>
                                <button className="box-shadow-inset w-[24%] rounded-lg bg-[#244855] p-1 transition hover:bg-[#00CCF5] hover:text-white active:scale-[.96]">
                                    50%
                                </button>
                                <button className="box-shadow-inset w-[24%] rounded-lg bg-[#244855] p-1 transition hover:bg-[#00CCF5] hover:text-white active:scale-[.96]">
                                    75%
                                </button>
                                <button className="box-shadow-inset w-[24%] rounded-lg bg-[#244855] p-1 transition hover:bg-[#00CCF5] hover:text-white active:scale-[.96]">
                                    MAX
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full rounded py-2 md:w-1/2">
                        <div className="flex w-full items-center gap-2 p-2 font-bold text-white">
                            <Image
                                src={clockIcon}
                                alt={''}
                                width={20}
                                height={20}
                            />
                            Add Duration
                        </div>
                        <div className="box-shadow-inset mt-2 flex w-full flex-wrap rounded-xl bg-gradient-to-l text-white border-gradient p-2 shadow-2xl">
                            <div className="avatar placeholder w-2/12">
                                <div className="w-12 rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="flex w-10/12 flex-wrap content-between text-sm">
                                <div className="flex w-full flex-wrap items-center justify-between p-1">
                                    <strong>42</strong>
                                    <strong className="text-[11px]">
                                        Balance: 0.86
                                    </strong>
                                </div>
                                <div className="flex w-full flex-wrap items-center p-1 text-gray-500">
                                    ~108.07 USD
                                </div>
                            </div>
                            <div className="mt-2 flex w-full flex-wrap items-center justify-between p-2">
                                <button className="box-shadow-inset w-[24%] rounded-lg bg-[#244855] p-1 transition hover:bg-[#00CCF5] hover:text-white active:scale-[.96]">
                                    25%
                                </button>
                                <button className="box-shadow-inset w-[24%] rounded-lg bg-[#244855] p-1 transition hover:bg-[#00CCF5] hover:text-white active:scale-[.96]">
                                    50%
                                </button>
                                <button className="box-shadow-inset w-[24%] rounded-lg bg-[#244855] p-1 transition hover:bg-[#00CCF5] hover:text-white active:scale-[.96]">
                                    75%
                                </button>
                                <button className="box-shadow-inset w-[24%] rounded-lg bg-[#244855] p-1 transition hover:bg-[#00CCF5] hover:text-white active:scale-[.96]">
                                    MAX
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt-4 flex w-full flex-wrap content-start">
                    <strong className="w-full py-2 text-xl text-white">
                        Lock Overview
                    </strong>
                    <figure className="my-2 flex w-full flex-wrap items-center rounded-lg p-3 shadow-2xl">
                        <div className="w-1/12">
                            <Image
                                src={usdtIcon}
                                alt={''}
                                width={48}
                                height={48}
                            />
                        </div>
                        <figcaption className="flex w-11/12 flex-wrap items-center justify-between p-2 font-bold text-white">
                            MY veSTAKE
                            <span>0</span>
                        </figcaption>
                    </figure>
                </section>
                <section className="box-shadow-inset mt-5 flex w-full flex-wrap content-start rounded-lg bg-gradient-to-l border-gradient bg-[#09191ECC] py-2  text-white px-3 text-sm">
                    <div className="flex w-full items-center justify-between p-2">
                        <span> Total APR</span>
                        <span className=" dark:bg-[#00CCF5] p-2 rounded-md">
                            Up to 26.05%
                        </span>
                    </div>
                    <div className="flex w-full items-center justify-between p-2">
                        <span>STAKE to be Locked</span>
                        <span className="text-white">42</span>
                    </div>
                    <div className="flex w-full items-center justify-between p-2">
                        <span>Factor</span>
                        <span className="text-white">0.20x</span>
                    </div>
                    <div className="flex w-full items-center justify-between p-2">
                        <span>Duration</span>
                        <span className="text-white">52 weeks</span>
                    </div>
                    <div className="flex w-full items-center justify-between p-2">
                        <span>Unlock on</span>
                        <span className="text-white">Jun 4, 2025, 03:30</span>
                    </div>
                </section>
                <section className="mt-4 flex w-full flex-wrap items-center justify-center py-3 md:p-4">
                    <button className="btn btn-ghost w-full swap-gradient text-white md:w-1/2">
                        Lock STAKE
                    </button>
                </section>
            </section>
        </section>
    );
}

export default Page;
