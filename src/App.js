import React, {useState, useEffect} from 'react'
import styled from '@emotion/styled';
import Frase from './components/Frase'

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
  margin-top: 10rem;
`

const Button = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 25%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 5rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;
  :hover{
    cursor: pointer;
    background-size: 180%;
  }

`

function App() {

  // state de frases
  const [frase, guardarFrase] = useState({})

  const consultarAPI = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    const frase = await api.json()
    guardarFrase(frase[0])
  }

  // cargar una frase
  useEffect(() => {
    consultarAPI()
  }, [])

  return (
    <Contenedor>
      <Frase
        frase={frase}
      />       
      <Button
        onClick={consultarAPI}
      >
        Obtener Frase
      </Button>
    </Contenedor>

  );
}

export default App;
