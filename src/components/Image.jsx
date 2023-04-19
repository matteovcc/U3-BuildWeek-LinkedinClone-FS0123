import { Button, Card, Carousel } from "react-bootstrap";
import ImageModal from "./ImageModal";

import { useState } from "react";

const Image = props => {
  const [imageModal, setImageModal] = useState(false);
  return (
    <div className="profileCard mb-3">
      {imageModal ? (
        <Card>
          <Card.Img variant="top" onClick={() => setImageModal(true)} src={props.user.image} />
          <ImageModal fetchUser={props.fetchUser} imageModal={imageModal} setImageModal={setImageModal} />

          <Card.Body>
            <img src={props.user.image} alt="foto-profilo" width={150} style={{ borderRadius: "50%" }} />
            <div className="d-flex justify-content-beetwen">
              <div className="me-5">
                <Card.Title className="fs-4 mb-0">
                  {props.user.name} {props.user.surname}
                </Card.Title>
                <Card.Text className="mt-1 mb-0">{props.user.title}</Card.Text>
                <Card.Text className="mb-1">{props.user.bio}</Card.Text>
                <Card.Text className="mb-4">
                  <div className="subtitles">
                    {props.user.area}•
                    <a href="#" className="link-main">
                      {" "}
                      Informazioni di contatto
                    </a>
                  </div>
                </Card.Text>
                <div className="mb-4">
                  <Button variant="primary" className="me-2 ms-1" style={{ borderRadius: "20px", fontWeight: "bold" }}>
                    Disponibile per
                  </Button>
                  <Button
                    variant="outline-primary"
                    className="me-2"
                    style={{ borderRadius: "20px", fontWeight: "bold" }}>
                    Aggiungi sezione del profilo
                  </Button>
                  <Button variant="outline-secondary" style={{ borderRadius: "20px", fontWeight: "bold" }}>
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
                <img className="d-block w-100" src="holder.js/800x400?text=First slide&bg=373940" alt="First slide" />
                <Carousel.Caption>
                  <div style={{ borderRadius: "5px" }}>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <a href="#" className="link-main">
                      inizia
                    </a>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src="holder.js/800x400?text=Second slide&bg=282c34" alt="Second slide" />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src="holder.js/800x400?text=Third slide&bg=20232a" alt="Third slide" />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Card.Body>
        </Card>
      ) : null}
    </div>
  );
};

export default Image;
