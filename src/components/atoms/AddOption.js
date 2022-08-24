import React from "react";
import Button from "./Button";

function AddOption({ addOption }) {
    const add = (e) => {
        e.preventDefault();
        const option = e.target.option.value.trim();
        addOption(option);
        e.target.option.value = "";
    };

    return (
        <>
            <form onSubmit={add} className="mb-5 flex items-center">
                <input
                    className="mr-5 h-10 w-80 rounded-md p-2"
                    type="text"
                    name="option"
                ></input>
                <Button className="h-12 w-32 text-2xl text-white" colour="blue">
                    Add
                </Button>
            </form>
        </>
    );
}

export default AddOption;
