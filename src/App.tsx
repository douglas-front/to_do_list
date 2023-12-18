import { useEffect } from "react"
import Menu from "./Components/Menu"
import Cards from "./Layouts/Cards"
function App() {

  useEffect(() => {
    const exist = localStorage.getItem("name");
  
    if (!exist) {
      console.log("Redirecionando para a página de login");
      window.open("http://localhost:5173/login", "_self");
    } else {
      console.log("Usuário encontrado, não é necessário redirecionar.");
    }
  }, []);
  

  return (
    <>
      <Menu/>
      <Cards/>
    </>
  )
}

export default App
