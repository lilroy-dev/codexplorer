import React from 'react';
import { IconProps } from "@/app/components/Icon/icons/type"; // Assuming this has your IconProps type
import { Favorites, Loop } from "@/app/components/Icon/icons";

interface IconComponentProps {
    icon: keyof typeof iconsMapping;
    width?: number;
    height?: number;
    color?: string;
    className?: string;
}

const iconsMapping: Record<string, React.FC<IconProps>> = {
    'Favorites': Favorites,
    'Loop': Loop,
};

export const Icon: React.FC<IconComponentProps> = ({ icon, width, height, color, className}) => {
    const IconComponent = iconsMapping[icon];

    if (!IconComponent) {
        console.warn(`Icon "${icon}" not found in iconsMapping.`);
        return null;
    }

    return (
        <IconComponent className={className} width={width} height={height} color={color} />
    );
};
