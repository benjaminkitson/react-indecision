import React, { useContext } from "react";
import RandomContext from "../../../contexts/random";
import Button from "../Button";

export default function AddOption() {
    const { addOption } = useContext(RandomContext);

    const add = (e) => {
        e.preventDefault();
        const option = e.target.option.value.trim();
        addOption(option);
        e.target.option.value = "";
    };

    return (
        <>
            <form onSubmit={(e) => add(e)} className="mb-5 flex items-center">
                <input
                    className="mr-5 h-10 w-80 rounded-md p-2"
                    type="text"
                    name="option"
                ></input>
                <Button className="h-12 w-32 text-2xl text-white" colour="blue">
                    Add
                </Button>
            </form>
        </>
    );
}
