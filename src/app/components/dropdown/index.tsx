"use client"
import { useRef, useEffect, useState} from "react";

type DropdownListItem = {
    label: string,
    value: string
}
type DropdownProps = {
    listData: DropdownListItem[],
    defaultIndex?: number,
    onChange?: (data: DropdownListItem) => void
}

const Dropdown = (props: DropdownProps) => {
    const { listData, defaultIndex, onChange } = props;
    const parentRef = useRef<HTMLElement | null>(null);
    const [topValue, setTopValue] = useState<number>(0);
    const [open, setOpen] = useState<boolean>(false);
    const [currentSelectedItem, setCurrentSelectedItem] = useState<DropdownListItem>()

    const emitValue = (data: DropdownListItem) => {
        setCurrentSelectedItem(data);
        onChange && onChange(data);
    }

    useEffect(() => {
        if (parentRef && parentRef.current?.offsetHeight) {
            setTopValue(parentRef.current?.offsetHeight);
        }
        if (defaultIndex) {
            setCurrentSelectedItem(listData[defaultIndex])
        } else {
            setCurrentSelectedItem(listData[0])
        }
    }, [])

    return (
        <div ref={parentRef} className="relative w-full h-full">
            <div onClick={() => setOpen(v => !v)} className="h-full w-full k11_vertical_center cursor-pointer">{currentSelectedItem && currentSelectedItem.label}</div>
            <div className="absolute z-50 bg-white w-full transition-height transition ease-in-out duration-500 cursor-pointer overflow-hidden" style={{top: `${topValue}px`, height: open ? 'auto' : '0px'}}>
                <ul className="flex flex-col border">
                    {
                        listData && listData.map((item, index) => {
                            return <li onClick={() => { emitValue(item)} } className="h-14 w-full flex justify-center items-center border-b k11_hover" key={index}>
                                <span>{item.label}</span>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Dropdown;