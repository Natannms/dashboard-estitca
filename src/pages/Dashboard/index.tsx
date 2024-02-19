import SideNavigationDashboard from "../../components/SideNavigationDashboard";
import HeaderDashboard from "../../components/HeaderDashboard";
import { useNavigationStore } from "../../context";
import Teams from "../../components/Teams";
import GeneralTable from "../../components/GeneralTable";
import Statistics from "../../components/Statistics";
const Dashboard = () => {

    const navigationContext = useNavigationStore();

    return (
        <div className="bg-[#1a1a1a] w-full h-full flex">
            <SideNavigationDashboard />
            <div className="w-full">
                <HeaderDashboard title={navigationContext.view} />
                
                {navigationContext.view == 'DASHBOARD' && <GeneralTable />}
                {navigationContext.view == 'TEAMS' && <Teams />}
                {navigationContext.view == 'STATISTICS' && <Statistics />}
            </div>
        </div>
    );

}
export default Dashboard; 
