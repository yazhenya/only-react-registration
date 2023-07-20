import React, { useState, useEffect } from "react";
import "./styles.css";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("Email error");
  const [passwordError, setPasswordError] = useState("Passowrd error");
  const [emailDrty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [isValidForm, setIsValidForm] = useState(true);
  const [Submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (emailError || passwordError) {
      setIsValidForm(false);
      setSubmitted(false);
    } else {
      setIsValidForm(true);
    }
  }, [emailError, passwordError]);
  const blurPassword = (event) => {
    setPassword(event.target.value);
    if (event.target.value.length < 7) {
      setPasswordError("Password Error");
    } else {
      setPasswordError("");
    }
  };
  const blurEmail = (event) => {
    setEmail(event.target.value);
    var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    if (!filter.test(String(event.target.value).toLowerCase())) {
      setEmailError("EmailError");
    } else {
      setEmailError("");
    }
  };
  const blurHundle = (event) => {
    event.preventDefault();
    switch (event.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };
  const successfulMessage = () => {
    return (
      <div className="success" style={{ display: Submitted ? "" : "none" }}>
        <div className="window">
          <h2 className="text-success">Successful registration!</h2>
          <h2 className="text-window">Email: {email}</h2>
          <h2 className="text-window">Password: {password}</h2>
          <a href="/">
            <button className="return">return</button>
          </a>
        </div>
      </div>
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "") {
      setEmailError("Email error");
    }
    if (password === "") {
      setEmailError("Password error");
    } else {
      setSubmitted(true);
      setEmailError("");
      setPasswordError("");
    }
  };
  return (
    <div className="App">
      <h1 className="start-text">Registration form for react only</h1>
      <div className="messages">{successfulMessage()}</div>
      <form className="registration">
        {emailDrty && emailError && (
          <div style={{ color: "red" }}>{emailError}</div>
        )}
        <input
          onChange={(event) => blurEmail(event)}
          onBlur={(event) => blurHundle(event)}
          value={email}
          name="email"
          placeholder="enter your email"
          type="text"
          className="inpt"
        />
        <hr />
        {passwordDirty && passwordError && (
          <div style={{ color: "red" }}>{passwordError}</div>
        )}
        <input
          onChange={(event) => blurPassword(event)}
          onBlur={(event) => blurHundle(event)}
          value={password}
          name="password"
          placeholder="enter your password"
          type="password"
          className="inpt"
        />
        <br />
        <button
          onClick={handleSubmit}
          disabled={!isValidForm}
          type="submit"
          className="btn"
        >
          sign up
        </button>
      </form>
    </div>
  );
}
export default App;
