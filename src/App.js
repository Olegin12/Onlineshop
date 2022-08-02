import Container from '../node_modules/react-bootstrap/esm/Container';
import NavBar from './Components/NavBar';

import './App.css';
import Footer from "./Components/Footer";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginFormPage from "./Pages/LoginFormPage";
import React from "react";
import CataloguePage from "./Pages/CataloguePage";

function App() {
    return (
        <Container className="p-5 mb-4 bg-light rounded-3">
            <NavBar> </NavBar>

            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route exact path="/LoginFormPage" element={<LoginFormPage />} />
                    <Route exact path="/CataloguePage" element={<CataloguePage />} />
                </Routes>
            </Router>

            <Footer> </Footer>

        </Container>
    );
}

export default App;