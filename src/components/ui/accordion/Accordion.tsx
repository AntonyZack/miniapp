'use client';
import React, { useState } from 'react';

interface AccordionProps {
    items: {
        title: string;
        content: React.ReactNode;
    }[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div>
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <div className="collapse collapse-arrow my-2 bg-transparent">
                        <input
                            type="radio"
                            name="my-accordion-2"
                            checked={activeIndex === index}
                            onChange={() => handleClick(index)}
                            className="hidden"
                        />
                        <div
                            className="collapse-title cursor-pointer text-xl font-medium"
                            onClick={() => handleClick(index)}
                        >
                            {item.title}
                        </div>
                        {activeIndex === index && (
                            <div className="collapse-content p-4">
                                {item.content}
                            </div>
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
