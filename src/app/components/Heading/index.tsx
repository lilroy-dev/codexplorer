import React from "react";

interface HeadingProps {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    children: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({ level, children }) => {
    const headingMap = {
        1: <h1>{children}</h1>,
        2: <h2>{children}</h2>,
        3: <h3>{children}</h3>,
        4: <h4>{children}</h4>,
        5: <h5>{children}</h5>,
        6: <h6>{children}</h6>,
    };
    return headingMap[level] || <h1>{children}</h1>;
};
