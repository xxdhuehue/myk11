import BrandStoryItem from "./BrandStoryItem";
// import { BrandStoryList } from "./brand-story.types";
// props: BrandStoryList
const BrandStoryLayout = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 overflow-hidden">
            <BrandStoryItem />
            <BrandStoryItem />
            <BrandStoryItem />
        </div>
    
    )
}

export default BrandStoryLayout;


    
            {/* <p className="lg:content-auto">xxxxxxxxxxxxxxxxx</p> */}
            {/* <div className="[&_p]:mt-4">
                <p>Lorem ipsum...</p>
                <ul>
                    <li>
                    <p>Lorem ipsum...</p>
                    </li>
                </ul>
            </div> */}
            {/* <blockquote className="text-2xl font-semibold italic text-center text-slate-900">
            When you look
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                <span className="relative text-white">annoyed</span>
            </span>
            all the time, people think that you're busy.
            </blockquote> */}
            {/* <form>
            <label className="block">
                <span className="block text-sm font-medium text-slate-700">Email</span>
                <input type="email" className="peer"/>
                <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                Please provide a valid email address.
                </p>
            </label>
            </form> */}

            {/* <div className="group is-published">
                <div className="hidden group-[.is-published]:block">
                    Published
                </div>
            </div> */}
            {/* <a href="#"  tabIndex={-1} className="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
                <div className="flex items-center space-x-3">
                    <svg className="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24"> </svg>
                    <h3 className="text-slate-900 group-focus:text-white text-sm font-semibold">New project</h3>
                </div>
                <p className="text-slate-500 group-hover:text-white text-sm">Create a new project from a variety of starting templates.</p>
            </a> */}
            {/* <ul>
                <li className="lg:[&:nth-child(1)]:hover:text-[--primary-color]">xxxxxxx</li>
                <li className="lg:[&:nth-child(2)]:hover:underline">xxxxxxx</li>
                <li className="lg:[&:nth-child(3)]:hover:underline">xxxxxxx</li>
                <li className="lg:[&:nth-child(4)]:hover:text-green-900">xxxxxxx</li>
                <li className="lg:[&:nth-child(5)]:hover:underline">xxxxxxx</li>
                <li className="lg:[&:nth-child(6)]:hover:text-rose-900">xxxxxxx</li>
            </ul> */}