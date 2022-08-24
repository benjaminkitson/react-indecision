import React from "react";
import Option from "../../atoms/Option";
import Button from "../../atoms/Button";
import AddOption from "../../atoms/AddOption";

export default function Options({ options, resetOptions, selected }) {
    return (
        <div className="flex w-full flex-grow flex-col items-center justify-between bg-black p-10">
            <div className="mb-5 flex w-5/6 flex-grow flex-col items-center justify-center rounded-xl bg-blue-400 bg-opacity-50 p-10">
                <ol className="flex h-full w-full flex-col items-center">
                    {options.map((option, index) => (
                        <Option key={index} option={option} index={index} />
                    ))}
                </ol>
            </div>
            <div className="flex h-20 items-center justify-center">
                {selected && (
                    <h1 className="text-4xl text-white">{selected}</h1>
                )}
            </div>
            <div className="mt-5 flex justify-center">
                <AddOption />
                <Button
                    className="h-12 w-32 text-2xl text-white"
                    colour="grey"
                    onClick={resetOptions}
                >
                    Reset
                </Button>
            </div>
        </div>
    );
}
