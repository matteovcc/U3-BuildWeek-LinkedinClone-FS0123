/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addItem } from "../redux/actions/index";
import { Button, Card, Form, Modal } from "react-bootstrap";
import EmojiPicker from "emoji-picker-react";

const AddFile = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  // const [showImg, setShowImg] = useState("");
  const [addComment, setAddComment] = useState("");
  const [isShown, setIsShown] = useState(false);

  // const dispatch = useDispatch();

  // const getItems = () => {
  //   // dispatch(addItem(showImg));
  //   // dispatch(addItem(addComment));
  //   handleClose();
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  function handleImage(e) {
    console.log(e.target.files[0]);
  }

  // function handleApi() {
  //   const formData = new FormData();
  //   // formData.append("showImg", showImg);
  // }

  const showEmoji = () => {
    setIsShown(true);
  };

  return (
    <>
      <div>
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Crea un Post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <div className="mb-3">
                <div className="d-flex">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    alt="user-img"
                    width={48}
                    height={48}
                    className="me-3"
                  />
                  <div>
                    <h6 className="mb-0">Name here</h6>
                    <Form>
                      <Form.Select
                        style={{
                          paddingTop: "3px",
                          paddingBottom: "3px",
                          borderRadius: "20px",
                        }}
                      >
                        <option value="">🌐 Chiunque</option>
                      </Form.Select>
                    </Form>
                  </div>
                </div>
              </div>
              <Form.Group controlId="scrivi qualcosa">
                <Form.Control
                  as={"textarea"}
                  placeholder="Di cosa vorresti parlare?"
                  rows={5}
                  value={addComment}
                  onChange={(e) => setAddComment(e.target.value)}
                ></Form.Control>
                <Button onClick={showEmoji}></Button>
                {isShown && (
                  <div>
                    <EmojiPicker></EmojiPicker>
                  </div>
                )}
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <input type="file" name="ciao" onChange={handleImage} />
            {/* <Button onClick={handleApi}>Submit</Button> */}
          </Modal.Footer>
        </Modal>
      </div>

      <div className="mb-3">
        <Card>
          <Card.Body>
            <Card.Title className="fs-5 mb-0 d-flex split">
              <h5 className="mb-0">Attività</h5>
              <Button
                className="py-0"
                variant="outline-primary"
                style={{ borderRadius: "20px", fontWeight: "bold" }}
                onClick={handleShow}
              >
                Avvia un post
              </Button>
            </Card.Title>
            <Card.Text>
              <p className="text-primary fw-bold fs-6">followers</p>
              <div>
                <h6 className="mb-0">E' da un pò che non pubbliche qualcosa</h6>
                <p className="fs-6">
                  I post che condividi o commenti appariranno qui
                </p>
              </div>
            </Card.Text>
            <hr />
            <div className="text-center">
              <a className="ununderline fw-bold text-secondary" href="#">
                Mostra tutte le attività{" "}
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default AddFile;
