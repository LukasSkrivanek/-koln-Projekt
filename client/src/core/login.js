import '../App.css';

import { Outlet, Navigate } from "react-router-dom";
import { useState } from "react";

import Button from '@mui/material/Button';
import Axios from 'axios';
import LoginInfo from "../context/loginInfo";

const LogIn = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const login = () => {
        Axios.post('http://localhost:4000/user/login', {
            username: name,
            password: password,
        }).then((response) => {
            if (response.data.message) {
                setErrMsg(response.data.message);
            } else {
                LoginInfo.login = true;
                LoginInfo.id = response.data[0].id;
                LoginInfo.username = response.data[0].username;
                LoginInfo.role = response.data[0].role;

                Navigate("/");
            }
        })
    }

    return (
        <>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div className="card card-signin my-5">
                                <div className="card-body" id="reg">
                                    <h2> Přihlášení </h2>
                                    <div className='new-line'></div>
                                    <form>
                                        <div className="form-group">
                                            <label> Uživatelské jméno </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                autoComplete='off'
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                required />
                                        </div>
                                        <div className='new-line'></div>
                                        <div className="form-group">
                                            <label> Heslo </label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required />
                                            <div className='new-line'></div>
                                            <span className={errMsg ? "help-block red" : "white"}> {errMsg} </span>
                                        </div>
                                        <div className='new-line'></div>
                                        <div className="form-group">
                                            <Button variant="contained" onClick={login}> Přihlásit se </Button>
                                        </div>
                                        <div className='new-line'></div>
                                        <p> Nemáte účet? <a href={"/register"} className="red"> Zaregistrujte se zde! </a> </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
};

export default LogIn;