/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Container,
  Row,
  Col,
  // Form,
  Button,
  Card,
  Carousel,
  Nav,
} from "react-bootstrap";
import ProfileSideBar from "./ProfileSideBar";
import { useEffect, useState } from "react";

const MainSection = () => {
  const [user, setUser] = useState([]);
  const fetchUser = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNkMjJmYzIyYTZhYjAwMTQxYTg1NmYiLCJpYXQiOjE2ODE3MjgyNTIsImV4cCI6MTY4MjkzNzg1Mn0.6Ht22tt5eNs5wlp5tEG-7SPSIYZ6s95KvMIHAni3vTg",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setUser(data);
      } else {
        console.log("Failed to fetch");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Container className="mt-4">
      <Row>
        <Col lg={9}>
          <div className="profileCard mb-3">
            <Card>
              <Card.Img
                variant="top"
                src="https://up4business.it/blog/wp-content/uploads/2021/10/Sfondo-LinkedIn_-come-cambiarlo-e-personalizzarlo.jpg"
                style={{ height: 350 }}
              />
              <Card.Body>
                <img
                  src={user.image}
                  alt="foto-profilo"
                  width={150}
                  style={{ borderRadius: "50%" }}
                />
                <div className="d-flex justify-content-beetwen">
                  <div className="me-5">
                    <Card.Title className="fs-4 mb-0">
                      {user.name} {user.surname}
                    </Card.Title>
                    <Card.Text className="mt-1 mb-0">{user.title}</Card.Text>
                    <Card.Text className="mb-1">{user.bio}</Card.Text>
                    <Card.Text className="mb-4">
                      <div className="subtitles">
                        {user.area}•
                        <a href="#" className="link-main">
                          {" "}
                          Informazioni di contatto
                        </a>
                      </div>
                    </Card.Text>
                    <div className="mb-4">
                      <Button
                        variant="primary"
                        className="me-2 ms-1"
                        style={{ borderRadius: "20px", fontWeight: "bold" }}
                      >
                        Disponibile per
                      </Button>
                      <Button
                        variant="outline-primary"
                        className="me-2"
                        style={{ borderRadius: "20px", fontWeight: "bold" }}
                      >
                        Aggiungi sezione del profilo
                      </Button>
                      <Button
                        variant="outline-secondary"
                        style={{ borderRadius: "20px", fontWeight: "bold" }}
                      >
                        Altro
                      </Button>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex">
                      <img src="" alt="" />
                      <p>Competences</p>
                    </div>
                  </div>
                </div>
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="holder.js/800x400?text=First slide&bg=373940"
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <div style={{ borderRadius: "5px" }}>
                        <h3>First slide label</h3>
                        <p>
                          Nulla vitae elit libero, a pharetra augue mollis
                          interdum.
                        </p>
                        <a href="#" className="link-main">
                          inizia
                        </a>
                      </div>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="holder.js/800x400?text=Second slide&bg=282c34"
                      alt="Second slide"
                    />

                    <Carousel.Caption>
                      <h3>Second slide label</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="holder.js/800x400?text=Third slide&bg=20232a"
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <h3>Third slide label</h3>
                      <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </Card.Body>
            </Card>
          </div>
          <div className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title className="fs-5 mb-0">Analisi</Card.Title>
                <Card.Text>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-eye-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                  </svg>
                  <span className="subtitles ms-1">Solo per te</span>
                  <div className="d-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-people-fill me-2 mt-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                    </svg>{" "}
                    <div>
                      <h6 className="mt-2 mb-0">Visualizzazioni del profilo</h6>
                      <p className="fs-6">
                        Aggiorna il tuo profilo per <br /> attrarre visitatori.
                      </p>
                    </div>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title className="fs-5 mb-0">Risorse</Card.Title>
                <Card.Text>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-eye-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                  </svg>
                  <span className="subtitles ms-1">Solo per te</span>
                  <div className="d-flex mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="currentColor"
                      className="mercado-match me-2"
                      width="24"
                      height="24"
                      focusable="false"
                    >
                      <path d="M21 12h-1a9 9 0 00-9-9V2a10 10 0 0110 10zM11 5v1a6 6 0 016 6h1a7 7 0 00-7-7zm3 7h1a4 4 0 00-4-4v1a3 3 0 013 3zm-2 0a1 1 0 00-1.82-.54L5.32 6.6a8 8 0 00-.24 8.4 2.33 2.33 0 014.16.68l.88 3.08A8.57 8.57 0 0012 19a8 8 0 004.4-1.32l-4.86-4.86A1 1 0 0012 12zm-5 3a1.32 1.32 0 00-1.27 1L4 22h6l-1.73-6A1.32 1.32 0 007 15z"></path>
                    </svg>
                    <div>
                      <h6 className="mb-0">Modalità creazione di contenuti</h6>
                      <p className="fs-6">
                        Fatti scoprire, metti in risalto i contenuti sul tuo
                        profilo e accedi agli strumenti di creazione
                      </p>
                    </div>
                  </div>
                  <div className="px-2">
                    <hr />
                  </div>
                  <div className="d-flex mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-people-fill me-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                    </svg>{" "}
                    <div>
                      <h6 className="mb-0">La mia rete</h6>
                      <p className="fs-6">
                        Salva e gestisci i tuoi collegamenti e interessi.
                      </p>
                    </div>
                  </div>
                </Card.Text>
                <hr />
                <div className="text-center">
                  <a className="ununderline fw-bold text-secondary" href="#">
                    Mostra tutte le risorse{" "}
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
          <div className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title className="fs-5 mb-0 d-flex split">
                  <h5 className="mb-0">Attività</h5>
                  <Button
                    className="py-0"
                    variant="outline-primary"
                    style={{ borderRadius: "20px", fontWeight: "bold" }}
                  >
                    Avvia un post
                  </Button>
                </Card.Title>
                <Card.Text>
                  <p className="text-primary fw-bold fs-6">followers</p>
                  <div>
                    <h6 className="mb-0">
                      E' da un pò che non pubbliche qualcosa
                    </h6>
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
          <div className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title className="fs-5 mb-0 d-flex split">
                  <h5 className="mb-4">Esperienze</h5>
                  <div>
                    <button
                      className="me-3"
                      style={{ border: "none", backgroundColor: "transparent" }}
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
                          <h6 className="mb-0">EPICODE</h6>
                          <p className="mb-0">course name here</p>
                          <p className="subtitles mb-0">data here</p>
                          <p className="subtitles mb-0">location</p>
                          <p className="mb-0">petences hcomere</p>
                          <p className="mb-0">
                            <span className="link-main">Skills</span> here
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
          <div className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title className="fs-5 mb-0 d-flex split">
                  <h5 className="mb-4">Formazione</h5>
                  <div>
                    <button
                      className="me-3"
                      style={{ border: "none", backgroundColor: "transparent" }}
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
                  <div className="d-flex">
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
                      <div>
                        <h6 className="mb-0">EPICODE</h6>
                        <p className="subtitles">2023 - 2023</p>
                      </div>
                    </div>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Interessi</Card.Title>
                <Nav fill variant="tabs" defaultActiveKey="/home">
                  <Nav.Item>
                    <Nav.Link className="text-secondary" href="#">
                      Aziende
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="text-secondary" eventKey="#">
                      Scuole o università
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Card.Text>
                  <hr />
                  <div className="d-flex mt-3">
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
                      <div>
                        <h6 className="mb-0">EPICODE</h6>
                        <p className="subtitles mb-1">5.511 followers</p>
                        <Button
                          className="py-1"
                          variant="outline-secondary"
                          style={{ borderRadius: "20px", fontWeight: "bold" }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-check2"
                            viewBox="0 0 16 16"
                          >
                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                          </svg>{" "}
                          Già Segui
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>

        <ProfileSideBar />
      </Row>
    </Container>
  );
};

export default MainSection;
