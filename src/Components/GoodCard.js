import Button from 'react-bootstrap/cjs/Button';
import Card from 'react-bootstrap/cjs/Card';
import CardGroup from 'react-bootstrap/cjs/CardGroup';
import MyModal from "./MyModal";
import React from 'react';


function GoodCard() {
    const [modalShow, setModalShow] = React.useState(false);
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
                        <Button variant="primary" onClick={() => setModalShow(true)}>Go somewhere</Button>

                        <MyModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </Card.Body>
                    <br/>
                </Card>
        );
    }
    return (
            <CardGroup class='container row'>
                    {cards}
            </CardGroup>
    )
}

export default GoodCard;