import { useEffect, useState } from "react";
import { Schedule } from "../../types/Schedule";
import { FaInfo } from "react-icons/fa";
import { useModalScheduleStore } from "../../context";
import ScheduleModal from "../ScheduleModal";

const GeneralTable = () => {
    const [schedules, setSchedules] = useState<Schedule[]>([])
    const modalScheduleContext = useModalScheduleStore();

    function getSchedules() {
        const newSchedules = Array.from({ length: 20 }, (_, index) => ({
            id: index + 2, // Start from 2 to avoid conflicts with the existing schedule
            client: {
                id: index + 2,
                name: `Client ${index + 2}`
            },
            status: getRandomStatus(),
            finish: "16:51",
            start: "17:51",
            Products: [
                {
                    id: index + 2,
                    name: `Nome do Produto ${index + 2}`,
                    description: `Random product description ${index + 2}`,
                    price: Math.floor(Math.random() * 50) + 1 
                }
            ],
            Services: [
                {
                    id: index + 2,
                    name: `Nome do Serviço ${index + 2}`,
                    description: `Random service description ${index + 2}`,
                    price: Math.floor(Math.random() * 50) + 1
                }
            ]
        }));

        setSchedules(newSchedules);
    }
    function getRandomStatus(): string {
        const statusArray = ['Pending', 'InProgress', 'Canceled', 'Finished'];
        const randomIndex = Math.floor(Math.random() * statusArray.length);
        return statusArray[randomIndex];
    }
    useEffect(() => {
        getSchedules()
    }, [ ])

    return (
        <div className="w-full  px-20 py-10 flex flex-wrap gap-6">
            <div className="flex w-full overflow-x-auto">
                <table className="table-hover table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>CLIENTE</th>
                            <th>STATUS</th>
                            <th>Previsão de término</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                         {schedules.map(schedule => {
                            return (
                                <tr key={schedule.id}>
                                    <th>{schedule.id}</th>
                                    <td>{schedule.client.name}</td>
                                    <td>{schedule.status}</td>
                                    <td>{schedule.finish}</td>
                                     <td className='flex gap-4'>
                                        <label 
                                            htmlFor="modal-schedule" 
                                            onClick={() => modalScheduleContext.setSchedule(schedule)} 
                                            className="btn btn-secondary flex gap-4">
                                            <FaInfo size={20} /> Informações
                                        </label>
                                    </td> 
                                </tr>
                            )
                        })} 
                    </tbody>
                </table>
                <ScheduleModal />
            </div>
        </div>
    );

}
export default GeneralTable; 
