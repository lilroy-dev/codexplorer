'use client'
import React from 'react';
import Link from "next/link";

export const ALink = ({ href, children }) => {
    return (
        <Link href={href}>
            {children}
        </Link>
    );
};

