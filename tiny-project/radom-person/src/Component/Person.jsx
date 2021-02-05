import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FaBirthdayCake, FaAddressCard, FaPhoneAlt } from "react-icons/fa";
const Person = () => {
  const [person, setPerson] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [value, setvalue] = useState("");
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const fetchData = async () => {
    try {
      const {
        data: { results },
      } = await axios.get("https://randomuser.me/api/");
      const { first, last } = results[0].name;
      const { postcode, city } = results[0].location;
      const { email, phone } = results[0];
      const { password } = results[0].login;
      const { date } = results[0].dob;
      const { large } = results[0].picture;
      const result = {
        email,
        phone,
        password,
        date,
        large,
        city: `${postcode} ${city}`,
        name: `${first} ${last}`,
      };
      setLoading(false);
      setPerson(result);
      setText("name");
      setvalue(result.name);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const hadnleFocus = (e) => {
    if (e.target.classList.contains("icon")) {
      const res = e.target.dataset.label;
      setvalue(person[res]);
      setText(res);
    }
  };
  const handleClick = () => {
    fetchData();
  };
  if (isLoading === true) return "...Loading";
  return (
    <section className="person">
      <img className="img" src={person.large} alt="no image"></img>
      <div>
        <h4>Hi My {text} is</h4>
        <h2>{value}</h2>
      </div>
      <div>
        <button onMouseOver={hadnleFocus} data-label="name" className="icon">
          <BsFillPersonFill />
        </button>
        <button onMouseOver={hadnleFocus} data-label="email" className="icon">
          <AiOutlineMail />
        </button>
        <button onMouseOver={hadnleFocus} data-label="date" className="icon">
          <FaBirthdayCake />
        </button>
        <button onMouseOver={hadnleFocus} data-label="city" className="icon">
          <FaAddressCard />
        </button>
        <button onMouseOver={hadnleFocus} data-label="phone" className="icon">
          <FaPhoneAlt />
        </button>
      </div>
      <button onClick={handleClick}>Random person</button>
    </section>
  );
};

export default Person;
