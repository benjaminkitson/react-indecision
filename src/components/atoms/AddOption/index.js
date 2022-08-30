import React, { useContext, useState } from "react";
import RandomContext from "../../../contexts/random";
import Button from "../Button";

export default function AddOption() {
    const { addOption } = useContext(RandomContext);

    const [toAdd, setToAdd] = useState("";)

    const add = (e) => {
        e.preventDefault();
        addOption(toAdd);
       setToAdd("")
    };

    return (
        <>
            <form onSubmit={(e) => add(e)} className="mb-5 flex items-center">
                <input
                    className="h-10 w-80 rounded-md p-2"
                    type="text"
                    name="option"
                    value={toAdd}
                    onChange={(e) => setToAdd(e.target.value)}
                ></input>
                <Button
                    className="mx-5 h-12 w-32 text-2xl text-white"
                    colour="blue"
                >
                    Add
                </Button>
            </form>
        </>
    );
}
