interface Props {
    title:string
}
const HeaderDashboard = ({title}: Props) => {

    return (
        <div className="navbar w-full h-20 py-4 bg-[#1a1a1a] shadow-none">
            <div className="navbar-start">
                <a className="navbar-item">{title}</a>
            </div>
            <div className="navbar-end">
                <div className="avatar avatar-ring avatar-md">
                    <div className="dropdown-container">
                        <div className="dropdown">
                            <label className="btn btn-ghost flex cursor-pointer px-0" tabIndex={0}>
                                <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="avatar" />
                            </label>
                            <div className="dropdown-menu dropdown-menu-bottom-left">
                                <a className="dropdown-item text-sm">Options</a>
                                <a tabIndex={-1} className="dropdown-item text-sm">Account settings</a>
                                <a tabIndex={-1} className="dropdown-item text-sm">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default HeaderDashboard; 
