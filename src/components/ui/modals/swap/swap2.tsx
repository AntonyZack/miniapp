import Image from 'next/image';
import { Fragment } from 'react';

const SwapSecondTokenModal = () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    return (
        <Fragment>
            <input
                type="checkbox"
                id="token_list_modal_2"
                className="modal-toggle"
            />
            <dialog id="token_list_modal_2" className="modal backdrop-blur">
                <div className="modal-box bg-gradient-dark text-token">
                    <form method="dialog">
                        <label
                            htmlFor="token_list_modal_2"
                            className="btn btn-circle btn-ghost btn-sm absolute right-6 top-5"
                        >
                            ✕
                        </label>
                    </form>
                    <h3 className="mb-4 text-lg font-bold capitalize">
                        Select B Token
                    </h3>

                    <div className="flex flex-col gap-6">
                        <label className="input input-bordered flex items-center gap-2 bg-card-gradient-45deg">
                            <input
                                type="text"
                                className="grow"
                                placeholder="Search"
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </label>
                        <div className="mt-6 flex max-h-[226px] flex-col gap-3 overflow-y-auto py-[14px]">
                            {data.map((data, index: number) => (
                                <div
                                    key={index}
                                    className="flex flex-row items-center justify-between rounded-lg p-3 hover:cursor-pointer hover:bg-hover-item"
                                >
                                    <div className="flex flex-col">
                                        <div className="flex flex-row items-center gap-2">
                                            <Image
                                                loading="lazy"
                                                priority={false}
                                                src={
                                                    '/assets/icons/tokens/syscoin.png'
                                                }
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
                    </div>
                </div>
            </dialog>
        </Fragment>
    );
};

export default SwapSecondTokenModal;
