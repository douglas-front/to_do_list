import { GiHamburgerMenu } from "react-icons/gi";
import { PiSignOut } from "react-icons/pi";
import "./menu.scss";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const Menu = () => {
  const [menu, setMenu] = useState<string>("");
  const [color, setColor] = useState<string>("menu-off");

 
  const name = localStorage.getItem("name")

  

  const rf1 = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  const handleMenu = (classN: string) => {
    setMenu((prevClass) => (prevClass === classN ? "" : classN));
  };

  const handleColor = (classN: string) => {
    setColor((prevClass) => (prevClass === classN ? "" : classN));
  };

  const animationColor = () => {
    gsap.to(rf1.current, {
      scale: color === "change" ? 1.5 : 1,
      ease: "elastic.out(1,0.5)",
    });

    gsap.to(rf1.current, {
      opacity: color !== "change" ? 1 : 0,
      scale: color !== "change" ? 1 : 0,
      ease: "elastic.out(1,0.9)",
    });
  };

  const animationText = () =>{
    gsap.fromTo(textRef.current, {
      scale:  0.9,

    },
    {
      scale:  1.1,
      ease: "elastic.out(1,0.7)",
      delay: 0.1
    }
    
    );
  }

  const signOut = () => {
    localStorage.removeItem("name")
    window.open("http://localhost:5173/login", "_self");
  }

  return (
    <div className="menu">
      <div className={`container-menu ${menu}`}>
        <div className="primary">
          <h1>Menu</h1>
          <button onClick={() => {
            handleMenu("menu-on");
            animationText()
          }}>
            <GiHamburgerMenu />
          </button>
        </div>

        <div className="nameUser">
          <h1 ref={textRef}>Welcome <br/>{name}</h1>
        </div>

        <div className="settings">
          <h1>Settings</h1>
          <button
            onClick={() => {
              handleColor("change");
              animationColor();
            }}
          >
            <GiHamburgerMenu />
          </button>
        </div>

        <div className={`change-color ${color}`} ref={rf1}>
          <button>Black</button>
          <button>White</button>
        </div>

        <div className="sign-out">
          <button onClick={signOut}><PiSignOut /></button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
