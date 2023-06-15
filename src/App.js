import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/Textform";
// import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import{
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type /**we can give same name as the parameters */,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      document.body.style.color = "white";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode has been enabled.";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils - Light Mode has been enabled.";
    }
  };

  return (
    <>
      <Navbar
        title="Blogs"
        aboutText="About Blogs"
        mode={mode}
        toggleMode={toggleMode}
        />
      <Alert alert={alert} />
      <div className="container my-3">
                     <TextForm heading="Aryan's Blogs" showAlert={showAlert}/>
                     </div>
    </>
  );
}

export default App;
