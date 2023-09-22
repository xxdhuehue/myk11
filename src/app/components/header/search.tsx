import PreviousIcon from "../../assets/icons/next.svg";
import Image from "next/image";

const Search = () => {
    return (
        <div className="w-10 self-end text-right cursor-pointer">
            <Image src="/icons/search.png" alt="" width={20} height={20} />
        </div>
    )
}

export default Search;