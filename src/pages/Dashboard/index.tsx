import { useEffect, useState } from "react";
import SideNavigationDashboard from "../../components/SideNavigationDashboard";
import { Schedule } from "../../types/Schedule";
import Card from "../../components/Card";
import HeaderDashboard from "../../components/HeaderDashboard";

const Dashboard = () => {
    const [schedules, setSchedules] = useState<Schedule[]>([])

    function getSchedules() {
        const newSchedules = Array.from({ length: 20 }, (_, index) => ({
            id: index + 2, // Start from 2 to avoid conflicts with the existing schedule
            client: {
                id: index + 2,
                name: `Client ${index + 2}`
            },
            finish: "16:51",
            start: "17:51",
            Products: [
                {
                    id: index + 2,
                    name: `Product ${index + 2}`,
                    description: `Random product description ${index + 2}`,
                    price: Math.floor(Math.random() * 50) + 1 // Random price between 1 and 50
                }
            ],
            Services: [
                {
                    id: index + 2,
                    name: `Service ${index + 2}`,
                    description: `Random service description ${index + 2}`,
                    price: Math.floor(Math.random() * 50) + 1 // Random price between 1 and 50
                }
            ]
        }));
    
        setSchedules(newSchedules);
    }

    useEffect(()=>{
        getSchedules()
    },[])

    return (
        <div className="bg-[#1a1a1a] w-screen h-screen  flex">
            <SideNavigationDashboard />
            <div className="w-full">
                <HeaderDashboard title="DASHBOARD" />
                <div className="w-full  px-4 flex flex-wrap gap-6">
                    {schedules.map(item => {
                        return (
                            <Card
                                title={item.client.name}
                                description={item.Services[0].description}
                                btnAction={() => alert("ACTION")}
                                btnTittle="Abrir"
                                key={item.id}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );

}
export default Dashboard; 
