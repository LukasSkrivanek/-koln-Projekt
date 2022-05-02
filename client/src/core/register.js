import '../App.css';

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from '@mui/material/Button';
import Axios from 'axios';

// Ikony
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { BsFillInfoCircleFill } from "react-icons/bs";

const USER_REGEX = /^[A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%+]).{8,24}$/;
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const Register = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('@');
    const [FName, setFName] = useState('');
    const [LName, setLName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword1, setConfirmPassword] = useState('');

    const [validName, setValidName] = useState(false);
    const [validEmail, setValidEmail] = useState(false);
    const [validPassword, setValidPassword] = useState(false);
    const [validConfPassword, setValidConfPassword] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [sucess, setSucess] = useState(false);

    useEffect(() => {
        setValidName(USER_REGEX.test(name));
    }, [name])

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email])

    useEffect(() => {
        setValidPassword(PWD_REGEX.test(password));
        setValidConfPassword(password === confirmPassword1);
    }, [password, confirmPassword1])

    useEffect(() => {
        setErrMsg('');
    }, [name, email, FName, LName, password, confirmPassword1])

    //const [errMsg, setErrMsg] = useState('');

    const register = (e) => {
        e.preventDefault();

        const v1 = USER_REGEX.test(name);
        const v2 = PWD_REGEX.test(password);

        if (!v1 || !v2 || !FName || !LName) {
            setErrMsg("Chybné údaje");
            return;
        }

        try {
            const response = Axios.post('http://localhost:4000/user/create', {
                username: name,
                email: email,
                firstName: FName,
                lastName: LName,
                password: password,
                confirmPassword: confirmPassword1
            })

            setSucess(true);
        } catch (error) {
            if (!error?.response) {
                setErrMsg('Žádná odpověď od serveru');
            } else {
                setErrMsg('Registrace se nezdařila')
            }
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card card-signin my-5">
                        <div className="card-body" id="reg">
                            <h2> Registrace </h2>
                            <div className='new-line'></div>
                            <div className={sucess ? 'sucess_card' : 'hidden'}>
                                <div className='new-line'></div>
                                <div className='sucess_card_inside'>
                                    <BsFillInfoCircleFill /> <span className='space'></span>
                                    <b> Registrace proběhla úspěšně </b>
                                </div>
                                <div className='new-line'></div>
                            </div>
                            <form>
                                <div className="form-group">
                                    <label> Uživatelské jméno
                                        <TiTick className={validName ? "green" : "hidden"} />
                                        <ImCross className={validName || !name ? "hidden" : "red"} />
                                    </label>
                                    <input type="text" name="username" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
                                    <div className={name && !validName ? "new-line" : "hidden"}></div>
                                    <p className={name && !validName ? "" : "hidden"}>
                                        <BsFillInfoCircleFill /> <span className='space'></span>
                                        4 až 24 znaků.<br />
                                        Písmena, čísla, podtržítka, pomlčky povoleny.
                                    </p>
                                </div>
                                <div className='new-line'></div>

                                <div className="form-group">
                                    <label> Email
                                        <TiTick className={validEmail ? "green" : "hidden"} />
                                        <ImCross className={validEmail || email == "@" ? "hidden" : "red"} />
                                    </label>
                                    <input type="text" name="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                                <div className='new-line'></div>

                                <div className="form-group">
                                    <label> Křestní jméno
                                        <TiTick className={FName ? "green" : "hidden"} />
                                    </label>
                                    <input type="text" name="firstName" className="form-control" value={FName} onChange={(e) => setFName(e.target.value)} required />
                                </div>
                                <div className='new-line'></div>

                                <div className="form-group">
                                    <label> Příjmení
                                        <TiTick className={LName ? "green" : "hidden"} />
                                    </label>
                                    <input type="text" name="lastName" className="form-control" value={LName} onChange={(e) => setLName(e.target.value)} required />
                                </div>
                                <div className='new-line'></div>

                                <div className="form-group">
                                    <label> Heslo
                                        <TiTick className={validPassword ? "green" : "hidden"} />
                                        <ImCross className={validPassword || !password ? "hidden" : "red"} />
                                    </label>
                                    <input type="password" name="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                    <div className={!validPassword && password ? "new-line" : "hidden"}></div>
                                    <p className={!validPassword && password ? "" : "hidden"}>
                                        <BsFillInfoCircleFill /> <span className='space'></span>
                                        8 až 24 znaků.<br />
                                        Musí obsahovat malé a velké písmeno, číslo a speciální znak.<br />
                                        Povolené znaky: ! @ # $ % +
                                    </p>
                                </div>
                                <div className='new-line'></div>

                                <div className="form-group">
                                    <label> Potvrzení hesla
                                        <TiTick className={validConfPassword && confirmPassword1 ? "green" : "hidden"} />
                                        <ImCross className={validConfPassword || !confirmPassword1 ? "hidden" : "red"} />
                                    </label>
                                    <input type="password" name="confirmPassword" className="form-control" value={confirmPassword1}
                                        onChange={(e) => setConfirmPassword(e.target.value)} required />
                                </div>
                                <div className='new-line'></div>

                                <div className="form-group">
                                    <Button
                                        variant="contained"
                                        onClick={register}
                                        disabled={!validName || !validEmail || !validPassword || !validConfPassword || !FName || !LName || sucess ? true : false}>
                                        Registrovat se </Button>
                                    <div className='new-line'></div>

                                    <span className={errMsg ? "help-block red" : "help-block hidden"}> {errMsg} </span>
                                    <div className='new-line'></div>
                                    <p> Už máte účet? <a href={"/login"} className="red"> Přihlašte se zde! </a> </p>
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