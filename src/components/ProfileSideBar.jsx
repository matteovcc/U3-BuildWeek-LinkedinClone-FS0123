import { Button, Card, Col, ListGroup } from "react-bootstrap";
// import { Link } from "react-router-dom";
import "../SideBar.css";

const ProfileSideBar = () => {
  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <Col xs={2} className="bg-light">
          {/* Modifica Url */}
          <Card className="py-1 px-1">
            <ListGroup variant="flush">
              <ListGroup.Item>
                {/* <Link> */}
                <p className="text-secondary fw-semibold">
                  Modifica il profilo pubblico e l'URL{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-question-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                  </svg>
                </p>
                {/* </Link> */}
              </ListGroup.Item>
              <ListGroup.Item>
                {/* <Link> */}
                <p className="text-secondary fw-semibold">
                  Aggiungi il tuo profilo in un'altra lingua{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-question-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                  </svg>
                </p>
                {/* </Link> */}
              </ListGroup.Item>
            </ListGroup>
          </Card>
          {/* Profili Consultati */}
          <Card className="mt-1 py-3 px-2">
            <ListGroup variant="flush">
              <p className="ms-3 fw-bold mb-0">Altri profili consultati</p>
              <ListGroup.Item>
                <div className="d-flex align-items-center">
                  <img
                    src="https://picsum.photos/40/40"
                    alt=""
                    className="rounded-circle me-2"
                  />
                  <h6 className="mb-0">Nome Profilo</h6>
                </div>
                <p className="small ms-5 mt-0">
                  Profile Summary m error ut, dolorum molestias vel saepe
                  velituptatum. Modi, quod beatae!
                </p>
                <Button
                  variant="transparent border-1 border-secondary rounded-5 ms-5 py-1 fw-semibold text-secondary"
                  className="btn-grey"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-send me-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                  </svg>{" "}
                  Messaggio{" "}
                </Button>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="d-flex align-items-center">
                  <img
                    src="https://picsum.photos/40/40"
                    alt=""
                    className="rounded-circle me-2"
                  />
                  <h6 className="mb-0">Nome Profilo</h6>
                </div>
                <p className="small ms-5 mt-0">
                  Profile Summary m error ut, dolorum molestias vel saepe
                  velituptatum. Modi, quod beatae!
                </p>
                <Button
                  variant="transparent border-1 border-secondary rounded-5 ms-5 py-1 fw-semibold text-secondary"
                  className="btn-grey"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-send me-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                  </svg>{" "}
                  Messaggio{" "}
                </Button>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="d-flex align-items-center">
                  <img
                    src="https://picsum.photos/40/40"
                    alt=""
                    className="rounded-circle me-2"
                  />
                  <h6 className="mb-0">Nome Profilo</h6>
                </div>
                <p className="small ms-5 mt-0">
                  Profile Summary m error ut, dolorum molestias vel saepe
                  velituptatum. Modi, quod beatae!
                </p>
                <Button
                  variant="transparent border-1 border-secondary rounded-5 ms-5 py-1 fw-semibold text-secondary"
                  className="btn-grey"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-send me-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                  </svg>{" "}
                  Messaggio{" "}
                </Button>
              </ListGroup.Item>
              <ListGroup.Item>
                <p className="text-center fw-semibold mb-0">
                  Visualizza Altro{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-caret-down-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                  </svg>
                </p>
              </ListGroup.Item>
            </ListGroup>
          </Card>
          {/* Persone che potresti conoscere */}
          <Card className="mt-1 py-3 px-2">
            <ListGroup variant="flush">
              <p className="ms-3 fw-bold mb-0">
                Persone che potresti conoscere
              </p>
              <ListGroup.Item>
                <div className="d-flex align-items-center">
                  <img
                    src="https://picsum.photos/40/40"
                    alt=""
                    className="rounded-circle me-2"
                  />
                  <h6 className="mb-0">Nome Profilo</h6>
                </div>
                <p className="small ms-5 mt-0">
                  Profile Summary m error ut, dolorum molestias vel saepe
                </p>
                <Button
                  variant="transparent border-1 border-secondary rounded-5 ms-5 py-1 fw-semibold text-secondary"
                  className="btn-grey"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-person-add me-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                    <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z" />
                  </svg>
                  Collegati{" "}
                </Button>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="d-flex align-items-center">
                  <img
                    src="https://picsum.photos/40/40"
                    alt=""
                    className="rounded-circle me-2"
                  />
                  <h6 className="mb-0">Nome Profilo</h6>
                </div>
                <p className="small ms-5 mt-0">
                  Profile Summary m error ut, dolorum molestias vel saepe
                </p>
                <Button
                  variant="transparent border-1 border-secondary rounded-5 ms-5 py-1 fw-semibold text-secondary"
                  className="btn-grey"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-person-add me-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                    <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z" />
                  </svg>
                  Collegati{" "}
                </Button>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="d-flex align-items-center">
                  <img
                    src="https://picsum.photos/40/40"
                    alt=""
                    className="rounded-circle me-2"
                  />
                  <h6 className="mb-0">Nome Profilo</h6>
                </div>
                <p className="small ms-5 mt-0">
                  Profile Summary m error ut, dolorum molestias vel saepe
                </p>
                <Button
                  variant="transparent border-1 border-secondary rounded-5 ms-5 py-1 fw-semibold text-secondary"
                  className="btn-grey"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-person-add me-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                    <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z" />
                  </svg>
                  Collegati{" "}
                </Button>
              </ListGroup.Item>
              <ListGroup.Item>
                <p className="text-center fw-semibold mb-0">
                  Visualizza Altro{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-caret-down-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                  </svg>
                </p>
              </ListGroup.Item>
            </ListGroup>
          </Card>

          {/* Community : Potrebbe Interessarti */}
          <Card className="mt-1 py-3 px-2">
            <ListGroup variant="flush">
              {/* <ListGroup.Item>Cras justo odio</ListGroup.Item> */}
              <p className="ms-3 fw-bold mb-0">Potrebbe interessarti</p>
              <ListGroup.Item>
                <div className="d-flex align-items-center">
                  <img
                    src="https://picsum.photos/40/40"
                    alt=""
                    className="me-2"
                  />
                  <h6 className="mb-0">Nome Community</h6>
                </div>
                <p className="small ms-5 mt-0">
                  Community Summary m error ut, dolorum molestias vel saepe
                </p>
                <div className="d-flex align-items-center ms-5">
                  <img
                    src="https://picsum.photos/28/28"
                    alt=""
                    className="rounded-circle rounded-5 me-1"
                  />
                  <small>Community Founder</small>
                </div>
                <Button
                  variant="transparent border-1 border-secondary rounded-5 ms-5 mt-2 py-1 fw-semibold text-secondary"
                  className="btn-grey"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-plus-lg me-1"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                    />
                  </svg>
                  Iscriviti{" "}
                </Button>
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <div className="d-flex align-items-center">
                  <img
                    src="https://picsum.photos/40/40"
                    alt=""
                    className="me-2"
                  />
                  <h6 className="mb-0">Nome Community</h6>
                </div>
                <p className="small ms-5 mt-0">
                  Community Summary m error ut, dolorum molestias vel saepe
                </p>
                <div className="d-flex align-items-center ms-5">
                  <img
                    src="https://picsum.photos/28/28"
                    alt=""
                    className="rounded-circle rounded-5 me-1"
                  />
                  <small>Community Founder</small>
                </div>
                <Button
                  variant="transparent border-1 border-secondary rounded-5 ms-5 mt-2 py-1 fw-semibold text-secondary"
                  className="btn-grey"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-plus-lg me-1"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                    />
                  </svg>
                  Iscriviti{" "}
                </Button>
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <div className="d-flex align-items-center">
                  <img
                    src="https://picsum.photos/40/40"
                    alt=""
                    className="me-2"
                  />
                  <h6 className="mb-0">Nome Community</h6>
                </div>
                <p className="small ms-5 mt-0">
                  Community Summary m error ut, dolorum molestias vel saepe
                </p>
                <div className="d-flex align-items-center ms-5">
                  <img
                    src="https://picsum.photos/28/28"
                    alt=""
                    className="rounded-circle rounded-5 me-1"
                  />
                  <small>Community Founder</small>
                </div>
                <Button
                  variant="transparent border-1 border-secondary rounded-5 ms-5 mt-2 py-1 fw-semibold text-secondary"
                  className="btn-grey"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-plus-lg me-1"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                    />
                  </svg>
                  Iscriviti{" "}
                </Button>
              </ListGroup.Item>
              <ListGroup.Item>
                <p className="text-center fw-semibold mb-0">
                  Visualizza Altro{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-caret-down-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                  </svg>
                </p>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </div>
    </>
  );
};

export default ProfileSideBar;
