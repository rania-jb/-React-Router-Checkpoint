import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Alert } from "react-bootstrap";

const MovieAdd = ({ setMovies, movies }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newMovie, setNewMovie] = useState({});
  const addMovie = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setMovies([...movies, newMovie]);
    handleClose();
    Alert("Movie added successfully!");
  };
  return (
    <div style={{ margin: "10px", textAlign: "center" }}>
      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
  
             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie id</Form.Label>
              <Form.Control
                type="text"
                placeholder="Movie id"
                name="id"
                onChange={addMovie}
              />
            </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Movie title"
                name="title"
                onChange={addMovie}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie poster URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Movie poster URL"
                name="posterURL"
                onChange={addMovie}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie trailer link</Form.Label>
              <Form.Control
                type="text"
                placeholder="Movie trailer link"
                name="trailer"
                onChange={addMovie}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie rating</Form.Label>
              <Form.Control
                type="number"
                placeholder="Movie rating"
                min={0}
                max={10}
                step={0.1}
                name="rating"
                onChange={addMovie}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                onChange={addMovie}
              />
            </Form.Group>
            <Button variant="success" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MovieAdd;
