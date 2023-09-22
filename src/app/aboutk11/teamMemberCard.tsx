import Image from "next/image";
type teamMemberProps = {
    url: string,
    name: string,
    description: string
}
const TeamMemberCard = (props: teamMemberProps) => {
    const {url, name, description} = props;
    return (
        <div className="flex justify-center box-border items-center py-3 px-3 flex-col m-8 k11_hover">
            <div className="relative h-80 w-full ">
                <Image alt="k11" src={url} fill objectFit="cover"  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
            </div>
            <div className="text-center text-2xl mt-3 mb-1.5">{name}</div>
            <div className="text-center text-ms text-gray-500">{description}</div>
        </div>
    )
}

export default TeamMemberCard;