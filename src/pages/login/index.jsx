import React from 'react'
//import { MdEmail, MdLock } from 'react-icons/md'  //email e senha leftIco={MdEmail}
import { useNavigate } from 'react-router-dom'

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { Column, Container, CriarText, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Wrapper } from './styles';

const Login = () => { 
    const navigate = useNavigate ();

    const handleClickSignin = () => {
        navigate("/feed")
    }
    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias
                     e entrar mais rápido nas empresas mais desejadas. 
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
                    <form>
                        <Input placeholder="E-mail" />
                        <Input placeholder="Senha" type="password" />
                        <Button title="Entrar" variant="primary" onClick={handleClickSignin} type= "button"/>
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText>Criar conta</CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Login }