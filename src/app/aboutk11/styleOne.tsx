import Image from "next/image";

const StyleOne = () => {
    return <div className="w-full box-border">
         <div className="h-100 border relative">
            <Image  objectFit="cover" fill 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src={"https://images.k11musea.com/media/1516/ndp-tour.jpg"}  alt="k11"></Image>
        </div>
        <div className="mt-1.5">
            <p className="border-b text-3xl pb-1">2009</p>
            <p className="pt-2">kong kong k11 art mall</p>
        </div>
    </div>
}

export default StyleOne;