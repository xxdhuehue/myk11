import { BrandStoryProps } from "./brand-story.types"; 
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import Image from 'next/image';

// props: BrandStoryProps
const BrandStoryItem = () => {
    return (
        <div className="flex flex-col items-center bg-white border-r border-gray-300  box-border  text-base overflow-hidden px-12 ">
            <section className="flex flex-col items-center py-5 k11_hover">
                {/*Todo replace it with Text from sitecore nextjs*/}
                <p className="uppercase text-center text-4xl pb-5 ">Art</p>
                {/* <Text className="uppercase">ART</Text> */}
                
                <div className="w-2/3 h-100 border relative">
                    <Image  objectFit="cover" fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src={"https://images.k11musea.com/media/1516/ndp-tour.jpg"}  alt="k11"></Image>
                </div>

                <div className="text-sm mt-6 text-center px-12 text-gray-600">
                    Welcome to the sparkling new global Cultural-Retail destination — K11 MUSEA. With a name inspired by the Muses in Greek mythology, K11 MUSEA aspires to enrich your daily life through the power of creativity, culture and innovation. Located in the heart of the Victoria Dockside art and cultural district, this world-class experiential landmark brings in immersive experiences in retail, art, culture, entertainment and gastronomy, all under one roof.
                </div>
            </section>
        </div>
    )
}

export default BrandStoryItem;