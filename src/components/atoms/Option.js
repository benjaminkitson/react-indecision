import React, { useContext } from "react";
import RandomContext from "../../contexts/random";

function Option({ option }) {
    const { deleteOption } = useContext(RandomContext);

    return (
        <li className="flex h-10 w-2/3 justify-center">
            <div className="group mr-4 flex h-full w-2/3 items-center justify-between rounded-md bg-white px-4">
                {option}
                <button
                    className="hidden h-6 w-6 rounded-md bg-blue-800 group-hover:block"
                    onClick={() => deleteOption(option)}
                >
                    ✕
                </button>
            </div>
        </li>
    );
}

export default Option;
