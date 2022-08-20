import React from "react";

function AddOption({ addOption }) {
    const add = (e) => {
        e.preventDefault();
        const option = e.target.option.value.trim();
        addOption(option);
        e.target.option.value = "";
    };

    return (
        <form onSubmit={add} className="add-option">
            <input
                className="add-option__input"
                type="text"
                name="option"
            ></input>
            <button className="button">Add</button>
        </form>
    );
}

export default AddOption;
