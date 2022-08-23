import React from "react";
import Option from "../atoms/Option";
import Button from "../atoms/Button";

export default function Options({ options, resetOptions, selected }) {
    return (
        <div className="flex w-full flex-grow flex-col items-center justify-between bg-white p-10">
            <div className="mb-5 flex w-5/6 flex-grow flex-col items-center justify-center rounded-xl bg-blue-400 bg-opacity-50 p-10">
                <ol className="flex h-full w-full flex-col items-center">
                    {options.map((option) => (
                        <Option key={option} option={option} />
                    ))}
                </ol>
            </div>
            <Button className="w-32 p-4 text-xl text-white" colour="blue">
                Reset
            </Button>
            <div className="flex h-20 items-end justify-center">
                {selected && (
                    <h1 className="text-4xl text-white">{selected}</h1>
                )}
            </div>
        </div>
    );
}
