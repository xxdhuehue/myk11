"use client"

import BrandStoryLayout  from "./BrandStoryLayout";
import Slide from "../components/slide";
import CurrentIndexContextProvider from "../components/slide/context";
import BrandStoryDetailItem from "./BrandStoryDetailItem";
import Image from "next/image";
import { useRef } from "react";


// props: BrandStoryProps
const BrandStory = () => {
    const test = (index: number) => {
        console.log("receiving child parameter", index)
    }
    const prevButtonRef = useRef<any>(null);
    const nextButtonRef = useRef<any>(null);
    return (
        <div className="flex flex-col justify-center">
            <BrandStoryLayout />
            
            {/* <div>
                <div className="flex justify-center items-center h-24 mt-16 text-2xl">HIGHTLIGHT</div>
                <div>
                    <div onClick={() => prevButtonRef.current.slideRight()} className="absolute top-2/4 z-50 right-0 cursor-pointer">
                        <Image src="/icons/arrow-right-dark.svg" width={22} height={22} alt="" />
                    </div>
                    <div onClick={() => nextButtonRef.current.slideLeft()} className="absolute top-2/4 z-30 left-0 cursor-pointer">
                        <Image src="/icons/arrow-left-dark.svg" width={22} height={22} alt="" />
                    </div>
                    <CurrentIndexContextProvider>
                        <Slide 
                            containerHeight={"82.8vh"} 
                            containerWidth={"100vw"} 
                            hasPagination={true}
                            prevButtonRef={prevButtonRef}
                            nextButtonRef={nextButtonRef}
                            paginationPositionClassName={"absolute bottom-6 right-[24%]"}>
                                <BrandStoryDetailItem  />
                                <BrandStoryDetailItem  />
                                <BrandStoryDetailItem  />
                                <BrandStoryDetailItem  />
                                <BrandStoryDetailItem  />
                        </Slide>
                    </CurrentIndexContextProvider>
                </div>
                
            </div> */}
        </div>
    )
}

export default BrandStory;