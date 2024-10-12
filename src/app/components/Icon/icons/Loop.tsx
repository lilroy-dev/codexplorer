import React from 'react';
import { IconProps } from "@/app/components/Icon/icons/type";

export const Loop: React.FC<IconProps> = ({
                                                    className,
                                                   width = 24,
                                                   height = 24,
                                                   color = "#000"
                                               }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            fill={color}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path
                d="M10.5 0C4.7 0 0 4.7 0 10.5S4.7 21 10.5 21c2.4 0 4.6-.8 6.4-2.2l5 5c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l-5-5c1.4-1.8 2.2-4 2.2-6.4C21 4.7 16.3 0 10.5 0zM10.5 19C5.8 19 2 15.2 2 10.5S5.8 2 10.5 2 19 5.8 19 10.5 15.2 19 10.5 19z"/>
        </svg>
    );
};
