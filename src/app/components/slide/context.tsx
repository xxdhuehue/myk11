"use client"

import React, { createContext, useContext, useState } from "react";

type CurrentIndexProps = {
    slidesCount: number;
    setSlidesCount: React.Dispatch<React.SetStateAction<number>>;
    currentIndex: number;
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>
}
export const CurrentIndexContext = createContext<CurrentIndexProps | null>(null);

export default function CurrentIndexContextProvider({children}) {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [slidesCount, setSlidesCount] = useState<number>(0);

    return (
        <CurrentIndexContext.Provider value={{currentIndex, setCurrentIndex, slidesCount, setSlidesCount}}>{children}</CurrentIndexContext.Provider>
    )
}

export const useCurrentIndexContext = ()=> {
    const context = useContext(CurrentIndexContext);
    if (!context) {
        throw new Error("there is no context, please provide a context")
    }
    return context;
}