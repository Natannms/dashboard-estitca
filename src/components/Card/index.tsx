interface CardProps {
    title: string
    description: string
    btnAction: ()=>void
    btnTittle: string
}
const Card = ({title, description, btnAction, btnTittle}:CardProps) => {
    return (
        <div className="card w-2/12">
            <div className="card-body">
                <h2 className="card-header">{title}</h2>
                <p className="text-content2">{description}</p>
                <div className="card-footer">
                    <label htmlFor="modal-schedules" onClick={btnAction} className="btn-secondary btn">{btnTittle}</label>
                </div>
            </div>
        </div>
    );

}
export default Card; 
