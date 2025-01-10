import React, { UseEffect, useState } from "react";
import "./updateuser.css";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const UpdateUser = () => {
     const users = {
          name:"",
          email:"",
          address:"",
          Number:"",
     };
     const [user, setUser] = useState(users);
     const navigate = useNavigate();
     const { id } = useParams();

     const inputHandler = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setUser({...user, [name]: value});
    };
    
    UseEffect (() => {
        axios
        .get(`http://localhost:8000/api/user/${id}`)
        .then((response) => {
            setUser(response.data);
        })
        .catch ((error) => {
            console.log(error);
        });
     },[id]);

     const submitForm = async (e) => {
        e.preventDefault();
        await axios
        .put(`http://localhost:8000/api/update/user/${id}`, user)
        .then ((response) => {
           toast.success(response.data.message, { position: "top-right"} );
            navigate ("/");
        })
        .catch ((error) => {
            console.log(error);
        });
    };

     return (
        <div className="addUser">
            <Link to="/" type="button" class="btn btn-secondary">
            <i class="fa fa-arrow-left" aria-hidden="true"></i> Back
            </Link>
            
            <h3>Update User</h3>
            <form className="addUserForm" onSubmit={submitForm}>
                <div className="inputGroup">
                    <label htmlFor="name">Nombre:</label>
                    <input
                    type="text"
                    id="name"
                    value={user.name}
                    onChange={inputHandler}
                    name="name"
                    autoComplete="off"
                    placeholder="Enter your Name"
                    />
                </div>
                <div className="inputGroup">
                    <label htmlFor="Password">Contraseña:</label>
                    <input
                    type="text"
                    id="Password"
                    value={user.Password}
                    onChange={inputHandler}
                    name="Password"
                    autoComplete="off"
                    placeholder="Enter your Password"
                    />
                </div>
                <div className="inputGroup">
                    <label htmlFor="email">E-mail:</label>
                    <input
                    type="email"
                    id="email"
                    value={user.email}
                    onChange={inputHandler}
                    name="email"
                    autoComplete="off"
                    placeholder="Enter your Email"
                    />
                </div>
                <div className="inputGroup">
                    <label htmlFor="address">Localidad:</label>
                    <input
                    type="text"
                    id="address"
                    value={user.address}
                    onChange={inputHandler}
                    name="address"
                    autoComplete="off"
                    placeholder="Enter your Adress"
                    />
                </div>
                <div className="inputGroup">
                    <label htmlFor="Number">Number:</label>
                    <input
                    type="text"
                    id="address"
                    value={user.Number}
                    onChange={inputHandler}
                    name="Number"
                    autoComplete="off"
                    placeholder="Enter your Number"
                    />
                </div>
                <div className="inputGroup">
                <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateUser;