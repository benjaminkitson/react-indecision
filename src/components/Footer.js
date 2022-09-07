import React from "react";
import Randomise from "./atoms/Randomise";

export default function Footer() {
    return (
        <div className="flex h-40 w-full flex-col items-center justify-center bg-blue-500 p-5">
            <Randomise />
        </div>
    );
}
