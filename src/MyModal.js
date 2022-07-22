import Modal from "../node_modules/react-bootstrap/esm/Modal";
import Button from "../node_modules/react-bootstrap/esm/Button";

function MyModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Card product
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src="https://via.placeholder.com/300px250"  alt={'product'} style={{ borderRadius: '5px', }}/>
                <h4>Product name</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum deserunt explicabo fugit impedit veniam. Blanditiis consequatur deleniti, fugiat illum incidunt ipsa laborum libero nam omnis placeat provident quibusdam ratione voluptates.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MyModal;