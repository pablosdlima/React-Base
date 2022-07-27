import React from "react";
import {Routes, Route} from 'react-router-dom';
//import MyRoute from './myRoute';
import Login from "../pages/Login";
import Page404 from "../pages/Page404";

export default function Rotas(){
    return(
        <>
            <Routes>
                {/* <Route exact path='/' element={<MyRoute Element={Login}></MyRoute>}/> */}
                <Route path='/' element={<Login/>}/>
                <Route path='*' element={<Page404/>}/>
            </Routes>
        </>
    )
}
