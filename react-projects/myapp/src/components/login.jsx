// ctrl+d
const Login = () => {
    return (
        <div className="w-25 mx-auto mt-5 shadow p-3 mb-5 bg-body-tertiary rounded my-auto">
            <p className="h4 text-white bg-secondary p-2 text-center">Login</p>
            <form className=" border border-secondary p-3 ">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input id="email" type="email" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input id="password" type="password" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Role</label>
                    <select className="form-select">
                        <option>Admin</option>
                        <option selected>Customer</option>
                        <option>Employee</option>
                    </select>
                </div>
                <div className="d-grid gap-2">
                    <input type="submit" className="btn btn-secondary" />
                </div>
            </form>
        </div>

    )
}

export default Login;