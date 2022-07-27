import React from "react";
import { useDispatch } from "react-redux"; //dispara as ações do redux dentro de algum evento.

import * as exampleActions from '../../store/modules/example/actions';
import { Container } from "../../styles/GlobalStyles";
import {Paragrafo, Title} from './styled';
import axios from '../../services/axios'; //retorna promisses

export default function Login(){
    const dispatch = useDispatch();

    function handleClick(e){
        e.preventDefault(); //evita renderização de pagina

        dispatch(exampleActions.ClicaBotaoRequest());
    }

    // React.useEffect(() => {

    //     async function getData(){
    //         const response = await axios.get('/alunos');
    //         const { data } = response; //desctructor
    //         console.log(data);
    //     }

    // }, []); //hooks: função, condição de execução. caso [] esteja vazio, executa uma vez

    return(
        <Container>
            <Title isRed={false}>
                Login
                <small>Oie</small>
            </Title>
            <Paragrafo>Lorem ipsum dolor sit amet</Paragrafo>
            <button type="button" onClick={handleClick}>Enviar</button>
        </Container>
    )
}
