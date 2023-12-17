
import "./cards.scss";
import { IoAdd } from "react-icons/io5";
import gsap from "gsap";
import { useState, useRef } from "react";



const Cards = () => {
  const arrayColor = ['#ffdce2', '#fae5fe', '#f9cdfb'];

  const rf1 = useRef<HTMLDivElement>(null)

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * arrayColor.length);
    return arrayColor[randomIndex];
  };

  const [form, setForm] = useState<string>()

  gsap.to(rf1.current, {
    scale: form === "fill" ? 0 : 1,
    ease: "elastic.out(1,0.5)",
  });

//   gsap.to(rf1.current, {
//     opacity: form !== "fill" ? 1 : 0,
//     scale: form !== "fill" ? 1 : 0,
//     ease: "elastic.out(1,0.9)",
//   });

  const handleFill = () =>{
    setForm('fill')
  }

  return (
    <div className="container-cards">
      <h1>exercises</h1>

      <div className="controler-cards">
          <div className="card" style={{ background: getRandomColor() }}>
            <h1>title</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fugit
              non odit perferendis corrupti. Quam cumque ipsum voluptates
              architecto mollitia.
            </p>
          </div>

        <div className="card__add" onClick={handleFill}>
          <h1>
            <IoAdd />
          </h1>
        </div>
      </div>

      <div className="form-exercice" ref={rf1}>
        <form>
            <h1>Fill the form</h1>
            <label htmlFor="">Title</label>
            <input type="text"/>
            
            <label htmlFor="">Description</label>
            <input type="text" className="area"/>

        </form>
      </div>
    </div>
  );
};

export default Cards;
