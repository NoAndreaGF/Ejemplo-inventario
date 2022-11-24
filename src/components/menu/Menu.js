import '../../styles/Menu.css';


function Menu() {
    return(
        <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0 color-bar">
            <div className="container-fluid d-flex flex-column p-0"><a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0 color" href="#"></a>
                <hr className="sidebar-divider my-0" />
                <ul className="navbar-nav text-light" id="accordionSidebar">
                    <li className="nav-item"><a className="nav-link active" href="index.html"><i className="bi bi-speedometer2"></i><span>Dashboard</span></a></li>
                    <li className="nav-item"><a className="nav-link" href="table.html"><i className="bi bi-receipt"></i><span>Ventas</span></a></li>
                    <li className="nav-item"><a className="nav-link" href="register.html"><i className="bi bi-box-seam"></i><span>Inventario</span></a></li>
                    <li className="nav-item"><a className="nav-link" href="login.html"><i className="bi bi-upc"></i><span>Productos</span></a></li>
                    <li className="nav-item"><a className="nav-link" href="register.html"><i className="bi bi-people"></i><span>Clientes</span></a></li>
                    <li className="nav-item"><a className="nav-link" href="profile.html"><i className="bi bi-person-circle"></i><span>Usuario</span></a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Menu;