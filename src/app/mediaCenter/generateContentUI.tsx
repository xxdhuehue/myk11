"use client"

import { useState, useCallback } from "react";
import Image from "next/image";

type MeidaHeaderProps = {
    date: string,
    mainTitle: string,
    content?: string,
    image?: string
}
function GenerateContentUI(props: MeidaHeaderProps) {
    const { date, mainTitle, content, image } = props;
    return (
            <div className="flex bg-gray-200 p-8">
                <section className="w-2/5 pr-4">
                    <p className="text-sm">{date}</p>
                    <p className="text-3xl mb-6 mt-6">{mainTitle}</p>
                    <p>{content}</p>
                    <div className="flex mt-4">
                        <div className="k11_rounded_box text-sm mr-1.5">LEARN MORE</div>
                        <div className="k11_rounded_box">DOWNLOAD</div>
                    </div>
                </section>
                <section className="relative w-3/5 h-80">
                    {
                        image &&<Image src={image} fill alt="" objectFit="cover"  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"/>
                    }
                </section>
            </div>
        )
    
}

export default GenerateContentUI;