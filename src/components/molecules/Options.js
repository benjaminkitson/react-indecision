import React from "react";
import Option from "../atoms/Option";

export default function Options({ options, resetOptions, selected }) {
    return (
        <div className="flex w-full flex-grow flex-col items-center justify-between bg-blue-500 p-10">
            <div className="mb-5 flex w-5/6 flex-grow flex-col items-center justify-center rounded-xl bg-blue-400 p-10">
                <ol className="flex h-full w-full flex-col items-center">
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
            <div className="h-20">
                {selected && (
                    <h1 className="text-4xl text-white">{selected}</h1>
                )}
            </div>
        </div>
    );
}
