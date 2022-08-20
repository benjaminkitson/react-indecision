import React, { useContext } from "react";
import RandomContext from "../contexts/random";

function Option(props) {
    const { deleteOption } = useContext(RandomContext);

    console.log(deleteOption);

    return (
        <li className="option">
            {props.option}
            <button
                className="button delete--button"
                onClick={() => deleteOption(props.option)}
            >
                ✕
            </button>
        </li>
    );
}

export default Option;
