"use client"
import Slide from "../components/slide";
import CurrentIndexContextProvider from "../components/slide/context";
import TeamManagement from "./teamManagement"
import StyleOne from "./styleOne";
import Image from "next/image";
import {useState, useRef } from "react";

const AboutK11 = () => {
    const [column, setColumn] = useState<boolean>(false);
    const prevButtonRef = useRef<any>(null);
    const nextButtonRef = useRef<any>(null);

    return (
        <div className="mt-20">
            {/* <TeamManagement /> */}
            <div className="flex justify-between py-6 px-12">
                <div className="text-4xl text-gray-500"> ABOUT K11</div>
                <div className="flex">
                    <span className="mr-1.5 cursor-pointer" onClick={() => setColumn(v => !v)}>columns</span>
                    <span className="cursor-pointer" onClick={() => setColumn(v => !v)}>details</span>
                </div>
            </div>
            <div className="flex h-130">
                <section className="w-1/3 border-r">
                    <div className="h-full px-12 overflow-y-auto text-gray-500">
                        Welcome to the sparkling new global Cultural-Retail destination — K11 MUSEA.
                        With a name inspired by the Muses in Greek mythology, K11 MUSEA aspires to enrich 
                        your daily life through the power of creativity, culture and innovation. Located in
                        the heart of the Victoria Dockside art and cultural district, this world-class experiential 
                        landmark brings in immersive experiences in retail, art, culture, entertainment and gastronomy,
                        all under one roof.
                    </div>
                </section>
                <section className="w-2/3 pl-12">
                    
                    <div className="relative">
                        <div onClick={() => prevButtonRef.current.slideRight()} className="absolute top-2/4 z-30 right-0 cursor-pointer">
                            <Image src="/icons/arrow-right-dark.svg" width={22} height={22} alt="" />
                        </div>
                        <div onClick={() => nextButtonRef.current.slideLeft()} className="absolute top-2/4 z-30 left-[-40px] cursor-pointer">
                            <Image src="/icons/arrow-left-dark.svg" width={22} height={22} alt="" />
                        </div>
                        <div className="pr-10">
                            <CurrentIndexContextProvider>
                                <Slide
                                    isChildrenFullExpand={column} 
                                    hasPagination={false}
                                    sliceNumber={3}
                                    prevButtonRef={prevButtonRef}
                                    nextButtonRef={nextButtonRef}
                                >
                                    
                                    <StyleOne />
                                    <StyleOne />
                                    <StyleOne />
                                    <StyleOne />
                                    <StyleOne />
                                    <StyleOne />
                                    <StyleOne />
                                    <StyleOne  />
                                    <StyleOne />
                                    <StyleOne />
                                </Slide>
                            </CurrentIndexContextProvider>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default AboutK11;