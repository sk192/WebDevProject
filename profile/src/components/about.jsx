import React from "react";
import "../stylesheet/about.css";
import Card from "react-bootstrap/Card";
import pic from "../images/shweta_pic.jpg";
// import "bootstrap/dist/css/bootstrap.min.css";

const about = () => {
  return (
    <Card className="card" bg="primary">
      <div className="info">HOVER TO SEE WHO I AM
        </div>
      <Card.Img variant="top" src={pic} width="400px" />
      <Card.Body className="overlay">
        <Card.Title className="over">
          <b>Shweta Korulkar</b>
        </Card.Title>
        <Card.Text className="text overlay">
          Hello! I am Shweta Korulkar. I am from India. I completed my bachelors
          from India and now I am pursuing MS in Compuneter Science from
          Portland State University. This is my last semester and I am
          graduating in December 2021. I worked on many academic projects
          including different programming languages and I enjoy myself working on back end
          development, full stack develoment, database develoment and SRE
          projects.
        </Card.Text>
        <Card.Link
          href="https://www.linkedin.com/in/shweta-korulkar-9aa690119/"
          className="link1"
        >
          LinkedIn
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default about;
