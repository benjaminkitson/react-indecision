import React, { useContext } from "react";
import RandomContext from "../../contexts/random";
import { GrClose, GrEdit } from "react-icons/gr";

function Option({ option }) {
    const { deleteOption } = useContext(RandomContext);

    return (
        <li className="mb-3 flex h-10 w-2/3 justify-center">
            <div className="group mr-4 flex h-full w-2/3 items-center justify-between rounded-md bg-white px-4">
                {option}
                <div className="flex">
                    <button className="hidden h-6 w-6 items-center justify-center rounded-md bg-blue-600 hover:bg-blue-700 active:bg-blue-800 group-hover:flex">
                        <GrEdit />
                    </button>
                    <button
                        className="ml-3 hidden h-6 w-6 items-center justify-center rounded-md bg-gray-400 hover:bg-gray-500 active:bg-gray-600 group-hover:flex"
                        onClick={() => deleteOption(option)}
                    >
                        <GrClose />
                    </button>
                </div>
            </div>
        </li>
    );
}

export default Option;
