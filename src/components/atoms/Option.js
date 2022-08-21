import React, { useContext } from "react";
import RandomContext from "../../contexts/random";

function Option({ option }) {
    const { deleteOption } = useContext(RandomContext);

    return (
        <li className="flex h-10 w-2/3 justify-center">
            <div className="mr-4 flex h-full w-2/3 items-center rounded-md bg-white pl-4">
                {option}
            </div>
            <button
                className="h-full w-10 rounded-md bg-blue-800"
                onClick={() => deleteOption(option)}
            >
                ✕
            </button>
        </li>
    );
}

export default Option;
