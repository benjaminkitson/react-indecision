import React, { useContext, useState } from "react";
import RandomContext from "../../../contexts/random";
import { GrClose, GrEdit } from "react-icons/gr";

import Button from "../Button";

function Option({ option, index }) {
    const { deleteOption, editOption } = useContext(RandomContext);

    const [isEditing, setIsEditing] = useState(false);

    const [toUpdate, setToUpdate] = useState(option);

    const edit = (e, index) => {
        e.preventDefault();
        const option = toUpdate.trim();
        editOption(option, index);
        setIsEditing(false);
    };

    const destroy = (e, index) => {
        e.preventDefault();
        deleteOption(index);
    };

    return (
        <li className="mb-3 flex h-10 w-2/3 justify-center">
            <div className="group mr-4 h-full w-2/3 rounded-md bg-white">
                {isEditing ? (
                    <form
                        className={"h-full w-full rounded-md"}
                        onSubmit={(e) => edit(e, index)}
                    >
                        <input
                            className={"h-full w-full rounded-md px-4"}
                            type="text"
                            name="option"
                            value={toUpdate}
                            onChange={(e) => setToUpdate(e.target.value)}
                        ></input>
                    </form> // input will go here
                ) : (
                    <>
                        <div className="flex h-full w-full items-center justify-between rounded-md px-4">
                            <span>{option}</span>
                            <div className="flex">
                                <Button
                                    className="h-6 w-6"
                                    colour="blue"
                                    groupHidden
                                    onClick={() => setIsEditing(true)}
                                >
                                    <GrEdit />
                                </Button>
                                <Button
                                    className="ml-3 h-6 w-6"
                                    colour="grey"
                                    groupHidden
                                    onClick={(e) => destroy(e, index)}
                                >
                                    <GrClose />
                                </Button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </li>
    );
}

export default Option;
