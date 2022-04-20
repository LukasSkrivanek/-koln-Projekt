import '../App.css';

import { useState } from "react";

import Button from '@mui/material/Button';
import Axios from 'axios';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('@');
    const [FName, setFName] = useState('');
    const [LName, setLName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword1, setConfirmPassword] = useState('');

    //const [errMsg, setErrMsg] = useState('');

    const register = () => {
        Axios.post('http://localhost:4000/user/create', {
            username: name,
            email: email,
            firstName: FName,
            lastName: LName,
            password: password,
            confirmPassword: confirmPassword1
        }).then((response) => {
            console.log(response);
        })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card card-signin my-5">
                        <div className="card-body" id="reg">
                            <h2> Registrace </h2>
                            <div className='new-line'></div>
                            <form>
                                <div className="form-group">
                                    <label> Uživatelské jméno </label>
                                    <input type="text" name="username" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                                    <span className="help-block red"> Username error </span>
                                </div>
                                <div className='new-line'></div>
                                <div className="form-group">
                                    <label> Email </label>
                                    <input type="text" name="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <span className="help-block red"> Email error </span>
                                </div>
                                <div className='new-line'></div>
                                <div className="form-group">
                                    <label> Křestní jméno </label>
                                    <input type="text" name="firstName" className="form-control" value={FName} onChange={(e) => setFName(e.target.value)} />
                                    <span className="help-block red"> First name error </span>
                                </div>
                                <div className='new-line'></div>
                                <div className="form-group">
                                    <label> Příjmení </label>
                                    <input type="text" name="lastName" className="form-control" value={LName} onChange={(e) => setLName(e.target.value)} />
                                    <span className="help-block red"> Last name error </span>
                                </div>
                                <div className='new-line'></div>
                                <div className="form-group">
                                    <label> Heslo </label>
                                    <input type="password" name="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    <span className="help-block red"> Password error </span>
                                </div>
                                <div className='new-line'></div>
                                <div className="form-group">
                                    <label> Potvrzení hesla </label>
                                    <input type="password" name="confirmPassword" className="form-control" value={confirmPassword1} onChange={(e) => setConfirmPassword(e.target.value)} />
                                    <span className="help-block red"> Confirmational password error </span>
                                </div>
                                <div className='new-line'></div>
                                <div className="form-group">
                                    <Button variant="contained" onClick={register}> Registrovat se </Button>
                                    <div className='new-line'></div>
                                    <p> Ještě máte účet? <a href={"/login"} className="red"> Přihlašte se zde! </a> </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Register;