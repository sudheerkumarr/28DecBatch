// Types of export:
// default export
// named export

export function Nav() {
    return (
        <>
            <nav class="navbar bg-dark border-bottom border-body navbar-expand-lg" data-bs-theme="dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">MyApp</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Customers</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link">Products</a>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link">Login</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link">Register</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link">Logout</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link"><i class="bi bi-cart"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
// export default Nav;