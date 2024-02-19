import { useEffect, useState } from 'react'
import { FaWhatsapp, FaTrash } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import CardCounter from '../Charts/CardCounter';
import { User } from '../../types/User';
import EditClient from '../Modal/EditClient';
import Confirm from '../Modal/Confirm';
import {toast } from 'react-toastify';

const Teams = () => {
    const [team, setTeam] = useState<User[]>([]);
    const [editItem, setEditItem] = useState<User | null | undefined>()
    const openWhatsApp = () => {
        // Número de telefone e mensagem
        const phoneNumber = '+5531998888752';
        const message = 'Olá, estou entrando em contato através do seu site.';

        // Construir a URL do WhatsApp
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

        // Abrir a URL em uma nova janela/tab
        window.open(whatsappUrl, '_blank');
    };

    async function getTeam() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            setTeam(data);
        } catch (error) {
            console.error('Error fetching team data:', error);
        }
    }

    const editClient = (item:User) =>{
        console.log("ABRINDO MORAL PARA EDIÇÃO DE CLIENTE")
        setEditItem(item)
    }

    useEffect(() => {
        getTeam();
    }, []);
    return (
        <div className="w-full  px-20 py-10 flex flex-wrap gap-6">
            <div className="lg:w-full flex gap-4 ">
                <CardCounter title="Novos" total={325} />
                <CardCounter title="Reincidentes" total={1000} />
                <CardCounter title="total" total={1500} />
            </div>
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
                                        <button className="btn btn-success flex gap-4" onClick={openWhatsApp}>
                                            <FaWhatsapp size={20} /> Whatsapp
                                        </button>
                                        <label className="btn btn-warning flex gap-4" htmlFor="modal-edit-client" onClick={()=>{editClient(item)}}>
                                            <MdModeEdit size={20} />
                                            Editar
                                        </label>
                                        <label className="btn btn-error flex gap-4"  htmlFor="modal-confirm"><FaTrash size={20} /> Excluir</label>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <EditClient item={editItem}/>
            <Confirm title='Excluir cliente' text='Tem certeza que gostaria de excluir o cliente da lista ?' onClick={()=>{
                toast("DELETADO COM SUCESSO !")
            }} />
        </div>
    );

}
export default Teams; 
