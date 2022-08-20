import React, { useContext } from "react";
import RandomContext from "../../contexts/random";

function Option({ option }) {
    const { deleteOption } = useContext(RandomContext);

    return (
        <li className="option">
            {option}
            <button
                className="button delete--button"
                onClick={() => deleteOption(option)}
            >
                ✕
            </button>
        </li>
    );
}

export default Option;
