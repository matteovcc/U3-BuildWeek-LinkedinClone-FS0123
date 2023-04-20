import { Button, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";

const ImageModal = props => {
  const handleClose = () => props.setImageModal(false);

  const [image, setImage] = useState(null);

  const TargetFile = e => {
    console.log("Event", e.target.files[0]);
    if (e.target && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const submitFile = async () => {
    try {
      let formData = new FormData();

      formData.append("profile", image);
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/5fc4ae95b708c200175de88d/picture",
        {
          body: formData,
          method: "POST",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNkMjJmYzIyYTZhYjAwMTQxYTg1NmYiLCJpYXQiOjE2ODE3MjgyNTIsImV4cCI6MTY4MjkzNzg1Mn0.6Ht22tt5eNs5wlp5tEG-7SPSIYZ6s95KvMIHAni3vTg"
          }
        }
      );
      console.log(response);
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal show={props.imageModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Change Image</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <input type="file" onChange={TargetFile} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={submitFile}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ImageModal;
