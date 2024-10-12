"use client";
import React from "react";
import styles from "./button.module.scss";

interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "secondary" | "danger" | "success";
    size?: "small" | "medium" | "large" | "icon";
    icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
                                                  onClick,
                                                  children,
                                                  className = "",
                                                  variant = "primary",
                                                  size = "medium",
                                                  icon,
                                              }) => {
    const classes = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;
    return (
        <button className={classes} onClick={onClick}>
            {icon && <span className={styles.icon}>{icon}</span>}
            {children}
        </button>
    );
};
