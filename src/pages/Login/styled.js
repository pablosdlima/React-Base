import styled from 'styled-components';

export const Title = styled.h1` //tag h1 foi estilizada para Title
    small{  //small tag filha de title
        font-size: 12pt;
        margin-left: 15px;
        color:darkblue;
    }
    background-color: ${props => props.isRed ? 'red' : 'blue'}; //condição
`;

export const Paragrafo  = styled.p`
    font-size: 80px;
`;

// instalar extensão: vscode-styled-components
//instalar no terminal: npm i styled-components
