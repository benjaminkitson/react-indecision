import React, { useContext } from "react";
import RandomContext from "../../contexts/random";
import { GrClose } from "react-icons/gr";

function Option({ option }) {
    const { deleteOption } = useContext(RandomContext);

    return (
        <li className="mb-3 flex h-10 w-2/3 justify-center">
            <div className="group mr-4 flex h-full w-2/3 items-center justify-between rounded-md bg-white px-4">
                {option}
                <button
                    className="hidden h-6 w-6 items-center justify-center rounded-md bg-blue-600 hover:bg-blue-700 active:bg-blue-800 group-hover:flex"
                    onClick={() => deleteOption(option)}
                >
                    <GrClose />
                </button>
            </div>
        </li>
    );
}

export default Option;
