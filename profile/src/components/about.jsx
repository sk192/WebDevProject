import React from "react";
import "../stylesheet/about.css";
import Card from "react-bootstrap/Card";
import pic from "../images/shweta_pic.jpg";
// import "bootstrap/dist/css/bootstrap.min.css";

const about = () => {
  return (
    <Card className="card" bg="primary">
      <div className="info">HOVER TO SEE WHO I AM</div>
      <Card.Img variant="top" src={pic} width="400px" />
      <Card.Body className="overlay">
        <Card.Title className="over">
          <b>Shweta Korulkar</b>
        </Card.Title>
        <Card.Text className="text overlay">
          Hello! I am Computer Science graduate student at Portland State
          University. I am graduating in December 2021. I am from India where I
          completed my bachelors and Master of Engineering in computer science.
          I am passionate about coding and also like to do hike, cycling,
          dance, water activity. I love to read books in my free time.
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
