import React from "react";
import { Route, Routes, } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";
function App() {
    return (
        <div>
            <NavBar />

            <Routes>
                <Route path="/about" component={About} />
                <Route path="/login" component={Login} />


                <Route path="/" component={Home} />

            </Routes>
        </div>
    )
}
export default App