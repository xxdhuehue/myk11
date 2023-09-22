"use client"

import { useState, useEffect, type MouseEventHandler } from "react";
type CheckProps = {
    name: string,
    disabled?: boolean
}

type CheckBoxListProps = {
    listData: CheckProps[],
    defaultIndex?: number,
    onChange?: (e: any) => void;
};

const CheckBoxList =(props: CheckBoxListProps) => {
    const { listData, defaultIndex, onChange } = props;

    const [ currentIndex, setCurrentIndex] = useState<number>(0);

    const onValueChange = (item: CheckProps, index: number) => {
        if (item.disabled) return;
        setCurrentIndex(index)
        onChange && onChange(index)
    }

    useEffect(() => {
        if (defaultIndex) setCurrentIndex(defaultIndex);
    }, [])

    return (
        listData.length && listData.map((item, index) => {
            return <div key={index} className="uppercase flex items-center" >
                <span onClick={(e: MouseEventHandler<HTMLDivElement>) =>  onValueChange(item, index)} 
                    className={`inline-block w-4 h-4 border rounded-full border-2  mr-1.5 
                        ${index === currentIndex ? 'bg-amber-900 border-amber-900' : ' border-gray-300' }
                        ${item.disabled ? 'bg-gray-200 border-gray-200  cursor-not-allowed': 'cursor-pointer'}
                    `
                }></span>
                <span>{item.name}</span>
            </div>
        })
    )
}

export default CheckBoxList;