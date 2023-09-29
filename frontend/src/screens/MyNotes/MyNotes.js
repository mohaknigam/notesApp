import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import "./myNotes.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { Accordion, Badge, Card } from "react-bootstrap";

const MyNotes = () => {
  const [notesList, setNotesList] = useState([]);

  const api = "http://localhost:5000";

  const fetchNotes = async () => {
    const response = await axios.get(`${api}/api/notes`);
    setNotesList(response.data);
  };
  useEffect(() => {
    fetchNotes();
  }, []);
  const handleDelete = (id) => {
    const updatedNotesList = notesList.filter((item) => item._id !== id);
    setNotesList(updatedNotesList);
  };

  return (
    <MainScreen title={"Welcome Back"}>
      <Link to={"/createnote"}>
        <button className="btn">Create New Note</button>
      </Link>
      <Accordion flush className="my-accordian">
        {notesList.map((note) => (
          <Accordion.Item
            key={note._id}
            eventKey={note._id}
            className="my-accordian-item"
          >
            <Card style={{ width: "100% !important", marginTop: "15px" }}>
              <Accordion.Header className="my-accordian-header">
                <Card.Header
                  className="card-header"
                  style={{ width: "100% !important" }}
                >
                  <span className="title">{note.title}</span>
                  <div className="btn-container">
                    <Link to={`/note/${note._id}`}>
                      <button
                        className="card-btn"
                        style={{ backgroundColor: "#158CBA" }}
                      >
                        Edit
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(note._id)}
                      className="card-btn"
                      style={{ backgroundColor: "red" }}
                    >
                      Delete
                    </button>
                  </div>
                </Card.Header>
              </Accordion.Header>
              <Accordion.Body className="my-accordian-body">
                <Card.Body>
                  <h4>
                    <Badge bg="success" text="light">
                      Category - {note.category}
                    </Badge>
                  </h4>
                  <blockquote className="blockquote mb-0">
                    <p>{note.content}</p>
                    <footer className="blockquote-footer">
                      created on some date
                    </footer>
                  </blockquote>
                </Card.Body>
              </Accordion.Body>
            </Card>
          </Accordion.Item>
        ))}
      </Accordion>
    </MainScreen>
  );
};

export default MyNotes;
