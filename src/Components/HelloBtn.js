import React, { useState } from 'react';

import Toast from 'react-bootstrap/cjs/Toast';
import Button from 'react-bootstrap/cjs/Button';

const Hello = ({ children }) => {
    const [show, toggleShow] = useState(false);

    return (
        <>
            {!show && <Button onClick={() => toggleShow(true)}>Hello</Button>}
            <Toast show={show} onClose={() => toggleShow(false)}>
                <Toast.Header>
                    <strong className="mr-auto">Congratulations</strong>
                </Toast.Header>
                <Toast.Body>{children}</Toast.Body>
            </Toast>
        </>
    );
};

export default Hello;
