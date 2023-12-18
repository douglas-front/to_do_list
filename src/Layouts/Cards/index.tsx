import "./cards.scss";
import { IoAdd, IoCloseSharp } from "react-icons/io5";
import gsap from "gsap";
import { useState, useRef } from "react";

const Cards = () => {
  const arrayColor = ["#ffdce2", "#fae5fe", "#f9cdfb"];
  const arrayCard = [
    {
      title: "title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fugit non odit perferendis corrupti. Quam cumque ipsum voluptates architecto mollitia",
    },
    {
      title: "title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fugit non odit perferendis corrupti. Quam cumque ipsum voluptates architecto mollitia",
    },
    {
      title: "title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fugit non odit perferendis corrupti. Quam cumque ipsum voluptates architecto mollitia",
    },
    {
      title: "title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fugit non odit perferendis corrupti. Quam cumque ipsum voluptates architecto mollitia",
    },
    {
      title: "title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fugit non odit perferendis corrupti. Quam cumque ipsum voluptates architecto mollitia",
    },
    {
      title: "title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fugit non odit perferendis corrupti. Quam cumque ipsum voluptates architecto mollitia",
    },
  ];

  const rf1 = useRef<HTMLDivElement>(null);
  const rf2 = useRef<HTMLDivElement>(null);

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * arrayColor.length);
    return arrayColor[randomIndex];
  };

  const [form, setForm] = useState<string>("fill");

  const handleFill = () => {  
    if (form === "fill") {
      setForm("");
    } else {
      setForm("fill");
    }

    gsap.to(rf1.current, {
      scale: form === "fill" ? 1 : 0,
      opacity: form === "fill" ? 1 : 0,
      zIndex: form === "fill" ? 1 : 0,
      ease: "elastic.out(1,0.8)",
    });
    gsap.to(rf2.current, {
      opacity: form === "fill" ? 1 : 0,
      zIndex: form === "fill" ? 1 : -1,
      ease: "elastic.out(1,0.8)",
    })
  };

  return (
    <div className="container-cards">
      <h1>exercises</h1>

      <div className="controler-cards">
        {arrayCard.map((card, key) => (
          <div
            key={key}
            className="card"
            style={{ background: getRandomColor() }}
          >
            <h1>{card.title}</h1>
            <p>{card.description}</p>
          </div>
        ))}

        <div className="card__add" onClick={handleFill}>
          <h1>
            <IoAdd />
          </h1>
        </div>
      </div>

      <div className="form-main" ref={rf2}>
        <div className="form-exercice" ref={rf1}>
          <div>
            <button onClick={handleFill}>
              <IoCloseSharp />
            </button>
          </div>
          <form>
            <h1>Fill the form</h1>
            <label htmlFor="">Title</label>
            <input type="text" />

            <label htmlFor="">Description</label>
            <input type="text" className="area" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cards;
