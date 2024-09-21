'use client';
import React, { useState } from 'react';

interface AccordionProps {
    items: {
        title: string;
        content: React.ReactNode;
        img1: any;
        img2: any
    }[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='self-stretch'>
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <div className="collapse collapse-arrow my-2 border-gradient text-white ">
                        <input
                            type="radio"
                            name="my-accordion-2"
                            checked={activeIndex === index}
                            onChange={() => handleClick(index)}
                            className="hidden"
                        />
                        <div
                            className="flex justify-between items-center gap-2  collapse-title cursor-pointer font-medium  "
                            onClick={() => handleClick(index)}
                        >
                            <p className='flex items-center gap-1'>
                                {item.img2}
                                <span className='text-[.8rem]'>{item.title}</span>
                            </p>
                            <p className='flex gap-1 items-center'>
                                {item.img1}
                                <span>$8.99</span>
                            </p>

                        </div>
                        {activeIndex === index && (
                            <>
                                <div className="collapse-content  ">
                                    {item.content}
                                </div>

                            </>
                        )}
                    </div>
                    {index === items.length - 2 && (
                        <hr className="my-4 border-t border-gray-200" />
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default Accordion;
