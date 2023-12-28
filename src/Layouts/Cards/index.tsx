import "./cards.scss";
import { IoAdd, IoCloseSharp } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import gsap from "gsap";
import { useState, useRef, useEffect } from "react";

const Cards = () => {
  const [asAdm, setAsAdm] = useState<string>();
  const [updateFlag, setUpdateFlag] = useState<boolean>(false);
  const [request, setRequest] = useState<boolean>(false)
  const [arrayCard, setArrayCard] = useState<Array<{ title: string; description: string; _id: number }>>([]);

  const [form, setForm] = useState<string>("fill");
  const [data, setData] = useState({
    title: "",
    description: "",
  });
  const [modalData , setModalData] = useState({
    title: "teste",
    description: "teste"
  })

  const nameAdm = ["douglas8467", "higor3301", "felipe4590","professor3990"];

  const name = localStorage.getItem("name");


  const rf1 = useRef<HTMLDivElement>(null);
  const rf2 = useRef<HTMLDivElement>(null);
  const rf3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (name && nameAdm.includes(name)) {
      setAsAdm("admin");
    } else {
      setAsAdm("regular");
    }
    // window.alert('clique nos cards para ver melhor')
  }, []);

 

 

  useEffect(() => {
    async function apiRequest() {
      const fetchApi = await fetch(
        "https://api-to-do-list-douglas-front.vercel.app/ex"
      );
      const jsonApi = await fetchApi.json();

      if (jsonApi) {
        setArrayCard(jsonApi);
      }
    }
    apiRequest();
    setRequest(true)
  }, [updateFlag]);

  

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
    });
  };

  const handleSubmit = async () => {
    try {
      const apiPost = await fetch(
        "https://api-to-do-list-douglas-front.vercel.app/ex/post",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      handleFill();
      setUpdateFlag((prevFlag) => !prevFlag);
      window.alert(`saved`);
      console.log(apiPost)
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const apiDelete = await fetch(
        `https://api-to-do-list-douglas-front.vercel.app/ex/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        }
      );

      setUpdateFlag((prevFlag) => !prevFlag);
      window.alert("deleted");
      console.log(apiDelete)
    } catch (error) {
      console.log(error);
    }
  };

  if (!request && asAdm === "regular") {
    return <h1 className="alert">sem exercicios no momento</h1>;
  }
  if(arrayCard.length === 0){
    return <h1 className="alert">loading</h1>
  }

  const modal = (title: string, description: string)=>{

    if (form === "fill") {
      setForm("");
    } else {
      setForm("fill");
    }

    setModalData({
      title: title,
      description: description
    })

    gsap.to(rf3.current, {
      scale: form === "fill" ? 1 : 0,
      opacity: form === "fill" ? 1 : 0,
      zIndex: form === "fill" ? 1 : 0,
      ease: "elastic.out(1,0.8)",
    });
  }

  return (
    <div className="container-cards">
      <h1>exercises</h1>

      <div className="controler-cards">
        {arrayCard.map((card, key) => (
          <div
            key={key}
            className="card"
            
            onClick={()=> modal(`${card.title}`,`${card.description}`)}
          >
            <h1>{card.title}</h1>
            <p>{card.description}</p>

            {asAdm === "admin" ? (
              <button className="delete" onClick={() => handleDelete(card._id)}>
                <MdDeleteForever />
              </button>
            ) : (
              ""
            )}
          </div>
        ))}

        <div className={`card__add ${asAdm}`} onClick={handleFill}>
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
            <input
              type="text"
              placeholder="write a description"
              required
              onChange={(e) => {
                setData({ ...data, title: e.target.value });
              }}
            />

            <label htmlFor="">Description</label>
            <input
              type="text"
              className="area"
              placeholder="write a title"
              required
              onChange={(e) => {
                setData({ ...data, description: e.target.value });
              }}
            />
          </form>
          <div className="submit-div">
            <button className="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className="modal" ref={rf3}>
          <h1>{modalData.title}</h1>
          <p>{modalData.description}</p>
          <button onClick={()=> modal('', '')}><IoCloseSharp/></button>
      </div>
    </div>
  );
};

export default Cards;
