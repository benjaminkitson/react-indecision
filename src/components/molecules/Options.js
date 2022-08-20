import React, { useContext } from "react";
import Option from "../atoms/Option";
import RandomContext from "../../contexts/random";

export default function Options({ options, resetOptions }) {
    return (
        <div className="flex h-[700px] w-full flex-col items-center justify-center bg-blue-400">
            <div className="mb-5 flex h-[500px] w-5/6 flex-col items-center justify-center bg-blue-500 p-10">
                <ol>
                    {options.map((option) => (
                        <Option key={option} option={option} />
                    ))}
                </ol>
            </div>
            <button
                className="w-32 rounded-md bg-blue-800 p-4 text-xl text-white"
                onClick={resetOptions}
            >
                Reset
            </button>
        </div>
    );
}
