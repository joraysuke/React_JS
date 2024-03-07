import Home from "./components/Home"
import Dados from "./components/Dados"
import ComponentePai from "./components/ComponentePai"

function App() {
  
  return (
    <>
    <Home/>
    {/*USANDO O PROPS */}
    <Dados nome ="Fiap" email="fiap@com.br"/>
    {/*CHAMANDO O COMPONENTE PAI*/}
    <ComponentePai/>
    
    </>
  )
}

export default App
