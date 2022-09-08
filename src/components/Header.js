import React from "react";

export default function Header({ openSettings }) {
    return (
        <div className="flex w-full flex-col items-center justify-center bg-blue-500 p-10 text-white">
            <h1 className="mb-10 text-6xl">Random</h1>
            <h2 className="text-3xl">Randomly choose stuff, I guess?</h2>
            <h2 className="cursor-pointer" onClick={() => openSettings()}>
                Settings
            </h2>
        </div>
    );
}
