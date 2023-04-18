// import { Card, Modal } from "react-bootstrap";
// import { connect } from "react-redux";
// import { showModal, addText } from "../redux/actions";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/actions/index";
import { Button, Form, Modal } from "react-bootstrap";

const Experience = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem(inputValue));
    handleClose();
  };
  const handleSumbit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div>
        {/* Bottone che attiva il modal */}
        <Button variant="primary" onClick={handleShow}>
          Aggiungi elemento
        </Button>

        {/* Modal */}
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Aggiungi esperienza</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSumbit}>
              {/* qualifica */}
              <Form.Group controlId="qualifica">
                <Form.Label>Qualifica</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Es:Sales Manager"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
              </Form.Group>
              {/* tipo di impiego */}
              {/* <Form.Group controlId="impiego">
                <Form.Label>Tipo di impiego</Form.Label>
                <Form.Select
                  value={inputValue.impiego}
                  onChange={(e) => setInputValue(e.target.value)}
                >
                  <option value="1">Seleziona</option>
                  <option value="2">Tempo pieno</option>
                  <option value="3">Part-Time</option>
                  <option value="4">Freelance</option>
                  <option value="5">Apprendistato</option>
                </Form.Select>
              </Form.Group>
              {/* nome azienda */}
              <Form.Group>
                <Form.Label>Nome Azienda</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Es:Reliance Industries"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                ></Form.Control>
              </Form.Group>
              {/* località */}
              {/* <Form.Group>
                <Form.Label>località</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Es:Bangalore,India"
                  value={inputValue.località}
                  onChange={(e) => setInputValue(e.target.value)}
                ></Form.Control>
              </Form.Group> */}
              {/* checkbox */}
              {/* <Form.Group>
                <Form.Label></Form.Label>
                <Form.Check
                  type="checkbox"
                  label="Attualmente ricopro questo ruolo"
                  checked={inputValue.ruoloRicopertoAttualmente}
                  onChange={(e) => setInputValue(e.target.checked)}
                />
              </Form.Group> */}
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Annulla
            </Button>
            <Button variant="primary" onClick={handleAddItem}>
              Aggiungi
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <p>{inputValue}</p>
    </>
  );
};

export default Experience;
