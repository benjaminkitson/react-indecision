import React from "react";

export default function TextInput({
    isInvalid,
    className,
    onChange,
    value,
    type,
    name,
}) {
    return (
        <input
            className={`${className} ${
                isInvalid
                    ? "outline-red-600 focus:outline-red-600"
                    : "focus:outline-blue-700"
            }`}
            tyoe="text"
            name={name}
            value={value}
            onChange={onChange}
        ></input>
    );
}
