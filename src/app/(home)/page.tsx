'use client';

import { accordionItems } from '@/data/accordionItemsSwapFuel';
import { checkNetwork } from '@/libs/NetworkLibrary';
import { Network } from 'ethers';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// Define the type for the network state
type NetworkState = Network | null;

const Accordion = dynamic(() => import('@/components/ui/accordion/Accordion'), {
    ssr: false,
    loading: () => <p>loading accordion</p>
});

const SwapToken1 = dynamic(() => import('@/components/pages/home/SwapToken1'), {
    ssr: false,
    loading: () => <p>loading swap 1</p>
});
const SwapToken2 = dynamic(() => import('@/components/pages/home/SwapToken2'), {
    ssr: false,
    loading: () => <p>loading swap 2</p>
});

const PercentageSelector = dynamic(
    () => import('@/components/pages/home/PercentageSelector'),
    {
        ssr: false,
        loading: () => <p>loading percentage selector</p>
    }
);

const MainComponent: React.FC = () => {
    const [network, setNetwork] = useState<NetworkState>(null);

    useEffect(() => {
        async function fetchNetwork() {
            const networkData = (await checkNetwork()) as NetworkState;
            setNetwork(networkData);
        }

        fetchNetwork();
    }, []);

    const [balance, _] = useState(31980);
    const [selectedPercentage, setSelectedPercentage] = useState<number>(1); // Set initial selectedPercentage to 1 (100%)
    const [isSwapped, setIsSwapped] = useState<boolean>(false);
    const [token1Data, setToken1Data] = useState<{
        balance: number;
        token_address: string;
    }>({ balance: 0, token_address: 'token_list_modal_1' });
    const [token2Data, setToken2Data] = useState<{
        balance: number;
        token_address: string;
    }>({ balance: 0, token_address: 'token_list_modal_2' });

    const handlePercentageChange = (value: number) => {
        setSelectedPercentage(value);
    };

    const handleTokenSelect = (data: {
        balance: number;
        token_address: string;
    }) => {
        if (data.token_address === 'token_list_modal_1') {
            setToken1Data(data);
        } else if (data.token_address === 'token_list_modal_2') {
            setToken2Data(data);
        }
    };

    const calculateNewBalance = () => {
        return Math.round(balance * selectedPercentage);
    };

    const handleSwapClick = () => {
        setIsSwapped(!isSwapped);
    };
    return (
        <main className="mx-auto w-full max-w-lg">
            {/* sample network data fetching */}
            {/*     {network ? (
                <div>
                    <p>Network Name: {network.name}</p>
                    <p>Chain ID: {network.chainId}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )} */}
            <section className="h-screen max-h-[622px] rounded-[10px]  p-6  lg:h-auto lg:max-h-[622px]">
                <div className="flex flex-col content-center items-center justify-center">
                    <div className="mb-4 flex w-full flex-row items-center justify-between capitalize text-white">
                        <span className="font-sora text-base">swap</span>
                        <label
                            htmlFor="swap_setting_modal"
                            className="btn btn-square btn-ghost"
                        >
                            <Image
                                loading="lazy"
                                priority={false}
                                src={'/assets/icons/swap_token.svg'}
                                width={20}
                                height={20}
                                alt="swap token icon"
                            />
                        </label>
                    </div>
                    <div className="flex w-full flex-col gap-[8px]  p-[12px] border-gradient   ">
                        <div className="flex flex-row items-center justify-between px-6 py-3">
                            <p className="text-balance text-[12px] font-normal">
                                Balance:
                                {calculateNewBalance().toLocaleString()}
                            </p>

                            <PercentageSelector
                                onChange={handlePercentageChange}
                            />
                        </div>
                        <div className="flex flex-row items-center justify-between">
                            {isSwapped ? (
                                <SwapToken2
                                    data={token2Data}
                                    onSelectToken={handleTokenSelect}
                                />
                            ) : (
                                <SwapToken1
                                    data={token1Data}
                                    onSelectToken={handleTokenSelect}
                                />
                            )}
                        </div>
                    </div>
                    <div className="py-[24px]">
                        <button
                            onClick={() => handleSwapClick()}
                            className="btn btn-square btn-ghost "
                        >
                            <Image
                                loading="lazy"
                                priority={false}
                                src={'/assets/icons/swap_down.svg'}
                                width={20}
                                height={20}
                                alt="dropdown icon"
                            />
                        </button>
                    </div>

                    <div className="mb-[12px] flex w-full flex-row items-center justify-between rounded-[10px] p-[12px] shadow-card-neumorphism">
                        {isSwapped ? (
                            <SwapToken1
                                data={token1Data}
                                onSelectToken={handleTokenSelect}
                            />
                        ) : (
                            <SwapToken2
                                data={token2Data}
                                onSelectToken={handleTokenSelect}
                            />
                        )}
                    </div>

                    <Accordion items={accordionItems} />

                    <section className="mt-4 flex w-full flex-wrap items-center justify-center py-3">
                        <button className="btn btn-ghost w-full bg-gradient-orange capitalize text-white md:w-full">
                            swap
                        </button>
                    </section>
                </div>
            </section>
        </main>
    );
};
export default MainComponent;
