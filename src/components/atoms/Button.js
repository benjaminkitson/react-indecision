import React from "react";

export default function Button({ children, className, colour, groupHidden, disabled, onClick }) {
    const defaultClasses = `${
        groupHidden ? "hidden group-hover:flex" : "flex"
    } items-center justify-center rounded-md`;

    let colourClass;

    switch (colour) {
        case "blue":
            colourClass = "bg-blue-600 hover:bg-blue-700 active:bg-blue-800";
            break;
        case "grey":
            colourClass = "bg-gray-400 hover:bg-gray-500 active:bg-gray-600";
            break;
        default:
            throw new Error("Button component must have a colour!");
    }

    return (
        <button
            className={`${defaultClasses} ${colourClass} ${className}`}
            onClick={() => onClick()}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
