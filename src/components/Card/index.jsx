import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'
import photo from '../../assets/logo-dio.png'

import { 
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture 
} from './styles';

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground />
        <Content>
            <UserInfo>
                <UserPicture src= {photo} alt="foto perfil" />
                <div>
                    <h4>Tarcísio Alves</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito o curso de HTML e CSS no Bootcamp dio do Global avanade... <strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #JavaScript</h4>
                <p>
                    <FiThumbsUp /> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export {Card}