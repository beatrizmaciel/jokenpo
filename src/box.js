import React from 'react'
import hello from '../src/assets/img/hello.png';
import scissors from './assets/img/scissors.png';
import stone from './assets/img/stone.png';
import fox from './assets/img/fox.png';
import chatbot from './assets/img/chatbot.png';

function Box(){
    return(
        <div className="box">
            <h1>Pedra, papel e tesoura</h1>
            <p>Escolha sua jogada</p>
            <div className="icon-box">
                <img src={stone} className="icon" alt="Pedra" />
                <img src={hello} className="icon" alt="Papel" />
                <img src={scissors} className="icon" alt="Tesoura" />
            </div>
            <div className="inside-box">
                <div className="game-box">
                <div>
                    Você:
                    <p>0</p>
                </div>
                <div>
                    Computador:
                        <p>0</p>
                    </div>
                </div>
                <div className="game-box-icons">
                    <img src={fox} className="game-icon" alt="Você" />
                    <img src={chatbot} className="game-icon" alt="Computador" /> 
                </div>
            </div>
        </div>
    )
}

export default Box