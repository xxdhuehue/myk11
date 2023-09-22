import React from 'react'
import { useCurrentIndexContext } from "./context";

const Pagination = ({pageNumber}: {pageNumber: number}) => {
    const context = useCurrentIndexContext();
    const { currentIndex, setCurrentIndex } = context;
    return (
    
            <div className="flex">
                {
                    new Array(pageNumber).fill(1).map((item, index) => {
                        return <div 
                            className={`w-2 h-2 rounded-full ml-0.5 cursor-pointer ${currentIndex === index ? "bg-gray-200": "bg-gray-400"}`} 
                            key={index} 
                            onClick={()=> {setCurrentIndex(index)}}>
                        </div>
                    })
                }
            </div>
        
    )
}

export default Pagination;

 