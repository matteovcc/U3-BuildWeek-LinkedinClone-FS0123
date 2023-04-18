// import { Card, Modal } from "react-bootstrap";
// import { connect } from "react-redux";
// import { showModal, addText } from "../redux/actions";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/actions/index";
import { Button, Card, Form, Modal } from "react-bootstrap";

const Experience = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const [inputValue, setInputValue] = useState("");
  //   const [nameValue, setNameValue] = useState("");
  const [employementValue, setEmployementValue] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [check, setCheck] = useState(false);
  const [date, setDate] = useState("");
  const [industry, setIndustry] = useState("");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState("");

  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem(inputValue));
    // dispatch(addItem(nameValue));
    dispatch(addItem(employementValue));
    dispatch(addItem(companyName));
    dispatch(addItem(location));
    dispatch(addItem(check));
    dispatch(addItem(date));
    dispatch(addItem(industry));
    dispatch(addItem(description));
    dispatch(addItem(skills));
    handleClose();
  };
  const handleSumbit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div>
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
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                ></Form.Control>
              </Form.Group>
              {/* località */}
              <Form.Group>
                <Form.Label>Località</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Es: Bangalore,India"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
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
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
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
      </div>

      <div className="mb-3">
        <Card>
          <Card.Body>
            <Card.Title className="fs-5 mb-0 d-flex split">
              <h5 className="mb-4">Esperienze</h5>
              <div>
                <button
                  className="me-3"
                  style={{ border: "none", backgroundColor: "transparent" }}
                  onClick={handleShow}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-plus-lg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                    />
                  </svg>
                </button>
                <button
                  className="me-2"
                  style={{ border: "none", backgroundColor: "transparent" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-pencil"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                  </svg>
                </button>
              </div>
            </Card.Title>
            <Card.Text>
              <div className="d-flex flex-column">
                <div className="d-flex">
                  <div>
                    <img
                      src="https://media.licdn.com/dms/image/C4E0BAQHYgix-Ynux1A/company-logo_100_100/0/1646830188434?e=1689811200&v=beta&t=oArOJOYE7ZD473jCAUzajl3JIXLkxiTvDx61tGEjeAk"
                      alt="logo"
                      width={48}
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  </div>
                  <div className="d-flex flex-column">
                    <div>
                      <h6 className="mb-0">EPICODE</h6>
                      <p className=" mb-0">course name here</p>
                      <p className="subtitles mb-0">data here</p>
                      <p className="subtitles mb-0">location</p>
                      <p className="mb-0">petences hcomere</p>
                      <p className="mb-0">
                        <span className="link-main">Skills</span> here
                      </p>
                    </div>
                  </div>
                </div>
                <hr className="my-2" />
                <div className="d-flex">
                  <div>
                    <img
                      src="https://media.licdn.com/dms/image/C4E0BAQHYgix-Ynux1A/company-logo_100_100/0/1646830188434?e=1689811200&v=beta&t=oArOJOYE7ZD473jCAUzajl3JIXLkxiTvDx61tGEjeAk"
                      alt="logo"
                      width={48}
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  </div>
                  <div className="d-flex flex-column">
                    <div>
                      <h6 className="mb-0">{inputValue}</h6>
                      <p className="mb-0">
                        {companyName} - {employementValue}
                      </p>
                      <p className="subtitles mb-0">{date}</p>
                      <p className="subtitles mb-0">{location}</p>
                      <p className="mb-0">{description}</p>
                      <p className="mb-0">
                        <span className="link-main">{skills}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Text>
            <hr className="my-2" />
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Experience;
