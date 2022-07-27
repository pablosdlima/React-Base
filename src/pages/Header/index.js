import React from "react";
import {FaHome, FaUserAlt, FaSignInAlt} from 'react-icons/fa'; //npm i react-icons
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux"; //pega as ações do estado disparadas

import { Nav } from "./styled";

export default function Header(){

    const botaoClicado = useSelector(state => state.example.botaoClicado);

    return (
        <Nav>
            <Link to="/"><FaHome size={35}/></Link>
            <Link to="/login"><FaUserAlt size={35}/></Link>
            <Link to="/asas"><FaSignInAlt size={35}/></Link>
            {botaoClicado ? 'Clicado' : 'Não Clicado'}
        </Nav>
    )
}
