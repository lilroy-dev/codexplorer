"use client";
import React from "react";
import Link from "next/link";
import styles from "./button.module.scss";

interface ButtonProps {
    href?: string;
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "secondary" | "danger" | "success" | "link";
    size?: "small" | "medium" | "large";
    icon?: React.ReactNode; // Для иконки
}

export const Button: React.FC<ButtonProps> = ({
                                                  href,
                                                  onClick,
                                                  children,
                                                  className = "",
                                                  variant = "primary",
                                                  size = "medium",
                                                  icon,
                                              }) => {
    const classes = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;

    if (href) {
        return (
            <Link href={href} passHref>
                {icon && <span className={styles.icon}>{icon}</span>}
                {children}
            </Link>
        );
    }

    return (
        <button className={classes} onClick={onClick}>
            {icon && <span className={styles.icon}>{icon}</span>}
            {children}
        </button>
    );
};
