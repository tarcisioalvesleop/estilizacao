//import { Link } from 'react-router-dom';

import photo from '../../assets/logo-dio.png'
//import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import { Header } from "../../components/Header";

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
    return (<>
        <Header autenticado ={true}/>
        <Container>
            <Column flex={3}>
                <Title> Feed </Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
                <UserInfo nome="Tarcísio Alves" image={photo} percentual={35} />
                <UserInfo nome="Tarcísio Alves" image={photo} percentual={50} />
                <UserInfo nome="Tarcísio Alves" image={photo} percentual={75} />
                <UserInfo nome="Tarcísio Alves" image={photo} percentual={80} />
                <UserInfo nome="Tarcísio Alves" image={photo} percentual={15} />
            </Column>
            
        </Container>
    </>)
}

export { Feed }