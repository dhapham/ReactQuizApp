import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const ModalResult = (props) => {
    const { show, setShow, dataModalResult } = props;
    const handleClose = () => setShow(false);

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop='static'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Your result..</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>Total Questions: {dataModalResult.countTotal}</div>
                    <div>Total Correct Answers: {dataModalResult.countCorrect}</div>
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="secondary" onClick={handleClose}>
                        Show answers
                    </Button> */}
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalResult;