import styled, {createGlobalStyle} from "styled-components";
import * as colors from '../config/colors'; //importa tudo de colors
import 'react-toastify/dist/ReactToastify.css';
export default createGlobalStyle` //reset css
    *{
        margin:0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
    }
    body{
        font-family: sans-serif;
        background-color: ${colors.primaryColor};
    }
    html, body, #root{
        height: 100%;
    }
    button{
        cursor:pointer;
        background-color: ${colors.primaryColor};
        border: none;
        padding: 15px;
        color:white;
        border-radius: 5px;
        font-weight: 700;
    }
    a{
        text-decoration: none;
        color:${colors.primaryColor};
    }
    ul{
        list-style: none;
    }

    body .Toastify .Toastify__toast-container .Toastify__toast--success{
        background-color: ${colors.errorColor};
    }
`;

export const Container = styled.section`
    max-width: 360px;
    background-color: #fff;
    margin:30px auto;
    padding: 30px;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;
