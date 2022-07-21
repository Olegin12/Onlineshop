import Button from '../node_modules/react-bootstrap/esm/Button';
import Card from '../node_modules/react-bootstrap/esm/Card';
import {CardGroup} from "react-bootstrap";

function GoodCard() {
    let cards = [];
    for (let i = 1; i <= 6; i++) {
        cards.push(
                <Card style={{ width: '30%', padding: '1rem', margin: '1rem'}} >
                    <Card.Img variant="top" src="https://via.placeholder.com/286px180" />
                    <Card.Body>
                        <Card.Title>Card Title {i}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    <br/>
                </Card>
        );
    }
    return (
        <Row>
            <CardGroup class='container row'>
                    {cards}
            </CardGroup>
        </Row>
    )
}

export default GoodCard;