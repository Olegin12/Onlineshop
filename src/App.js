import Container from '../node_modules/react-bootstrap/esm/Container';
import NavBar from './NavBar';
import Hello from './HelloBtn';
import CarouselImg from './Carousel';
import GoodCard from './GoodCard';
import Footer from "./Footer";

import './App.css';

const App = () => (
    <Container className="p-3">
      <Container className="p-5 mb-4 bg-light rounded-3">
          <NavBar> </NavBar>
        <h1 className="header">Welcome To the OnlineShop</h1>
        <Hello>
          You are welcome!
          <span role="img" aria-label="tada">
          🎉
        </span>

        </Hello>
      </Container>
        <CarouselImg>Hi</CarouselImg>
        <GoodCard>Goods</GoodCard>
        <Footer>Footer</Footer>
    </Container>
);

export default App;