import React, { useState } from "react";
import man from "/src/assets/images/man.png"

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sucess, setSucess] = useState("");
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  function submit() {
    if (!email && !message) {
      setError("Please Enter your email and message ");
    }
    if (email && message) {
      if (emailRegex.test(email)) {
        if (message.length<10) {
          setError("please enter message and min chars 10")
        }
       else{
        setError('')
        setSucess("Thank you");
        setEmail("");
        setMessage("");
        setTimeout(() => {
          setSucess('')
        }, 2000);
       }
      }

      if (!emailRegex.test(email)) {
        
        setError('please enter correct email')
      }
      
     
    }
    
  }
  return (
    <>
      <section className="contact">
        <div className="container">
          <div className="box">
            <h2>Write Us</h2>
            <div className="email">
              <i class="fa-solid fa-envelope"></i>
              <input
                type="text"
                placeholder="yasminali7374@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="message">
              <i class="fa-solid fa-message"></i>
              <textarea
                placeholder="Enter your message"
                rows="10"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              ></textarea>
            </div>
            <button onClick={submit}>Send You message</button>
            {error ? <h3 className="error">{error}</h3> : sucess?<h3 className="sucess">{sucess}</h3>:''}
          </div>
          <div className="image">
            <img src={man} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
