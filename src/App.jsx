import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function TituloFormulario ({children}) {

  return (
    <h2>{children}</h2>
  )
}

function CampoDeFormulario({children}) {
  return (
    <fieldset>
      {children}
    </fieldset>
  )
}

function Label({children, htmlFor}){
  return (
    <label htmlFor={htmlFor}> 
      {children}
    </label>
  )
}

function CampoDeEntrada(props) {
  return(
    <input {...props}/>
  )
}

function FormularioDeEvento () {

  return (
    <form className="form-evento">
      <TituloFormulario>
        Preencha para criar um evento: 
      </TituloFormulario>     
      <CampoDeFormulario>
        <Label htmlFor='nome'>
          Qual o nome do evento?
        </Label>
        <CampoDeEntrada type="text" id='nome' placeholder='Summer dev hits' name='nomeEvento'/>
      </CampoDeFormulario>
    </form>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <header>
        <img src="/logo.png" alt="Logo do Tecboard na cor branca"/>
        </header>
      <section>
        <img src="/banner.png" alt="Banner do Tecboard"/>
      </section>
      <FormularioDeEvento />
    </main>
  )
}

export default App
