import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Settings from "./Settings";

export default function Theme({ children }) {
    return (
        <div className="relative flex h-screen max-h-screen w-full flex-col justify-between">
            <Settings />
            <Header />
            <div className="flex w-full flex-grow flex-col items-center justify-between bg-black p-10">
                {children}
            </div>
            <Footer />
        </div>
    );
}
