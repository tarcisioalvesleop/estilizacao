import React from "react";
import logo from '../../assets/logo-dio.png';
//import photo from '../../assets/foto.jpg';
import { Button } from "../Button";
//import { UserInfo } from "../UserInfo";
import { UserPicture } from "./styles";

import {
    BuscarInputContainer,
    //Column, 
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    //UserPicture,
    Wrapper
} from './styles';

const Header = (autencidado) => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo da dio" />
                    {autencidado ? (
                        <>
                            <BuscarInputContainer>
                                <Input placeholder="Buscar..."/>
                            </BuscarInputContainer>
                            <Menu> Live Code </Menu>
                            <Menu> Global </Menu>
                        </>
                    ) : null}
                    
                </Row>
                <Row>
                    {autencidado ? (
                        <UserPicture src={logo} />
                    ) : (
                        <>
                            <MenuRight href="#">Home</MenuRight>
                            <Button title="Entrar" />
                            <Button title="Cadastrar"/>
                        </>
                    )}                    
                </Row>
            </Container>
        </Wrapper>
        
    )
}

export { Header }