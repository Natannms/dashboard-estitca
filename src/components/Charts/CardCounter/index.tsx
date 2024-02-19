interface PropsComponent {
    title:string
    total:number
}
const CardCounter = ({title, total}:PropsComponent) => {  

    return (
        <div className="card w-4/12">
        <div className="card-body">
            <h2 className="card-header">{total}</h2>
            <p className="text-content2">{title}</p>
        </div>
    </div>
    );  

}
export default CardCounter; 
