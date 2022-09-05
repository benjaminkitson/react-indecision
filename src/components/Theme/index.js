import React from "react";
import Header from "../Header";

export default function Theme({ children }) {
    return (
        <div className="flex h-screen max-h-screen w-full flex-col justify-between">
            <Header />
            {children}
        </div>
    );
}
