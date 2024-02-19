import moment from "moment";
import { Activities } from "../../../types/Activities";

interface propsComponent {
    activities: Activities[]
}
const ActivitiesCard = ({ activities }: propsComponent) => {

    return (
        <div className="bg-[#232323] shadow-md shadow-black/5 p-6 rounded-md w-full">
            <div className="flex justify-between mb-4 items-start">
                <div className="font-medium">Activities</div>
            </div>
            <div className="overflow-hidden">
                <table className="w-full min-w-[540px]">
                    <tbody>
                        {activities.map(item => {
                            return (
                                <tr>
                                    <td className="py-2 px-4 border-b ">
                                        <div className="flex items-center">
                                            <a href="#" className="text-gray-200 text-sm font-medium hover:text-blue-500 ml-2 truncate">{item.text}</a>
                                        </div>
                                    </td>
                                    <td className="py-2 px-4 border-b ">
                                        <span className="text-[13px] font-medium text-gray-100">{moment(item.date).format('DD/MM/YYYY')}</span>
                                    </td>
                                    <td className="py-2 px-4 border-b ">
                                        <span className="text-[13px] font-medium text-gray-100">{item.value.toLocaleString()}</span>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );

}
export default ActivitiesCard; 
