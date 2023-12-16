import { GiHamburgerMenu } from "react-icons/gi";
import "./menu.scss";
import { useState, useRef } from "react";
import gsap from "gsap";

const Menu = () => {
  const [menu, setMenu] = useState<string>("");
  const [color, setColor] = useState<string>("menu-off");

  const rf1 = useRef<HTMLDivElement>(null);

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
  };

  return (
    <div className="menu">
      <div className={`container-menu ${menu}`}>
        <div className="primary">
          <h1>Menu</h1>
          <button onClick={() => handleMenu("menu-on")}>
            <GiHamburgerMenu />
          </button>
        </div>

        <div className="nameUser">
          <h1>Wellcome user</h1>
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
      </div>
    </div>
  );
};

export default Menu;
