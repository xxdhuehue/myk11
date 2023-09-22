import CollapseColumn from "./collapseColumn";

const MediaCenter = () => {
    return (
        <div className="mt-16">
            <div className="h-16 k11_horizontal_center border-b">
                MEDIA CENTER
            </div>
            <div className="k11_horizontal_center border-b h-16 ">
                <div className="h-full k11_horizontal_center w-1/2 border-r">PRESS RELEASES</div>
                <div className="h-full k11_horizontal_center w-1/2">AWARDS& RECOGNITION</div>
            </div>
            <div>
                <CollapseColumn  />
            </div>
        </div>
    )
}

export default MediaCenter;