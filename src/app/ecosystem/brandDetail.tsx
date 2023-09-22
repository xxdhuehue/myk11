"use client"
import React from 'react'
import Slide from '../components/slide';
import CurrentIndexContextProvider from '../components/slide/context';
import Image from "next/image";
import Pagination from '../components/slide/pagination';
import { useRef } from "react";

type BrandDetailProps = {
    title: string,
    address?: string,
    email?: string,
    description?: string,
    images: string[],
    locatons: string[]
}

const BrandDetail = (props: BrandDetailProps) => {
    const { title, address, email,  description, images, locatons} = props;
    const prevButtonRef = useRef<any>(null);
    const nextButtonRef = useRef<any>(null);

    const changeLocation = (location: string) => {
        console.log("location", location)
    }
    const createIamgeNodes = () => {
        if (!images) return [];
        return images.map((src, index) => {
            return <div className="relative w-full h-full " key={index}>
                <Image src={src} alt="" fill style={{width: "100%"}} sizes="33vw"  objectFit="cover"></Image>
            </div>
        })
    }

    const createLocationBar = () => {
        return locatons.map(item => {
            return <div className="k11_vertical_center h-full  border-r" onClick={() => {changeLocation(item)}}>{item}</div>
        })
    }
  return (
    <div className=' bg-white w-full'>
        <div className="k11_horizontal_center h-12 border-b">
            <div className="w-8 cursor-pointer border-r h-full k11_horizontal_center" onClick={() => nextButtonRef.current.slideLeft()} >
                <Image src="/icons/arrow-left-dark.svg" width={22} height={22} alt="" />
            </div>

            <section className='w-11/12 h-full'>
                <CurrentIndexContextProvider>
                    <Slide
                        isChildrenFullExpand={false}
                        prevButtonRef={prevButtonRef}
                        nextButtonRef={nextButtonRef}
                    >
                        {createLocationBar()}
                    </Slide>
                </CurrentIndexContextProvider>
            </section>
           
            <div onClick={() => prevButtonRef.current.slideRight()} className="w-8 cursor-pointer k11_horizontal_center">
                <Image src="/icons/arrow-right-dark.svg" width={22} height={22} alt="" />
            </div>
        </div>
       <div className="flex px-12 py-6">
            <section className="w-2/5 pr-8">
                <h3 className="text-4xl mb-4 pb-6 border-b">{title}</h3>
                <div className="border-b pb-6 mb-6">
                    <section>
                        <p className="text-xs my-2">Address: </p>
                        <p className="text-12">{address}</p>
                    </section>
                    <section>
                        <p className="text-xs my-2">Email: </p>
                        <p>{email}</p>
                    </section>
                </div>
                <div className='mb-8 max-h-60 overflow-hidden'>{description}</div>
                <div className="k11_rounded_box text-sm mr-1.5 w-32">LEARN MORE</div>
            </section>
            <section className="w-3/5 relative">
                <CurrentIndexContextProvider>
                    <Slide 
                        hasPagination={true}
                        prevButtonRef={null}
                        nextButtonRef={null}
                        paginationPositionClassName={"absolute bottom-[-10px] z-50 left-0"}
                    >
                            {createIamgeNodes()}
                    </Slide>
                    <div className="mt-2 pl-4">
                        <Pagination  pageNumber={images.length} />                   
                    </div>
                </CurrentIndexContextProvider>
            </section>
       </div>
    </div>
  )
}

export default BrandDetail