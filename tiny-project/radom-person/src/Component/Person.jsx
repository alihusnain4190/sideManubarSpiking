import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FaBirthdayCake } from "react-icons/fa";
const Person = () => {
  const [person, setPerson] = useState([]);
  const fetchData = async () => {
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
    setPerson(result);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const hadnleFocus = () => {
    console.log("ali");
  };
  return (
    <section>
      <img className="img" src={person.large} alt="no image"></img>
      <div></div>
      <div>
        <BsFillPersonFill onClick={hadnleFocus} className="size" />
        <AiOutlineMail className="size" />
        <FaBirthdayCake className="size" />
      </div>
    </section>
  );
};

export default Person;
