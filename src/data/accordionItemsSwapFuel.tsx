import allert from '@/../public/assets/icons/allert.svg'
import benzin from '@/../public/assets/icons/benzin.svg'
import { div } from 'framer-motion/client';
import Image from 'next/image';

const accordionItems = [
    {
        img1: <Image width={20} src={benzin} alt='benzin' />,
        title: '1‌ETH‌= 6827.00011 aVAX',
        img2: <Image width={20} src={allert} alt='allert' />,






        content: (
            <div >
                <div className='border-b-2   border-white flex mb-4 '></div>
                <div className="my-2 flex justify-between">
                    <div className="w-1/2 text-[#858E9B]">Network fee</div>
                    <div className="w-1/2">~$0.13</div>
                </div>
                <div className="my-2 flex justify-between">
                    <div className="w-1/2 text-[#858E9B]">Price impact</div>
                    <div className="w-1/2">-0.09%</div>
                </div>
                <div className="my-2 flex justify-between">
                    <div className="w-1/2 text-[#858E9B]">Row 3 Col 1</div>
                    <div className="w-1/2">4.1124 Token1</div>
                </div>
                <div className="my-2 flex justify-between ">
                    <div className="w-1/2 text-[#858E9B]">Expected output</div>
                    <div className="w-1/2">4.38124 Token1</div>
                </div>
                <div className=' my-4 flex border-b-2   border-white'>

                </div>
                <div className='my-2 flex justify-between items-center'>
                    <div className="w-1/2 text-[#858E9B]">Routing source</div>
                    <div className="w-1/2">Uniswap</div>

                </div>
            </div>
        )
        ,



    }
];

export { accordionItems };
