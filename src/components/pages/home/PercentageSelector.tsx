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
        <div className="flex flex-row-reverse gap-[8px] border">
            {percentages.map((percentage, index) => (
                <div
                    key={index}
                    className={`btn btn-ghost h-[24px] !min-h-[24px] w-[48px] px-[8px] py-[2px] leading-5`}
                    onClick={() => handleClick(index)}
                >
                    <span className="text-[14px] uppercase text-white">{`${percentage * 100}%`}</span>
                </div>
            ))}
        </div>
    );
};

export default PercentageSelector;
