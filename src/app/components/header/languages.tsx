type LanguageProps = {
    langs: string[]
}
const Languages = (props: LanguageProps) => {
    const { langs } = props;

    return  <div className="international flex w-28 justify-around mx-7 border-r border-l ">
        {
            langs.map(lang => {
                return <span className="cursor-pointer" key={lang}>{lang}</span>
            })
        }
    </div>
}

export default Languages;