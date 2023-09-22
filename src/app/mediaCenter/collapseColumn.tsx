"use client"

import { useState, useCallback } from "react";
import generateContentUI from "./generateContentUI";
import MediaHeader from "./mediaHeader";
type MeidaHeaderProps = {
    date: string,
    mainTitle: string,
    content?: string,
    image?: string
}
const listData: MeidaHeaderProps[] = [
    {
        date: '28 November 2022',
        mainTitle: 'The style comfort: lout our remote shopping ambassador shop for you!',
        content: "Join K11 MUSEA’s curation of docent-led tours to embark on a journey of imagination! Explore the elements of art, nature, architecture, and more that cement K11 MUSEA as Hong Kong’s cultural-retail landmark.",
        image: "https://media.k11.com/images/mall_event_images/image/17864.large.jpg?1694404109"
    },
    {
        date: '28 November 2022',
        mainTitle: 'The style comfort: lout our remote shopping ambassador shop for you!',
        content: "Join K11 MUSEA’s curation of docent-led tours to embark on a journey of imagination! Explore the elements of art, nature, architecture, and more that cement K11 MUSEA as Hong Kong’s cultural-retail landmark.",
        image: "https://media.k11.com/images/mall_event_images/image/17864.large.jpg?1694404109"
    },
    {
        date: '28 November 2022',
        mainTitle: 'The style comfort: lout our remote shopping ambassador shop for you!',
        content: "Join K11 MUSEA’s curation of docent-led tours to embark on a journey of imagination! Explore the elements of art, nature, architecture, and more that cement K11 MUSEA as Hong Kong’s cultural-retail landmark.",
        image: "https://media.k11.com/images/mall_event_images/image/17864.large.jpg?1694404109"
    },
    {
        date: '28 November 2022',
        mainTitle: 'The style comfort: lout our remote shopping ambassador shop for you!',
        content: "Join K11 MUSEA’s curation of docent-led tours to embark on a journey of imagination! Explore the elements of art, nature, architecture, and more that cement K11 MUSEA as Hong Kong’s cultural-retail landmark.",
        image: "https://media.k11.com/images/mall_event_images/image/17864.large.jpg?1694404109"
    },
    {
        date: '28 November 2022',
        mainTitle: 'The style comfort: lout our remote shopping ambassador shop for you!',
        content: "Join K11 MUSEA’s curation of docent-led tours to embark on a journey of imagination! Explore the elements of art, nature, architecture, and more that cement K11 MUSEA as Hong Kong’s cultural-retail landmark.",
        image: "https://media.k11.com/images/mall_event_images/image/17864.large.jpg?1694404109"
    },
    {
        date: '28 November 2022',
        mainTitle: 'The style comfort: lout our remote shopping ambassador shop for you!',
        content: "Join K11 MUSEA’s curation of docent-led tours to embark on a journey of imagination! Explore the elements of art, nature, architecture, and more that cement K11 MUSEA as Hong Kong’s cultural-retail landmark.",
        image: "https://media.k11.com/images/mall_event_images/image/17864.large.jpg?1694404109"
    },
    {
        date: '28 November 2022',
        mainTitle: 'The style comfort: lout our remote shopping ambassador shop for you!',
        content: "Join K11 MUSEA’s curation of docent-led tours to embark on a journey of imagination! Explore the elements of art, nature, architecture, and more that cement K11 MUSEA as Hong Kong’s cultural-retail landmark.",
        image: "https://media.k11.com/images/mall_event_images/image/17864.large.jpg?1694404109"
    },
    {
        date: '28 November 2022',
        mainTitle: 'The style comfort: lout our remote shopping ambassador shop for you!',
        content: "Join K11 MUSEA’s curation of docent-led tours to embark on a journey of imagination! Explore the elements of art, nature, architecture, and more that cement K11 MUSEA as Hong Kong’s cultural-retail landmark.",
        image: "https://media.k11.com/images/mall_event_images/image/17864.large.jpg?1694404109"
    }
]

const  CollapseColumn = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    return (
        <>
           {
             listData && listData.map((item, index) => {
                return <div onClick={() => setCurrentIndex(index)} className="border-b">
                    <div className={`${currentIndex === index ? 'hidden' : 'block'}`}>
                        <MediaHeader date={item.date} mainTitle={item.mainTitle} />
                    </div>
                    {
                        (currentIndex === index) && generateContentUI(item)
                    }
                </div>
            })
           }
        </>
    )
}

export default CollapseColumn;