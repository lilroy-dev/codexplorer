import React, { FC } from 'react';

interface SpacerProps {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
    children: React.ReactNode;
}

export const Spacer: FC<SpacerProps> = ({ top = 0, right = 0, bottom = 0, left = 0, children }) => {
    return (
        <div style={{ margin: `${top}px ${right}px ${bottom}px ${left}px` }}>
            {children}
        </div>
    );
};


