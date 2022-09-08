import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Settings from "./Settings";
import { useState } from "React";

export default function Theme({ children }) {
    const [isSettings, setIsSettings] = useState(false);
    return (
        <div className="relative flex h-screen max-h-screen w-full flex-col justify-between">
            {isSettings && <Settings />}
            <Header setIsSettings={setIsSettings} />
            <div className="flex w-full flex-grow flex-col items-center justify-between bg-black p-10">
                {children}
            </div>
            <Footer />
        </div>
    );
}
