import React, {Component} from 'react';

import Container from 'react-bootstrap/cjs/Container';
import Hello from '../Components/HelloBtn';
import Carousel from "../Components/Carousel";

class HomePage extends Component {
    render() {
        return (
            <Container className="p-3">
                <Container className="p-5 mb-4 bg-light rounded-3">
                    <h1 className="header">Welcome To the OnlineShop</h1>
                    <Hello>
                        You are welcome!
                        <span role="img" aria-label="tada">
                        🎉
                        </span>
                    </Hello>
                </Container>
                <Carousel />
            </Container>
        );
    }
}

export default HomePage;