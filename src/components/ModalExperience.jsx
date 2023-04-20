import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { newExperiencesAction } from "../redux/actions";
import ListExperience from "./ListExperience";
// import { addExperience } from "../redux/actions";

const ModalExperience = () => {
  const handleSumbit = (e) => {
    e.preventDefault();
  };

  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const [role, setRole] = useState("");
  const [employementValue, setEmployementValue] = useState("");
  const [company, setCompany] = useState("");
  const [area, setArea] = useState("");
  const [check, setCheck] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [industry, setIndustry] = useState("");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState("");

  const dispatch = useDispatch();

  const handleAddItem = () => {
    const newExperience = {
      role,
      company,
      area,
      description,
      startDate,
      endDate,
    };
    dispatch(newExperiencesAction(newExperience));
    // dispatch(addExperience(newExperience));

    handleClose();
  };

  // useEffect(() => {
  //   // eslint-disable-next-line react-hooks/exhaustive-deps

  // }, []);
  return (
    <>
      <button onClick={handleShow}>APRI IL MODALE</button>
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
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              />
              {/* {console.log(inputValue)} */}
            </Form.Group>
            {/* tipo di impiego */}
            <Form.Group controlId="impiego">
              <Form.Label>Tipo di impiego</Form.Label>
              <Form.Select
                value={employementValue}
                onChange={(e) => setEmployementValue(e.target.value)}
              >
                <option value="">Seleziona</option>
                <option value="Tempo pieno">Tempo pieno</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Freelance">Freelance</option>
                <option value="Apprendistato">Apprendistato</option>
              </Form.Select>
            </Form.Group>
            {/* nome azienda */}
            <Form.Group>
              <Form.Label>Nome Azienda</Form.Label>
              <Form.Control
                type="text"
                placeholder="Es: Reliance Industries"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              ></Form.Control>
            </Form.Group>
            {/* località */}
            <Form.Group>
              <Form.Label>Località</Form.Label>
              <Form.Control
                type="text"
                placeholder="Es: Bangalore,India"
                value={area}
                onChange={(e) => setArea(e.target.value)}
              ></Form.Control>
            </Form.Group>
            {/* checkbox */}
            <Form.Group className="my-3">
              <Form.Check
                type="checkbox"
                label="Attualmente ricopro questo ruolo"
                checked={check}
                onChange={(e) => setCheck(e.target.checked)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Data di inizio</Form.Label>
              <Form.Control
                type="datetime-local"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Data di Fine</Form.Label>
              <Form.Control
                type="datetime-local"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Settore</Form.Label>
              <Form.Control
                type="text"
                placeholder="Es:Sviluppo Web"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Descrizione</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="qualifica">
              <Form.Label>Skills</Form.Label>
              <Form.Control
                type="text"
                placeholder="Le tue Skills"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Annulla
          </Button>
          <Button variant="primary" onClick={handleAddItem}>
            Salva
          </Button>
        </Modal.Footer>
      </Modal>
      <ListExperience />
    </>
  );
};

export default ModalExperience;
