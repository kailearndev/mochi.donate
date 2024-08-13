/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: ContactForm.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 03/06/2023
*/

import { useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [isSent, setIsSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "whoisbl33h",
      "template1",
      e.target,
      "JjC_Nnt4rUsjIsRtz"
    )
      .then(
        (result) => {
          document.getElementById("contact_form").reset();
          setIsSent(true);
          alert('Thank you I will get back to you as soon as possible ! (:');
        },
        (error) => {
          console.error(error);
          setIsSent(false);
        }
      );
  };

  return (
    <div className="justify-center"
      style={{
        backgroundImage:
          "url(https://uploads-ssl.webflow.com/62e3ee10882dc50bcae8d07a/631a5d4631d4c55a475f3e34_noise-50.png)",
        width: "100%",
        height: "95%",
        boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)"
      }}
    >
      <div>
        <h2
          style={{ fontFamily: "Morganite Bold, sans-serif" }}
          className="message text-7xl bg-primary-400 p-2 rounded-xl text-grayscale-200 text-center rounded-br-[0%] relative shadow-2xl"
        >
          <Typewriter words={["LET'S GET IN TOUCH!"]} loop={true} />
          &nbsp;
        </h2>
      </div>
      <div className="w-full flex justify-center">
        <img />
      </div>
    </div>
  );
};

export default ContactForm;