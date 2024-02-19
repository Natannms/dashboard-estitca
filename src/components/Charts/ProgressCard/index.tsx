import { useState } from "react";

interface progressType {
    title:string,
    value:number
}
const ProgressCard = () => {
    const [progressLit] = useState<progressType[]>([
        {value:25, title: "Title-25"}, {value:48, title: "Title-48"}, {value:10, title: "Title-100"}, {value:63, title: "Title-63"}
    ])
    return (
        <div className="bg-[#232323] shadow-md shadow-black/5 p-6 rounded-md w-full">
            <div className="flex justify-between mb-4 items-start">
                <div className="font-medium">Progress</div>
            </div>
            <ul className="overflow-hidden">
                {progressLit.map(progress => {
                    return (
                        <li className='flex items-center'>
                            <span className='w-3/12'>{progress.title}  </span>
                            <progress className="progress progress-flat-secondary w-full" value={progress.value} max="100"></progress>
                        </li>
                    )
                })}
            </ul>
        </div>
    );

}
export default ProgressCard; 
