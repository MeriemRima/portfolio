import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl ,role}) => {
  return (
    <Col xs={12} sm={6} md={4} className="mb-4">
      <div className="proj-card">
        <div className="proj-img-container">
          <img src={imgUrl} alt={title} className="proj-img" />
        </div>
        <div className="proj-text">
          <h4>{title}</h4>
          <p>{description}</p>
          {role && <p><strong>Role:</strong> {role}</p>} {/* Display role if provided */}

        </div>
      </div>
    </Col>
  )
}
