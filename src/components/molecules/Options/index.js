import React from "react";
import Option from "../../atoms/Option";
import Button from "../../atoms/Button";
import AddOption from "../../atoms/AddOption";
import { useContext } from "react";
import MainContext from "../../../contexts/Main";
import RandomContext from "../../../contexts/Random";

export default function Options() {
    const { options, resetOptions } = useContext(MainContext);
    const { selectedIndex } = useContext(RandomContext);

    console.log(options, selectedIndex);

    return (
        <>
            <div className="mb-5 flex w-5/6 flex-grow flex-col items-center justify-center rounded-xl bg-blue-400 bg-opacity-50 p-10">
                <ol className="flex h-full w-full flex-col items-center">
                    {options.map((option, index) => (
                        <Option key={index} option={option} index={index} />
                    ))}
                </ol>
            </div>
            <div className="flex h-20 items-center justify-center">
                {!!(selectedIndex + 1) && (
                    <h1 className="text-4xl text-white">
                        {options[selectedIndex]}
                    </h1>
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
        </>
    );
}
