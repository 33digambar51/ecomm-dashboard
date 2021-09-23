import React from 'react'
import { Modal, Button } from "react-bootstrap";
const Delete_Brand = ({ showModal, hideModal, confirmModal, id, type, message, itemMessage }) => {
    return (
        <>
            {/* The Modal for Delete Brand */}
            <Modal show={showModal} onHide={hideModal} className="fade justify-content-center">
                <Modal.Header closeButton>
                    <Modal.Title className="w-100 text-center"><h5 className="mb-0">Delete Brand</h5></Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                    <h6 className="text-capitalize mb-0">{message}</h6>
                </Modal.Body>
                <Modal.Footer className="justify-content-center border-0">
                    <Button variant="primary" onClick={() => confirmModal(id)} className="px-4 mr-2 delbd">
                        Yes
                    </Button>
                    <Button variant="danger" onClick={hideModal}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default Delete_Brand;