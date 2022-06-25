import '../App.css';

import { Outlet, Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { height } from '@mui/system';

// Ikony
import { BsFillPersonFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";

const Layout = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
                <div className="container" style={{ margin: 0 }}>
                    <a className="navbar-brand" href="/">
                        Placeholder pro logo
                    </a>
                </div>
                <div className="container" style={{ margin: 0 }}>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto layout-ul layout-ul">
                            <li className='nav-item'> <a className='nav-link' href={"/"}> <AiFillHome /> Domů </a> </li>

                            <div className='dropdown-divider' style={{ border: '1px solid rgba(79, 82, 80)' }}></div>
                            <li className='nav-item layout-divider'> <a className='nav-link' href={"/profile?id=1"}> <BsFillPersonFill /> ond </a> </li>

                            <div className='dropdown-divider' style={{ border: '1px solid rgba(79, 82, 80)' }}></div>
                            <li className='nav-item layout-divider'> <a className='nav-link' href={"/#"}> <FiLogOut /> Odhlásit se </a> </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
};

export default Layout;