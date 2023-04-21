/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import {
  Container,
  Row,
  Col,
  // Form,
  Button,
  Card,
  // Nav,
  // Form,
  // Modal,
  ListGroup,
  Form,
  FormGroup,
  FormControl,
} from "react-bootstrap";
// import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allPosts, postComment } from "../redux/actions";
import AddPost from "./AddPost";
import { Link } from "react-router-dom";

const MyHome = () => {
  // const [showModal, setShowModal] = useState(false);
  // const [addComment, setAddComment] = useState("");
  // const handleClose = () => setShowModal(false);
  // const handleShow = () => setShowModal(true);
  // const [isShown, setIsShown] = useState(false);
  // const [showImg, setShowImg] = useState("");
  const listaPosts = useSelector((state) => state.allPosts.content);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [comment, setComments] = useState("");
  const [rate, setRate] = useState("");
  const [elementId, setElementId] = useState("");

  const handleCreateComment = (e) => {
    const newComment = { comment, rate, elementId };
    dispatch(postComment(newComment));
  };

  return (
    <>
      <Container style={{ backgroundColor: "#f3f2ef", marginTop: "20px" }}>
        <Row className="justify-content-center">
          <Col lg={2}>
            <Card>
              <Card.Img
                variant="top"
                src="https://up4business.it/blog/wp-content/uploads/2021/10/Sfondo-LinkedIn_-come-cambiarlo-e-personalizzarlo.jpg"
                style={{ height: "55px" }}
              />
              <Card.Body style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  alt="user-image"
                  width={60}
                  style={{
                    borderRadius: "50%",
                    position: "absolute",
                    right: "35%",
                    top: "5%",
                  }}
                />
                <div className="text-center">
                  <Card.Title className="fs-6 mt-4 mb-4">
                    Ti diamo il benvenuto Dario Salvatore Ferrara!
                  </Card.Title>
                </div>
                <hr className="my-2" />
                <div className="d-flex justify-content-beetwen">
                  <div>
                    <p
                      className="text-secondary mb-0"
                      style={{ fontSize: "small" }}
                    >
                      Collegamenti
                    </p>
                    <p className="mb-1" style={{ fontSize: "small" }}>
                      Espandi la tua rete
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-person-plus-fill mt-1 ms-5"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    <path
                      fill-rule="evenodd"
                      d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                    />
                  </svg>
                </div>
                <hr className="my-2" />
                <div>
                  <p className="subtitles mb-0" style={{ fontSize: "small" }}>
                    accedi a stumenti e informazioni in esclusiva
                  </p>
                  <a
                    className=" text-dark"
                    style={{ fontSize: "small" }}
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      class="mercado-match"
                      width="16"
                      height="16"
                      focusable="false"
                    >
                      <path
                        d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z"
                        fill="#f8c77e"
                      ></path>
                      <path
                        d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z"
                        fill="#e7a33e"
                      ></path>
                    </svg>
                    Prova Premium Gratis
                  </a>
                </div>
                <hr />

                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="currentColor"
                    className="bi bi-bookmark-fill me-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
                  </svg>
                  <span style={{ fontSize: "small" }}> I miei elementi</span>
                </div>
              </Card.Body>
            </Card>
            <Card className="mt-3">
              <Card.Body style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                <div>
                  <a
                    href="#"
                    style={{
                      fontSize: "small",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    Gruppi
                  </a>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <a
                      href="#"
                      style={{
                        fontSize: "small",
                        fontWeight: "bold",
                        textDecoration: "none",
                      }}
                    >
                      Eventi
                    </a>
                    <button
                      style={{ border: "none", backgroundColor: "transparent" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-plus-lg"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                        />
                      </svg>
                    </button>
                  </div>
                  <a
                    href="#"
                    style={{
                      fontSize: "small",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    Hashtag seguiti
                  </a>
                </div>
              </Card.Body>
              <hr className="my-0" />
              <div>
                <button
                  style={{
                    border: "none",
                    backgroundColor: "transparent",
                    width: "100%",
                  }}
                  className="text-secondary py-2"
                >
                  Scropri di più
                </button>
              </div>
            </Card>
          </Col>
          <Col lg={5}>
            <AddPost />
            <hr />

            <Card>
              {listaPosts
                .slice(0)
                .reverse()
                .map((post) => (
                  <div
                    key={post._id}
                    style={{
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      paddingTop: "8px",
                      paddingBottom: "12px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div className="d-flex">
                        <div>
                          <img
                            className="me-2"
                            src={post.user.image}
                            alt="user-img-profile"
                            width={48}
                          />
                        </div>
                        <div>
                          <h6 className="mb-0">
                            {post.user.name} {post.user.surname}
                          </h6>
                          <p
                            className="subtitles mb-0"
                            style={{ fontSize: "small" }}
                          >
                            {post.user.title}
                          </p>
                          <p
                            className="subtitles mb-0"
                            style={{ fontSize: "small" }}
                          >
                            1s - 🌐
                          </p>
                        </div>
                      </div>
                      <div>
                        <button
                          style={{
                            border: "none",
                            backgroundColor: "transparent",
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            data-supported-dps="24x24"
                            fill="currentColor"
                            class="mercado-match"
                            width="24"
                            height="24"
                            focusable="false"
                          >
                            <path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path>
                          </svg>
                        </button>
                        <button
                          style={{
                            border: "none",
                            backgroundColor: "transparent",
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            data-supported-dps="16x16"
                            fill="currentColor"
                            class="mercado-match"
                            width="16"
                            height="16"
                            focusable="false"
                          >
                            <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div>
                      <p>{post.text}</p>
                    </div>
                    <Card.Img src="https://epicode.com/wp-content/uploads/2023/01/Cover-Blog-1.png" />
                    <div className="d-flex justify-content-between mt-1">
                      <div className="ms-2">
                        <a
                          href="#"
                          style={{ textDecoration: "none", fontSize: "small" }}
                          className="text-secondary"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="13"
                            height="13"
                            fill="blue"
                            className="bi bi-hand-thumbs-up mb-1"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                          </svg>{" "}
                          n like
                        </a>
                      </div>
                      <div className="d-flex">
                        <div>
                          <Link
                            to={"/comments/" + post._id}
                            className="me-2 text-secondary"
                            href="#"
                            style={{
                              textDecoration: "none",
                              fontSize: "small",
                            }}
                          >
                            commenti -
                          </Link>
                        </div>
                        <div>
                          <a
                            className="me-3 text-secondary"
                            href="#"
                            style={{
                              textDecoration: "none",
                              fontSize: "small",
                            }}
                          >
                            diffusioni post
                          </a>
                        </div>
                      </div>
                    </div>

                    <hr />
                    <div
                      className="my-1 d-flex"
                      style={{ justifyContent: "space-around" }}
                    >
                      <button
                        style={{
                          border: "none",
                          backgroundColor: "transparent",
                          fontSize: "small",
                          fontWeight: "bold",
                        }}
                        className="text-secondary py-2 mb-1 d-flex align-items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="gray"
                          className="bi bi-hand-thumbs-up mb-1 me-1"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                        </svg>{" "}
                        Consiglia
                      </button>
                      <button
                        style={{
                          border: "none",
                          backgroundColor: "transparent",
                          fontSize: "small",
                          fontWeight: "bold",
                        }}
                        className="text-secondary py-2 mb-1 d-flex align-items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          data-supported-dps="24x24"
                          fill="currentColor"
                          className="mercado-match me-1"
                          width="24"
                          height="24"
                          focusable="false"
                        >
                          <path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"></path>
                        </svg>
                        Commenta
                      </button>
                      <button
                        style={{
                          border: "none",
                          backgroundColor: "transparent",
                          fontSize: "small",
                          fontWeight: "bold",
                        }}
                        className="text-secondary py-2 mb-1 d-flex align-items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-arrow-down-up me-1"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"
                          />
                        </svg>
                        Diffondi il post
                      </button>
                      <button
                        style={{
                          border: "none",
                          backgroundColor: "transparent",
                          fontSize: "small",
                          fontWeight: "bold",
                        }}
                        className="text-secondary py-2 mb-1 d-flex align-items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          data-supported-dps="24x24"
                          fill="currentColor"
                          class="mercado-match"
                          width="24"
                          height="24"
                          focusable="false"
                        >
                          <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
                        </svg>
                        Invia
                      </button>
                    </div>
                    {/* <div>
                      <form onSubmit={handleSubmit}>
                        <input
                          type="text"
                          placeholder="inserisci commento"
                          value={comment}
                          onChange={(e) => setComments(e.target.value)}
                        />
                        <input
                          type="text"
                          value={rate}
                          onChange={(e) => setRate(e.target.value)}
                        />
                        <input
                          type="text"
                          value={elementId}
                          onChange={(e) => setElementId(e.target.value)}
                        />
                        <button type="submit" onClick={handleCreateComment}>
                          +
                        </button>
                      </form>
                    </div> */}
                    <Form onSubmit={handleSubmit}>
                      <FormGroup>
                        <FormControl
                          type="text"
                          placeholder="inserisci commento"
                          value={comment}
                          onChange={(e) => setComments(e.target.value)}
                        ></FormControl>
                      </FormGroup>
                      <Button
                        type="submit"
                        variant="dark"
                        onClick={handleCreateComment}
                      >
                        +
                      </Button>
                    </Form>
                  </div>
                ))}
            </Card>
          </Col>
          <Col lg={3}>
            <Card className="mt-1 py-3 px-2">
              <ListGroup variant="flush">
                <div className="d-flex justify-content-between">
                  <p className="ms-1 fw-bold mb-0">Linkedin Notizie</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    fill="currentColor"
                    class="mercado-match"
                    width="16"
                    height="16"
                    focusable="false"
                  >
                    <path d="M12 2H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zm-3 8v2H7.5A1.5 1.5 0 016 10.5a1.56 1.56 0 01.1-.5l1.08-3h2.13l-1.09 3zm0-3.75A1.25 1.25 0 1110.25 5 1.25 1.25 0 019 6.25z"></path>
                  </svg>
                </div>
                <ListGroup.Item>
                  <div className="d-flex mt-2">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="7"
                        height="7"
                        fill="currentColor"
                        className="bi bi-circle-fill mb-2 me-2"
                        viewBox="0 0 16 16"
                      >
                        <circle cx="8" cy="8" r="8" />
                      </svg>
                    </div>
                    <div>
                      <h6 className="mb-0">Titolo notizia</h6>
                      <p
                        className="text-secondary"
                        style={{ fontSize: "small" }}
                      >
                        data upload - n lettori
                      </p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="7"
                        height="7"
                        fill="currentColor"
                        className="bi bi-circle-fill mb-2 me-2"
                        viewBox="0 0 16 16"
                      >
                        <circle cx="8" cy="8" r="8" />
                      </svg>
                    </div>
                    <div>
                      <h6 className="mb-0">Titolo notizia</h6>
                      <p
                        className="text-secondary"
                        style={{ fontSize: "small" }}
                      >
                        data upload - n lettori
                      </p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="7"
                        height="7"
                        fill="currentColor"
                        className="bi bi-circle-fill mb-2 me-2"
                        viewBox="0 0 16 16"
                      >
                        <circle cx="8" cy="8" r="8" />
                      </svg>
                    </div>
                    <div>
                      <h6 className="mb-0">Titolo notizia</h6>
                      <p
                        className="text-secondary"
                        style={{ fontSize: "small" }}
                      >
                        data upload - n lettori
                      </p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="7"
                        height="7"
                        fill="currentColor"
                        className="bi bi-circle-fill mb-2 me-2"
                        viewBox="0 0 16 16"
                      >
                        <circle cx="8" cy="8" r="8" />
                      </svg>
                    </div>
                    <div>
                      <h6 className="mb-0">Titolo notizia</h6>
                      <p
                        className="text-secondary"
                        style={{ fontSize: "small" }}
                      >
                        data upload - n lettori
                      </p>
                    </div>
                  </div>
                  <div className="d-flex ">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="7"
                        height="7"
                        fill="currentColor"
                        className="bi bi-circle-fill mb-2 me-2"
                        viewBox="0 0 16 16"
                      >
                        <circle cx="8" cy="8" r="8" />
                      </svg>
                    </div>
                    <div>
                      <h6 className="mb-0">Titolo notizia</h6>
                      <p
                        className="text-secondary"
                        style={{ fontSize: "small" }}
                      >
                        data upload - n lettori
                      </p>
                    </div>
                  </div>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Button
                    className="justify-content-center w-100 text-center text-secondary fw-semibold mb-0 border-1 rounded"
                    variant="link"
                    style={{ textDecoration: "none" }}
                  >
                    Visualizza Altro
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-caret-down-fill ms-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MyHome;
