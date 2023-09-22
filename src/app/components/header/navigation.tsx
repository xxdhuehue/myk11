import Link from 'next/link';
type LinkItem = {
    title: string,
    path: string
}

type LinkProps = {
    links: LinkItem[],
}

const Navigation = (props: LinkProps) => {
    const { links } = props; 
    return (
        <ul className="flex w-4/6 justify-between cursor-pointer">
            {
                links.map(item => {
                return <li key={item.title} >
                    <Link href={item.path}>{item.title}</Link>
                    </li>
                }) 
            }
        </ul>
    )
}

export default Navigation;