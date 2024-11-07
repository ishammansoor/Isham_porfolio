import React, { useState } from "react";


import './styles/contactMe.css'

export default function ContactMe() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = (event) => {
    // event.preventDefault()

    alert('sending message')

  }

  return (
    <div
        className="contactme-container"
    >
        <div className="form">
            <h1
                style={{color: "whitesmoke"}}
            >
                Contact Me
            </h1>

            <div>

            </div>
        </div>
    </div>
  );
}



/**
 * <form
            onSubmit={() => sendMessage()}
            className="contactme-form"
        >
            <input
            type="email"
            required
            autocomplete="off"
            name="text"
            className="input"
            placeholder="Email"
        ></input>
        <input
            required
            type="text"
            autocomplete="off"
            name="subject"
            class="input"
            placeholder="Subject"
        ></input>
        <textarea
            required
            type="text"
            name="message"
            class="input"
            placeholder="Type Message here"
        />
        <input
            type="submit"
            aria-label="hello"
        >
        </input>
        </form>
 * 
*/