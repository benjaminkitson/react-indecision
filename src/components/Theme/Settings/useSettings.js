import { useState } from "react";

const useSettings = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openSettings = () => {
        setIsOpen(true);
    };

    const closeSettings = () => {
        setIsOpen(false);
    };

    const isClosed = !isOpen;

    return { isOpen, isClosed, openSettings, closeSettings };
};

export default useSettings;
