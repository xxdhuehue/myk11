import Link from 'next/link';
type LinkItem = {
    title: string,
    path: string
}

type LinkProps = {
    links: LinkItem[],
}

const MobileNavigation = (props: LinkProps) => {
    const { links } = props; 
    return (
        <ul className="flex flex-col text-center justify-between text-white  text-2xl flex-start cursor-pointer  ">
            {
                links.map(item => {
                return <li key={item.title} className='mt-16 cursor-pointer'>
                    <Link href={item.path}>{item.title}</Link>
                    </li>
                }) 
            }
        </ul>
    )
}

export default MobileNavigation;