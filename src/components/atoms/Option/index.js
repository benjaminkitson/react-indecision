import React, { useContext, useState } from "react";
import RandomContext from "../../../contexts/random";
import { GrClose, GrEdit } from "react-icons/gr";
import TextInput from "../TextInput";

import Button from "../Button";

function Option({ option, index }) {
    const { deleteOption, editOption } = useContext(RandomContext);

    const [isEditing, setIsEditing] = useState(false);

    const [toUpdate, setToUpdate] = useState(option);

    const [isInvalid, setIsInvalid] = useState(false);

    const edit = (e, index) => {
        e.preventDefault();
        const option = toUpdate.trim();
        if (option.length < 1) {
            setIsInvalid(true);
        } else {
            setIsInvalid(false);
            editOption(option, index);
            setIsEditing(false);
        }
    };

    const destroy = (e, index) => {
        e.preventDefault();
        deleteOption(index);
    };

    return (
        <li className="mb-3 flex h-10 w-2/3 justify-center">
            <div className="group h-full w-2/3 rounded-md bg-white">
                <form
                    className="relative h-full w-full rounded-md"
                    onSubmit={(e) => edit(e, index)}
                >
                    {isEditing ? (
                        <TextInput
                            className="h-full w-full rounded-md px-4"
                            name="option"
                            value={toUpdate}
                            onChange={(e) => setToUpdate(e.target.value)}
                        />
                    ) : (
                        // Change this to disabled input
                        <p className="flex h-full w-full items-center rounded-md px-4">
                            {option}
                            <div className="absolute right-0 top-0 z-10 mr-4 flex h-full w-1/4 items-center justify-center">
                                <Button
                                    className="h-6 w-6"
                                    colour="blue"
                                    groupHidden
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setIsEditing(true);
                                    }}
                                >
                                    <GrEdit />
                                </Button>
                                <Button
                                    className="ml-3 h-6 w-6"
                                    colour="grey"
                                    groupHidden
                                    onClick={(e) => {
                                        e.preventDefault();
                                        destroy(e, index);
                                    }}
                                >
                                    <GrClose />
                                </Button>
                            </div>
                        </p>
                    )}
                </form>
            </div>
        </li>
    );
}

export default Option;
