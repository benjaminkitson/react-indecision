import React from "react";
import Option from "../atoms/Option";

export default function Options({ options, resetOptions, selected }) {
    return (
        <div className="flex w-full flex-grow flex-col items-center justify-center bg-blue-400">
            <div className="mb-5 flex h-[500px] w-5/6 flex-col items-center justify-center bg-blue-500 p-10">
                <ol className="flex w-full justify-center">
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
            <div className="h-10">{selected && <h1>{selected}</h1>}</div>
        </div>
    );
}
