"use client"

import React, { useEffect} from "react";
import PageScroller from "../fullpage-scroller/fullpage";
import HomePageBanner from "./homepageBanner";
im
const imageSrcs = [
  // {
  //   src: "https://images.k11musea.com/media/1489/brand-film-v22a.mp4",
  //   title: "A JOURNEY OF IMAGINATION",
  //   isVideo: true
  // },
  {
    src: "https://images.k11musea.com/media/1494/musea-interior.jpg",
    title: "A JOURNEY OF IMAGINATION",
    isVideo: false
  },
  {
    src: "https://images.k11musea.com/media/1533/stil-d8evnrz36hy-unsplash-landscape.jpg",
    title: "A JOURNEY OF IMAGINATION",
    isVideo: false
  },
  {
    src: "https://images.k11musea.com/media/1677/facade-201909.jpg",
    title: "A JOURNEY OF IMAGINATION",
    isVideo: false
  }
]

const HomePage = () => {
    const navigateToBrandStory = (index: number) => {

    };

    return (
        <PageScroller
            onScrollToLastPage={navigateToBrandStory}
            containerHeight={"100vh"}
            containerWidth={"100vw"}
            animationTimer={1000}
            animationTimerBuffer={200}
            transitionTimingFunction={"ease-in-out"}
            blockScrollDown={false}
            renderAllPagesOnFirstRender={false}
            customPageNumber={0}        >
          {
            imageSrcs.map((item, index) => {
              return <HomePageBanner  key={index} src={item.src} title={item.title} isVideo={item.isVideo} />
            })
          }
        </PageScroller>
    )
}

export default HomePage;
 
