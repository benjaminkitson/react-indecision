import React from "react";
import { getColourClass } from "./helpers";

export default function Button({
    children,
    className,
    colour,
    groupHidden,
    disabled,
    onClick,
}) {
    const defaultClasses = `${
        groupHidden ? "hidden group-hover:flex" : "flex"
    } items-center justify-center rounded-md`;

    const colourClass = disabled ? "bg-gray-400" : getColourClass(colour);

    return (
        <button
            className={`${defaultClasses} ${colourClass} ${className}`}
            onClick={(e) => {
                if (onClick) {
                    onClick(e);
                }
            }}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
