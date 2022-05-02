import '../App.css';
import Cookies from 'universal-cookie';
import { LayoutContext } from '../context/layoutContext';
import { useContext } from "react";

import Unregistered_Layout from './unreg_layout';
import Registered_Layout from './reg_layout';

import { Outlet, Link, useNavigate } from "react-router-dom";

const Layout = () => {
    const navigate = useNavigate();
    const cookies = new Cookies();
    let {state, changeState} = useContext(LayoutContext);
    let loginVar = cookies.get('login');
    console.log(loginVar)
    return (
        <div>
            {loginVar > 0 ? <Registered_Layout /> : <Unregistered_Layout />}
        </div>
    )
};

export default Layout;