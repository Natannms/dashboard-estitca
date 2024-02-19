import { useModalScheduleStore } from '../../context';
import { FaCircleDot } from 'react-icons/fa6';
import { VscDebugStart } from 'react-icons/vsc';
import { TiCancel } from 'react-icons/ti';
import { CiCircleCheck } from 'react-icons/ci';

const ScheduleModal = () => {
    const modalScheduleContext = useModalScheduleStore();
    function getModalConfig(status: string | undefined): string {
        const config = [
            'modal-content flex flex-col gap-5 max-w-3xl border border-gray-400',
            'modal-content flex flex-col gap-5 max-w-3xl border border-red-400',
            'modal-content flex flex-col gap-5 max-w-3xl border border-green-400',
            'modal-content flex flex-col gap-5 max-w-3xl border border-blue-400',
        ];
        switch (status) {
            case 'Canceled':
                return config[1]
                break;
            case 'InProgress':
                return config[2]
                break;
            case 'Pending':
                return config[3]
                break;
            case 'Finished':
                return config[0]
                break;

            default:
                return config[0]
                break;
        }
    }
    function convertToMonetary(value: number) {
        const formattedPrice = value.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        });

        return formattedPrice
    }
    return (
        <>
            <input className="modal-state" id="modal-schedule" type="checkbox" />
            <div className="modal w-screen">
                <label className="modal-overlay" htmlFor="modal-schedule"></label>
                <div className={getModalConfig(modalScheduleContext.schedule?.status)}>
                    <label htmlFor="modal-schedule" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
                    <h2 className="text-xl">{modalScheduleContext.schedule?.client.name}</h2>
                    <span><strong>Início: </strong> {modalScheduleContext.schedule?.start} </span>
                    <span><strong>Previsão de término: </strong> {modalScheduleContext.schedule?.finish}</span>
                    <details>
                        <summary>Serviços</summary>
                        <ul className='mt-4'>
                            {modalScheduleContext.schedule?.Services.map(service => {
                                return (
                                    <li className='flex gap-4'>
                                        <FaCircleDot className='text-pink-8' size={15} />
                                        {service.name} - <strong className='text-green-700'>{convertToMonetary(service.price)}</strong>
                                    </li>
                                )
                            })}
                        </ul>
                    </details>
                    <details>
                        <summary>Produtos adicionais</summary>
                        <form action="">

                        </form>
                        <ul className='mt-4'>
                            {modalScheduleContext.schedule?.Products.map(product => {
                                return (
                                    <li className='flex gap-4 items-center'>
                                        <FaCircleDot className='text-pink-8' size={15} />
                                        {product.name} - <strong className='text-green-700'>{convertToMonetary(product.price)}</strong>
                                    </li>
                                )
                            })}
                        </ul>
                    </details>
                    <div className="flex flex-col gap-3">
                        {modalScheduleContext.schedule?.status === 'Pending' &&
                            (
                                <>
                                    <button className='btn btn-primary flex gap-2'>
                                        <VscDebugStart size={20} className='text-blue' />
                                        Iniciar
                                    </button>
                                    <button className='btn btn-error flex gap-2'>
                                        <TiCancel size={20} className='text-blue' />
                                        Cancelar agendamento
                                    </button>
                                </>
                            )
                        }
                        {modalScheduleContext.schedule?.status === 'InProgress' &&
                            (
                                <>
                                    <button className='btn btn-success flex gap-2'>
                                        <CiCircleCheck size={20} className='text-blue' />
                                        Finalizar
                                    </button>
                                </>
                            )
                        }
                        {modalScheduleContext.schedule?.status === 'Canceled' &&
                            (
                                <>
                                    <strong className='text-red-500'>AGENDAMENTO CANCELADO</strong>
                                </>
                            )
                        }
                        {modalScheduleContext.schedule?.status === 'Finished' &&
                            (
                                <>
                                    <strong className='text-green-500'>AGENDAMENTO Finalizado</strong>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );

}
export default ScheduleModal; 
