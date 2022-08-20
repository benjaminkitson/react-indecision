import React from "react";

function AddOption(props) {
    const addOption = (e) => {
        e.preventDefault();
        const option = e.target.option.value.trim();
        props.addOption(option);
        e.target.option.value = "";
    };

    return (
        <form onSubmit={addOption} className="add-option">
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
