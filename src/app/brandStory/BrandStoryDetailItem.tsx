"use client"

import { BrandStoryDetailItemProps } from "./brand-story.types";
import Image from 'next/image';


const BrandStoryDetailItem = () => {
    
 
 
    return (
        <div className="flex h-full w-full">
            <div className="w-2/4 relative">
            <Image priority objectFit="cover" fill sizes="50vw" src={"https://media.k11.com/images/general_promotion_banners/image_1440x640/141.original.jpg?1597851900"} alt="k11"></Image>
            </div>
            <div className="flex flex-col justify-between items-center w-2/4 pl-20 pr-20 bg-stone-300 pb-12">
                <section>
                    <h4 className="text-grey-900 mb-8 pt-20 uppercase text-center ">K11 ART foundation</h4>
                    <div className="px-6 h-2/4 leading-relaxed">
                        <p className="text-5xl text-gray-600">Join K11 MUSEA’s curation of docent-led tours to embark on </p>
                        <p className="text-5xl">a journey of imagination! Explore the elements of art, nature, architecture.</p>
                    </div>
                </section>
                <section className="flex flex-col justify-between items-center ">
                    <div className="k11_rounded_box">LEARN MORE</div>
                </section>
            </div>
        </div>
    )
}

export default BrandStoryDetailItem;