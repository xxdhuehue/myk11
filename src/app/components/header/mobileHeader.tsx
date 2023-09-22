import Image from "next/image";
import MobileNavigation from "./mobileNavigation";
import { HEADER_LINKS, LANGS } from "@/app/configs";
type LanguageProps = {
    langs: string[]
}
const MobileHeader = () => {
    return (
        <div >
            <header className="flex border-b h-28 px-8">
                <Image src="https://images.k11musea.com/media/1317/logo-white.svg" width={80} height={80} alt=""  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
            </header>
            <MobileNavigation links={HEADER_LINKS} />
            <section className="flex justify-center">
            <div className="flex items-center mt-8">
                <div className="mr-4 border-r">
                    {
                        LANGS.map(lang => {
                            return <span className="cursor-pointer uppercase text-white mr-2 last:mr-4" key={lang}>{lang}</span>
                        })
                    }
                </div>
                <Image src="/icons/search.png" alt="" width={24} height={20} />
            </div>
            </section>
        </div>
    )
}

export default MobileHeader;

 