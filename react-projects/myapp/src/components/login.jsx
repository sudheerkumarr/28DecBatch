import { useState } from "react";
import Joi from 'joi-browser';


import axios from 'axios';
// ctrl+d
const Login = () => {
    const [user, setUser] = useState(
        {
            email: "",
            password: "",
            role: ""
        }
    )

    const [errors, setErrors] = useState({});

    // Step2: Define schema to validate user/form data
    const schema = Joi.object({
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
            .required(),
        password: Joi.string()
            .regex(new RegExp('^[a-zA-Z0-9]{3,30}$'))
            .required(),
        role: Joi.string().required()
    })

    // Step3: function to validate user/form data w.r.t schema
    const validate = () => {
        const errors = {}; //object type local variable
        const result = Joi.validate(user, schema, {
            abortEarly: false,
        });
        console.log(result);
        // setting error messages to error properties
        // ex: errors[username] = "username is required";
        // ex: errors[password] = "password is required";
        if (result.error != null)
            for (let item of result.error.details) {
                errors[item.path[0]] = item.message;
            }
        return Object.keys(errors).length === 0 ? null : errors;
    };

    const handleChange = (event) => {
        let tempUser = { ...user };
        tempUser[event.target.name] = event.target.value;
        setUser(tempUser);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // Step 4: call validate function to verify as per the schema
        //         user enetered details or not 
        setErrors(validate());
        if (errors) return;
        // logic to send form data to backend for validation
        //axios.post(url, data)
        axios.post("https://reqres.in/api/login", user)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <>
            {console.log(user)}
            {console.log(errors)}
            <div className="w-25 mx-auto mt-5 shadow p-3 mb-5 bg-body-tertiary rounded my-auto">
                < p className="h4 text-white bg-secondary p-2 text-center" > Login</p >
                <form onSubmit={handleSubmit} className=" border border-secondary p-3 ">
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input name="email" value={user.email} onChange={handleChange} id="email" type="email" className="form-control" />
                        {errors.email && <small className="text-danger">{errors.email}</small>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input name="password" value={user.password} onChange={handleChange} id="password" type="password" className="form-control" />
                        {errors.password && <small className="text-danger">{errors.password}</small>}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Role</label>
                        <select name="role" value={user.role} onChange={handleChange} className="form-select">
                            <option>Admin</option>
                            <option selected>Customer</option>
                            <option>Employee</option>
                        </select>
                        {errors.role && <small className="text-danger">{errors.role}</small>}
                    </div>
                    <div className="d-grid gap-2">
                        <input type="submit" className="btn btn-secondary" />
                    </div>
                </form>
            </div >
        </>
    )
}

export default Login;