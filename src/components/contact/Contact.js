import React, { useContext, useEffect, useRef, useState } from "react";
import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

export default function Contact() {
  const formRef = useRef(null);
  const [done, setDone] = useState(false);
  // const [username, setUsername] = useState("");
  // const [subject, setSubject] = useState("");
  // const [email, setEmail] = useState("");
  // const [textarea, setTextarea] = useState("");
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const handleSubmit = (e) => {
    console.log(formRef);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_rn138ui",
        "template_ta75ivr",
        formRef.current,
        "TPGcw4of2m-buJWZ1"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          // setEmail("");
          // setTextarea("");
          // setUsername("");
          // setSubject("");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  // const handleClick = () => {
  //   formRef.current.value = "";
  // };
  useEffect(() => {
    console.log(formRef);
  });
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +1 1234 556 75
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              contact@lama.dev
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              245 King Street, Touterie Victoria 8520 Australia
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#3333" }}
              type="text"
              placeholder="Name"
              name="user_name"
              // value={username}
              // onChange={(e) => setUsername(e.target.value)}
            />
            <input
              style={{ backgroundColor: darkMode && "#3333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
              // value={subject}
              // onChange={(e) => setSubject(e.target.value)}
            />
            <input
              style={{ backgroundColor: darkMode && "#3333" }}
              type="text"
              placeholder="Email"
              name="user_email"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              style={{ backgroundColor: darkMode && "#3333" }}
              rows="5"
              placeholder="Message"
              name="message"
              // value={textarea}
              // onChange={(e) => setTextarea(e.target.value)}
            />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
}
