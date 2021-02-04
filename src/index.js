import React from "react";
import ReactDOM from "react-dom";
//import Main from "./pages/Main";
import Header from "./components/Header"
import Footer from "./components/Footer"
import "./styles/common.css"

const destination = document.querySelector("#wrap");

ReactDOM.render(
    <div>
        <Header />
        {/*<Main />*/}
        <Footer />
    </div>,
    destination
)