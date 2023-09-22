import Image from "next/image";

type HomepageBannerProps = {
    src: string,
    title: string,
    isVideo: boolean
}
  
const HomePageBanner = (props: HomepageBannerProps) => {
    const {src, title, isVideo} = props;
    return (
        <div className="relative h-full w-full flex justify-center items-center">
            <div className="absolute text-4xl text-center lg:text-5xl xl:text-5xl 2xl:text-7xl text-white z-10 break-words">{title}</div>
            {
            isVideo ? <>
                <video playsInline autoPlay muted loop className="w-full h-full">
                    <source src={src} type="video/mp4"></source>
                </video>
            </> : <Image src={src} fill objectFit="cover" alt="k11" sizes="100vw"></Image>
            }
        </div>
    )
}

export default HomePageBanner;