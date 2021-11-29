
import pic2 from "../images/pic2.jpg";

export default function Contact() {
  return (
    <div className="about-body" role="contentinfo">
      <div className="aboutCard about1">
        <img src={pic2} alt="shwetha-Avatar" className="aboutImg" width="300px" height = "300px"  />
        <div className="aboutContainer">
          <h4 className="about-name">
            <b>Shweta Korulkar</b>
          </h4>
    
          <a
            href="https://github.com/sk192"
            className="about-gitrepo-link"
          >
            GitHub{" "}
            <span className="gitExternalLinkIcon">
              <i className="fa fa-external-link-alt gitExternalLink"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  
  )}
