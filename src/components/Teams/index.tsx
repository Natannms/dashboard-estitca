import { useEffect, useState } from 'react'
import { FaWhatsapp, FaTrash  } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
interface Geo {
    lat: string;
    lng: string;
}

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

interface User {
    id:number
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

const Teams = () => {
    const [team, setTeam] = useState<User[]>([]);
    async function getTeam() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            setTeam(data);
        } catch (error) {
            console.error('Error fetching team data:', error);
        }
    }

    useEffect(() => {
        getTeam();
    }, []);
    return (
        <div className="w-full  px-20 py-10 flex flex-wrap gap-6">
            <div className="flex w-full overflow-x-auto">
                <table className="table-hover table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NOME</th>
                            <th>TELEFONE</th>
                            <th>EMAIL</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>

                        {team.map(item => {
                            return (
                                <tr key={item.id}>
                                    <th>{item.id}</th>
                                    <td>{item.name}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.email}</td>
                                    <td className='flex gap-4'>
                                        <button className="btn btn-success flex gap-4"> <FaWhatsapp size={20} /> Whatsapp</button>
                                        <button className="btn btn-warning flex gap-4"><MdModeEdit size={20} /> Editar</button>
                                        <button className="btn btn-error flex gap-4"><FaTrash size={20} /> Excluir</button>
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
export default Teams; 
