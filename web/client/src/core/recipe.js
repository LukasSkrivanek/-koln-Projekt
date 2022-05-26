import '../App.css';

import { Outlet, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import RecipesBody from '../routes/recipe-body';

const Recipe = () => {
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('id');

    useEffect(() => {
        if (!id) {
            navigate("/");
        }
    }, [])

    return (
        <>
            <RecipesBody id={id} />
            <Outlet />
        </>
    )
};

export default Recipe;