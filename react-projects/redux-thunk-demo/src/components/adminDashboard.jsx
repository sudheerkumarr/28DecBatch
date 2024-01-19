import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Users from "./users";
import Address from "./address";

const AdminDashboard = () => {
    const [options, setOption] = useState(["Employees", "Address", "Skills"]);
    const [selOption, setSelOption] = useState("Employees");
    return (
        <div className="container">
            <p className="h2 my-3 text-start p-2 bg-secondary text-white">
                Admin Dashboard
            </p>
            <div className="row">
                <div className="col-sm-3">
                    <ul className="list-group" style={{ listStyle: "none" }}>
                        {options.map((opt) => (
                            <li
                                className={
                                    selOption == opt
                                        ? "list-group-item active "
                                        : "list -group-item border p-3"
                                }
                            >
                                <Link
                                    style={{ textDecoration: "none" }}
                                    to={`/adminDashboard/${opt.toLowerCase()}`}
                                    className="text-dark"
                                >
                                    <span onClick={() => setSelOption(opt)}>{opt}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="col-sm-9 shadow p-3 mb-5 bg-body rounded">
                    <Routes>
                        <Route path="" element={<Users />} />
                        <Route path="users" element={<Users />} />
                        <Route path="address" element={<Address />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;