import React, { useContext } from "react";
import Option from "../atoms/Option";
import RandomContext from "../../contexts/random";

export default function Options({ options, resetOptions }) {
    return (
        <>
            <div className="flex flex-col items-center justify-center p-10">
                <ol>
                    {options.map((option) => (
                        <Option key={option} option={option} />
                    ))}
                </ol>
            </div>
            <button className="reset-button button" onClick={resetOptions}>
                Reset
            </button>
        </>
    );
}
