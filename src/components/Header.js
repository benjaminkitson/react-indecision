import React from "react";
import { HiCog } from "react-icons/hi";

export default function Header({ openSettings }) {
    return (
        <div
            className={
                "flex w-full items-center justify-between bg-blue-500 px-20 py-5 text-white"
            }
        >
            <div className="w-1/6"></div>
            <div className="flex flex-col items-center justify-center">
                <h1 className="mb-5 text-6xl">Random</h1>
                <h2 className="text-3xl">Randomly choose stuff, I guess?</h2>
            </div>
            <div className="flex w-1/6 justify-end">
                <HiCog
                    onClick={() => openSettings()}
                    className={"cursor-pointer text-5xl"}
                />
            </div>
        </div>
    );
}
