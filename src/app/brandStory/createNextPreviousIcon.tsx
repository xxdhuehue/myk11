export const previousButton = (event: () => void): React.ReactNode => {
    return <div onClick={() => event()} className="absolute top-2/4 left-0 z-10 cursor-pointer">
        previous
    </div>
}

export const nextButton= (event: () => void): React.ReactNode => {
    return <div onClick={() => event()} className="absolute top-2/4 right-0 z-10 cursor-pointer">
        previous
    </div>
}