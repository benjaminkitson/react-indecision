import React from "react";

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
                <button className="h-12 w-32 rounded-md bg-blue-800 text-2xl text-white">
                    Add
                </button>
            </form>
        </>
    );
}

export default AddOption;
