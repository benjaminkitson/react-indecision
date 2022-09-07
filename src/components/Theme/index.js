import React from "react";
import Header from "../Header";
import Footer from "../Footer";

export default function Theme({ children }) {
    return (
        <div className="flex h-screen max-h-screen w-full flex-col justify-between">
            <Header />
            <div className="flex w-full flex-grow flex-col items-center justify-between bg-black p-10">
                {children}
            </div>
            <Footer />
        </div>
    );
}
