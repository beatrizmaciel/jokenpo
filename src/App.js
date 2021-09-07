
import React, { useState, useEffect } from 'react';
import './App.css';
import Box from '/Users/beatrizmaciel/my-app/src/components/box/index.js';
import Button from './components/button/index';
import Footer from './components/footer'

function App() {
  const [myOption, setMyOption] = useState('')
  const [robotChoice, setRobotChoice] = useState('')

  const [myScore, setMyScore] = useState(0)
  const [robotScore, setRobotScore] = useState(0)

  useEffect(() => {
    if (myOption) {
      const options = ["pedra", "papel", "tesoura"]
      const randomNumber = Math.floor(Math.random() * options.length) // Math.floor arredonda
      const robotChoice = options[randomNumber]

      setRobotChoice(options[randomNumber])

      // javascript:
      
      if(robotChoice == myOption) {
        alert("Draw")
      } else if (robotChoice == "papel" && myOption == "pedra"){
        setRobotScore(robotScore + 1)
      } else if (robotChoice == "tesoura" && myOption == "papel"){
        setRobotScore(robotScore + 1)
      } else if  (robotChoice == "pedra" && myOption == "tesoura"){
        setRobotScore(robotScore + 1)
      } else {
        setMyScore(myScore + 1)
      }

    }
  }, [myOption])

  // useEffect(() => {
  //   alert("Você conhece Jokenpo? Escolha pedra, papel ou tesoura e jogue este jogo contra um robô!")
  // }, []) // só da esse alert quando carrega a página

  return (
    <div className="App">
      <Box setOption={ setMyOption } setMyScore={ setMyScore } setRobotScore={ setRobotScore } myScore={myScore} robotScore={robotScore} />
      <Button />
      <Footer />
    </div>
  );
}

export default App;

/** Comentários */
/**
 * 
 *   useEffect(() => {
    alert("mudou a opção para " + opcaoSelecionada)
  }, [opcaoSelecionada]) // o colchete se refere à quando a função será chamada,
                         // se estivesse vazia seria só quando a página carregasse
 * 
 */