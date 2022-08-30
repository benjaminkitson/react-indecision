import React from "react";

export default function Input() {
    return (
        <input
            className={`h-full w-full rounded-md px-4 ${
                isInvalid
                    ? "outline-red-600 focus:outline-red-600"
                    : "focus:outline-blue-700"
            }`}
            type="text"
            name="option"
            value={toUpdate}
            onChange={(e) => setToUpdate(e.target.value)}
        ></input>
    );
}
