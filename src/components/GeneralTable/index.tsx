import { useEffect, useState } from "react";
import { Schedule } from "../../types/Schedule";
import { FaInfo } from "react-icons/fa";
import { useModalScheduleStore } from "../../context";
import ScheduleModal from "../ScheduleModal";
import CardCounter from "../Charts/CardCounter";
import { FaSearch } from "react-icons/fa";
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
    }, [])

    return (
        <div className="w-full  px-20 py-10 flex flex-wrap gap-6">
            <div className="lg:w-full flex gap-4 ">
                <CardCounter title="Em atendimento" total={325} />
                <CardCounter title="Aguardando" total={1000} />
                <CardCounter title="Finzalidos" total={500} />
            </div>
            <div className=" w-full bg-[#232323] p-2 flex gap-4 justify-between border border-gray-400/10 rounded-lg">
                <div id="actions">
                    <button className="btn btn-outline-primary">Novo agendamento</button>
                </div>
                <div id="searchData" className="flex gap-2">
                    <input className="input input-solid" placeholder="Buscar agendamento" />
                    <button className="btn bg-error hover:btn-ghost">
                       <FaSearch />
                    </button>
                </div>
            </div>
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
                                            className="btn btn-outline-secondary btn-xs flex gap-4">
                                            <FaInfo size={10} />
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
