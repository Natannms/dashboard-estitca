
interface propsComponent {
    onClick: () => void
    title:string
    text:string
}

const Confirm = ({ onClick, title, text }: propsComponent) => {

    return (
        <>
            <input className="modal-state" id="modal-confirm" type="checkbox" />
            <div className="modal w-screen">
                <label className="modal-overlay" htmlFor="modal-confirm"></label>
                <div className="modal-content flex flex-col gap-5 max-w-3xl">
                    <label htmlFor="modal-confirm" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
                    <h2 className="text-xl">{title}</h2>
                    <span>{text}</span>
                    <div className="flex gap-3">
                        <label  htmlFor="modal-confirm" className="btn btn-primary btn-block" onClick={onClick}>Sim</label>
                        <label  htmlFor="modal-confirm" className="btn btn-block">Cancel</label>
                    </div>
                </div>
            </div>
        </>
    );

}
export default Confirm; 
