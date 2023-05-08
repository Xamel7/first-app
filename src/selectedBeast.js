import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function SelectedBeast(props) {
  const [show, setShow] = useState(true);

  const handleClose = () => props.setShow(false);
//   const handleShow = () => setShow(true);
  function handleShow(){
        setShow(true);
    }


  return (
    <div>
   
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.selectedBeast.title}</Modal.Title>
        </Modal.Header>
        <img src={props.selectedBeast.image}></img>
        <Modal.Body>{props.selectedBeast.description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SelectedBeast;