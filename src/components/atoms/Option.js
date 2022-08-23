import React, { useContext } from "react";
import RandomContext from "../../contexts/random";
import { GrClose, GrEdit } from "react-icons/gr";

import Button from "./Button";

function Option({ option }) {
    const { deleteOption } = useContext(RandomContext);

    return (
        <li className="mb-3 flex h-10 w-2/3 justify-center">
            <div className="group mr-4 flex h-full w-2/3 items-center justify-between rounded-md bg-white px-4">
                {option}
                <div className="flex">
                    <Button className="h-6 w-6" colour="blue" groupHidden>
                        <GrEdit />
                    </Button>
                    <Button className="ml-3 h-6 w-6" colour="grey" groupHidden>
                        <GrClose />
                    </Button>
                </div>
            </div>
        </li>
    );
}

export default Option;
