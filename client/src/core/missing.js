import '../App.css';

import { Outlet, Link, useNavigate } from "react-router-dom";

// Ikony
import { MdOutlineError } from "react-icons/md";

const Register = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className='container'>
                <div className='card border-0 shadow my-5'>
                    <div className='card-body p-5'>
                        <h1 className='font-weight-light'> <span className='red'> <MdOutlineError /> Chyba </span> - Stránka "{window.location.href}" neexistuje </h1>
                        <div className='new-line'></div>
                        <p className="lead"> Požadovaná stránka nebyla nalezena. Buď již neexistuje, nebo jste zadali špatný odkaz. Můžete zkusit jednu z následujících možností: </p>
                        <ul className="lead">
                            <li> <span className="lead"> Zkontrolujte zadanou adresu </span> </li>
                            <li> <span className="lead"> Přejděte na <a href="/"> úvodní stránku </a> a pokračujte z ní </span> </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
};

export default Register;