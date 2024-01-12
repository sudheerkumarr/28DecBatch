// Types of export:
// default export
// named export

import { NavLink } from "react-router-dom";

export function Nav() {
    return (
        <>
            <nav className="navbar bg-dark border-bottom border-body navbar-expand-lg" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">MyApp</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/users">Users</NavLink>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link">Products</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"><i className="bi bi-cart"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
// export default Nav;