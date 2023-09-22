type MeidaHeaderProps = {
    date: string,
    mainTitle: string,
    content?: string,
    image?: string
}

const MediaHeader = (props: MeidaHeaderProps) => {
    const { date, mainTitle } = props;
    return (
        <div className="flex justify-between px-10 py-6">
            <section className="w-3/4">
                <p className="text-sm mb-2">{date}</p>
                <div className="text-3xl font-bold text-gray-600">{mainTitle}</div>
            </section>
            <section className="w-24 justify-self-end">
                <div className="k11_rounded_box text-sm">LEARN MORE</div>
                <div className="k11_rounded_box">DOWNLOAD</div>
            </section>
        </div>
    )
}

export default MediaHeader