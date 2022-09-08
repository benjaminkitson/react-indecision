import React from "react";
import { useRef } from "react";

export default function Settings({ closeSettings }) {
    const ref = useRef();

    const handleCloseModal = (e) => {
        if (e.target === ref.current) {
            closeSettings();
        }
    };

    return (
        <div
            className="absolute top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-75"
            onClick={(e) => handleCloseModal(e)}
            ref={ref}
        >
            <div className="flex h-96 w-96 items-center justify-center rounded-lg bg-blue-700">
                Settings
            </div>
        </div>
    );
}
