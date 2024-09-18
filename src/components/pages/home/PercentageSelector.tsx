'use clinet'
import React, { useState } from 'react';

const PercentageSelector: React.FC<{ onChange: (value: number) => void }> = ({
    onChange
}) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0); // Set initial activeIndex to 0 (100%)

    const percentages = [1, 0.75, 0.5, 0.25]; // Reverse the order to match the activeIndex

    const handleClick = (index: number) => {
        setActiveIndex(index);
        onChange(percentages[index]);


    };

    return (
        <div className="flex flex-row-reverse justify-center self-stretch   gap-[8px]  ">
            {percentages.map((percentage, index) => (
                <div
                    key={index}
                    className={`  py-1 w-24 text-center rounded-sm leading-5 cursor-pointer ${activeIndex === index ? 'bg-[#00CCF5] text-black' : 'bg-[#244855] text-white'
                        }`} onClick={() => handleClick(index)}
                >
                    <span className="text-[14px] uppercase ">{`${percentage * 100}%`}</span>
                </div>
            ))}
        </div>
    );
};

export default PercentageSelector;
