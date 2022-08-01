import Container from '../node_modules/react-bootstrap/esm/Container';
import NavBar from './Components/NavBar';

import './App.css';
import Footer from "./Components/Footer";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import LoginForm from "./Pages/LoginForm";
import React from "react";
import Catalogue from "./Pages/Catalogue";

function App() {
    return (
        <Container className="p-5 mb-4 bg-light rounded-3">
            <NavBar> </NavBar>

            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route exact path="/LoginForm" element={<LoginForm />} />
                    <Route exact path="/Catalogue" element={<Catalogue />} />
                </Routes>
            </Router>

            <Footer> </Footer>

        </Container>
    );
}

export default App;