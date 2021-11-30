import React from "react";

const footer = () => {
  return (
    <footer className="footer bg-dark">
      <div className="container">
        <div className="row">
          <div className="col col1 ">
            <h4>PORTFOLIO</h4>
            <p>
              <b>
                <em>By: Shweta Korulkar</em>
              </b>
            </p>
          </div>
          <div className="col col2">
            <h4>Powered By</h4>
            <ul className="list-unstyled">
              <li>
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                  <b>ReactJS</b>
                </a>
              </li>

              <li>
                <a
                  href="https://getbootstrap.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <b>Bootstrap</b>
                </a>
              </li>
              <li>
                <a
                  href="https://fontawesome.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <b>Font Awesome</b>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
