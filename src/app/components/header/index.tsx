"use client"
import Languages from "./languages";
import Search from "./search";
import Navigation from "./navigation";
import MobileHeader from "./mobileHeader";
import { HEADER_LINKS, LANGS } from '../../configs';
import { useState } from "react";
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import Image from "next/image";
import Modal from "../Modal";

const Header = () => {
    const [isMoile, setIsMobile] = useState<boolean>(false);
    const pathname = usePathname();

    const changeHeaderStyleByUrl = (): string => {
        const isHomepage = pathname === '/';
        if (isHomepage) {
            return 'transparent text-white border-slate-100 mx-12'
        }
        return 'bg-white text-black border-b-gray-300 w-full px-10'
    };

    return (
       <section>
            <Modal opened={isMoile} onClose={() => {setIsMobile(false)}} bgColor="bg-k11_mobile_mask_bg">
                <MobileHeader />
            </Modal>
            <div className="fixed flex-col justify-center items-center top-0 left-0 z-50 w-full h-20">
                <div className={`flex justify-between h-full items-center border-b  text-xs ${changeHeaderStyleByUrl()}`}>
                    <div className="w-1/4">
                        <Link href='/'>
                            <div className="relative w-12">
                                <Image src="https://images.k11musea.com/media/1317/logo-white.svg" width={200} height={200} alt=""  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                            </div>
                        </Link>
                    </div>
                    <section className="hidden lg:block w-3/4">
                        <div className="flex justify-end ">
                            <Navigation links={HEADER_LINKS} />
                            <Languages langs={LANGS} />
                            <Search />
                        </div>
                    </section>
                    <section className="block lg:hidden">
                        <Image onClick={()=>{setIsMobile(prev => !prev)}} src="/icons/search.png" alt="" width={20} height={20} />
                    </section>
                </div>
            </div>
       </section>
    )
}

export default Header;