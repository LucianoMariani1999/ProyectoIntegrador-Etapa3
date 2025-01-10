import React, { useEffect, useState } from 'react';
import "./user.css";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";


const User = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
               const response = await axios.get("http://localhost:8000/api/users");
               setUsers(response.data);
           } catch (error) {
                console.log("Error", error);
            }
        };
        fetchData();
    }, []);

    const deleteUser = async (userId) => {
        await axios.delete(`http://localhost:8000/api/delete/user/${userId}`)
        .then((response) => {
            setUsers((prevUser) => prevUser.filter((user) => user._id !==userId));
            toast.success(response.data.message, { position:"top-right" });
        })
        .catch ((error) => {
            console.log(error);
        });
    };

    return (
        <div className="userTable">
            <Link to="/register" type="button" class="btn btn-primary">Registrarme<i class="fa fa-user-plus" aria-hidden="true"></i></Link>
            
            {users.length=== 0?(
                <div className='noData'>
                    <h3>No Data to display.</h3>
                    <p>Please add New User</p>
                </div>
            ):(
                <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope='col'>S.No.</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Address</th>
                        <th scope='col'>Number</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { users.map((user, index)=> {
                        return (
                            <tr>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.address}</td>
                            <td>{user.Number}</td>
                            <td className='actionButtons'>
                            <Link to={/updateuser/+ user._id} type="button" class="btn btn-info"><i class="fa fa-pencil-square" aria-hidden="true"></i> </Link>
                            <button onClick={() => deleteUser(user._id)} type="button" class="btn btn-danger"><i class="fa fa-trash" aria-hidden="true"></i></button>

                            
                            </td>
                        </tr>
                        );
                    })}
                </tbody>
        </table>
        )}
                
        </div>
    );
};

export default User;