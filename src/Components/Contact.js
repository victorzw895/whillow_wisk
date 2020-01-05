import React from "react";

const Contact = () => {
  return (
    <div>
      <h2>CONTACT US</h2>
      <div id="contact">
        <input placeholder="Name"></input>
        <input placeholder="E-mail"></input>
        <textarea
          placeholder="Your message..."
          style={{ resize: "none" }}
        ></textarea>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Contact;
