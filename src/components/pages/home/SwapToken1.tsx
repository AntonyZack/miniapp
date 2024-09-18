import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface SwapToken1Props {
    data: { balance: number; token_address: string };
    onSelectToken: (data: { balance: number; token_address: string }) => void;
}

const SwapToken1: React.FC<SwapToken1Props> = ({ data, onSelectToken }) => {
    const [balance, setBalance] = useState<number>(data.balance); // Initialize state with data balance

    useEffect(() => {
        setBalance(data.balance);
    }, [data]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value);
        setBalance(value);
        onSelectToken({
            balance: value,
            token_address: data.token_address
        });
    };

    const handleTokenSelect = () => {
        onSelectToken({
            balance,
            token_address: data.token_address
        });
    };

    return (
        <>
            <label
                htmlFor={data.token_address}
                className="btn btn-ghost flex flex-row p-0"
                onClick={handleTokenSelect}
            >
                <div>
                    <Image
                        loading="lazy"
                        priority={false}
                        src={'/assets/icons/tokens/eth.svg'}
                        width={20}
                        height={20}
                        alt="ethereum token icon"
                    />
                </div>
                <h2 className="font-sora text-[20px] font-bold text-token">
                    ETH
                </h2>
                <div>
                    <Image
                        loading="lazy"
                        priority={false}
                        src={'/assets/icons/dropdown.svg'}
                        width={16}
                        height={16}
                        alt="dropdown icon"
                    />
                </div>
            </label>

            <div className="text-right" dir="rtl">
                <input
                    type="number"
                    placeholder="Type here"
                    value={balance}
                    onChange={handleInputChange}
                    className="input w-full max-w-xs p-0 dark:bg-transparent text-[#C6F0FF]"
                />
            </div>
        </>
    );
};

export default SwapToken1;
