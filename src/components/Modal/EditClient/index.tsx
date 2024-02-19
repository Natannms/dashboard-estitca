import { User } from "../../../types/User";

interface propsComponent {
    item:User | null | undefined
}

const EditClient = ({item}:propsComponent) => {

    return (
        <>
            <input className="modal-state" id="modal-edit-client" type="checkbox" />
            <div className="modal w-screen">
                <label className="modal-overlay" htmlFor="modal-edit-client"></label>
                <div className="modal-content flex flex-col gap-5 max-w-3xl">
                    <label htmlFor="modal-edit-client" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
                    <h2 className="text-xl">Editar cliente</h2>
                    <section className="">
                        <div className="p-8 shadow-lg">
                            <form className="space-y-4">
                                <div className="w-full">
                                    <label className="sr-only" htmlFor="name">Name</label>
                                    <input className="input input-solid max-w-full" placeholder="Name" type="text" id="name" value={item?.name}/>
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="sr-only" htmlFor="email">Email</label>
                                        <input className="input input-solid" placeholder="Email address" type="email" id="email" value={item?.email}/>
                                    </div>

                                    <div>
                                        <label className="sr-only" htmlFor="phone">Phone</label>
                                        <input className="input input-solid" placeholder="Phone Number" type="tel" id="phone" value={item?.phone}/>
                                    </div>
                                </div>

                                <div className="mt-4 flex flex-col gap-3">
                                    <button type="button" className="rounded-lg btn btn-primary btn-block">Salvar Edição</button>
                                    <button className="btn btn-error">Cancel</button>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );

}
export default EditClient; 
