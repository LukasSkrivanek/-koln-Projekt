import '../App.css';

import { Outlet, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import RecipesBody from '../routes/recipe-body';

const Recipe = () => {
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('id');
    let recipe = {
        id_re: 1,
        title: "Recept 1",
        description: "Ideální osvěžení v parných dnech? Samozřejmě zmrzlina a nejlépe ta domácí! Vyzkoušejte oblíbenou pistáciovou. Čistě přírodní, lahodná a s kousky pistácií potěší i náročnější mlsné jazýčky.",
        process: "Mléko smícháte s celými pistáciemi a pozvolna uvedete do varu, mírně bublající mléko s oříšky vaříte přikryté zhruba 5 minut. Odstavíte a necháte zakryté stranou alespoň 15 minut. Později mléko s pistáciemi tyčovým mixérem rozmíchejte co nejjemněji. Po vychladnutí scedíte přes plátno a důkladně vyždímáte. K tomu pistáciovému základu přidáte moučkový cukr a rozpustíte, přisypete lecithin a guarovou gumu (oba produkty jsou rostlinného původu, seženete v lékárně 100% granulovaný čistý lecithin, zahušťovací guarovou gumu - přášek ve zdravé výživě nebo prodejně pro bezlepkovou dietu). Důkladně rozmíchejte. Přilijete smetanu a mírně promícháte.",
        image: "https://ms1.ostium.cz/instance/web-recepty/jLWrhA7R/h389w574t.jpg",
        portions: 4,
        estimatedTime: 30,
        estimatedPrice: 300,
        createdAt: "2022-05-01 21:01:45",
        category: 1,
        author: 1
    }

    let user = {
            id_u: 1,
            username: "ond",
            email: "ondrakoritak@seznam.cz",
            firstName: "Ondřej",
            lastName: "Koriťák",
            password: "123",
            createdAt: "2022-04-21 10:53:19",
            role: 4
        }

    useEffect(() => {
        if (!id) {
            navigate("/");
        }
    }, [])

    return (
        <>
            <RecipesBody recipe={recipe} user={user} />
            <Outlet />
        </>
    )
};

export default Recipe;