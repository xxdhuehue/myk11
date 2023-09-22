"use client"
import CheckBoxList from "../components/checkBoxList";
import Dropdown from "../components/dropdown";
import Image from "next/image";
import { useState } from "react";
import BrandDetail from "./brandDetail";
import dynamic from "next/dynamic";
import Modal from "../components/Modal"

// const Modal = dynamic(() => import("../components/Modal"))
const list = [
    {
        title: 'PROPERTY',
        content: 'Step onto L8 and let nature be your classroom. A journey of native biodiversity, this herbarium slash sustainability edutainment garden is a haven for urbanites to reconnect with nature.',
        src: "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg"
    },
    {
        title: 'UNIQURLY K11',
        content: 'Step onto L8 and let nature be your classroom. A journey of native biodiversity, this herbarium slash sustainability edutainment garden is a haven for urbanites to reconnect with nature.',
        src: "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg"
    }
]
type CheckProps = {
    name: string,
    disabled?: boolean
}

type DropdownListItem = {
    label: string,
    value: string
}

type BrandDetailProps = {
    title: string,
    address?: string,
    email?: string,
    description?: string,
    images?: string[],
    locatons: string[]
}

const categroyList: CheckProps[] = [
    {name: "all" }, {name: "cultural retail"}, {name: "workplace"}, {name: "hospitality"}, {name: "residence"}, {name: "recreation"}, {name: "entertaiment"}
]

const dropdownData: DropdownListItem[] = [
    {
        label: "Hong Kong",
        value: "Hong Kong"
    },
    {
        label: "Hong Kong",
        value: "Hong Kong"
    },
    {
        label: "Hong Kong",
        value: "Hong Kong"
    },
    {
        label: "Hong Kong",
        value: "Hong Kong"
    },
    {
        label: "Hong Kong",
        value: "Hong Kong"
    },
    {
        label: "Hong Kong",
        value: "Hong Kong"
    }
]

const brandStoryDetailList: BrandDetailProps[] = [
    {
        title: "What's happening",
        address: "Welcome to the sparklin",
        email: " new global Cultural-Retail",
        description: "Welcome to the sparkling new global Cultural-Retail destination — K11 MUSEA. With a name inspired by the Muses in Greek mythology, K11 MUSEA aspires to enrich your daily life through the power of creativity, culture and innovation. Located in the heart of the Victoria Dockside art and cultural district",
        images: ["https://images.k11musea.com/media/1516/ndp-tour.jpg", "https://images.k11musea.com/media/1516/ndp-tour.jpg", "https://images.k11musea.com/media/1516/ndp-tour.jpg"],
        locatons: ["KONG KONG", "GUANGZHOU", "SHANGHAI", "WUHAN", "CHENGDU"]
    }
]
const Ecosystem = () => {
    const [opened, setOpened] = useState<boolean>(false);
    const test = (index: number) => {
        console.log("xxxx", index)
        
    }
    return (
        <div className="pt-20">
            <Modal opened={opened} onClose={() => {setOpened(false)}}>
                <div className="w-1/2">
                    <BrandDetail {...brandStoryDetailList[0]}/>
                </div>
            </Modal>
            <div className="h-16 border-b text-3xl text-center">PROPERTY</div>
            <div className="flex justify-between border-b h-16">
                <div className="flex justify-between items-center px-4 w-11/12">
                    <CheckBoxList listData={categroyList} onChange={test} />
                </div>
                <div className="w-32">
                    <Dropdown listData={dropdownData}/>
                </div>
            </div>
            <div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7">
                    {
                        new Array(20).fill(1).map( 
                            (item) => {
                                return <div onClick={() => setOpened(true)} className="relative w-full h-64 border-r border-b fill-cyan-600 k11_vertical_center k11_hover">
                                    <Image style={{width: '50%'}} src="https://images.k11musea.com/media/1318/logo.svg" width={200} height={200} alt=""  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                                </div>
                             }
                        )
                    }
                </div> 
            </div>
        </div>
    )
}

export default Ecosystem;


{/* // <div className="mt-16"> */}
        {/*     {
        //         list.map(item => {
        //             return <div className="flex h-80">
        //                 <div className="w-1/2 relative border-b p-5 flex flex-col justify-between">
        //                     <div className="absolute top-10 right-10">v</div>
        //                     <h1 className="text-4xl">{item.title}</h1>
        //                     <p className="text-sm">{item.content}</p>
        //                 </div>
        //                 <div className="w-1/2 overflow-hidden object-cover">
        //                     <img  src={item.src} />
        //                 </div>
        //             </div>
        //         })
        //     }
        // </div> */}