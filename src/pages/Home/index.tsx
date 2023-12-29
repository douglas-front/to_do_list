import { useEffect } from "react"
import Menu from "../../Components/Menu";
import Cards from "../../Layouts/Cards";
import LoginForm from "../../Layouts/Login";
function Home() {

  useEffect(() => {

    const theme = localStorage.getItem("theme");
  
    if (theme) {
      document.body.className = theme;
    }

    if(!theme){
      localStorage.setItem("theme", "white")
    }
  }, []);
  
  

  return (
    <>
      <Menu/>
      <Cards/>
      <LoginForm/>
    </>

    
  )
}

export default Home
