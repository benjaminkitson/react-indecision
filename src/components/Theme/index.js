import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Settings from "./Settings";
import useSettings from "./Settings/useSettings";
import { useState } from "react";

export default function Theme({ children }) {
    const { openSettings, closeSettings, isOpen, isClosed } = useSettings();

    return (
        <div className="relative flex h-screen max-h-screen w-full flex-col justify-between">
            {isOpen && <Settings closeSettings={closeSettings}/>}
            <Header openSettings={openSettings} />
            <div className="flex w-full flex-grow flex-col items-center justify-between bg-black p-10">
                {children}
            </div>
            <Footer />
        </div>
    );
}
