import { useState } from "react";
import moment from 'moment';
import { Activities } from "../../types/Activities";
import CardCounter from "../Charts/CardCounter";
import ActivitiesCard from "../Charts/ActivitiesCard";
import ProgressCard from "../Charts/ProgressCard";

const Statistics = () => {
    const [activities] = useState<Activities[]>([
        {
            text:"Lorem Ipsum",
            date: moment().subtract(Math.floor(Math.random() * 30), 'days').toISOString(),
            value: 15
        },
        {
            text:"Lorem Ipsum",
            date: moment().subtract(Math.floor(Math.random() * 30), 'days').toISOString(),
            value: 15
        }
    ])
    return (
        <div className="w-full  px-20 py-10 flex flex-wrap gap-6">
            <div className="lg:w-full flex gap-4">
                <CardCounter title="CLIENTES" total={325} />
                <CardCounter title="AGENDAMENTOS" total={1000} />
                <CardCounter title="PRODUTOS VENDIDOS" total={500} />
            </div>
            <ActivitiesCard activities={activities} />
            <ProgressCard />
        </div>
    );

}
export default Statistics; 
