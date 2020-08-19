import React from "react";
import "../styles/Card.css";

const Card = ({ module }) => {
  return (
    <>
      <div className="card">
        {module.url && (
          <div className="card-img">{<img src={module.url} />}</div>
        )}
        <div className="card-content">
          <div className="card-title">
            {module.title && <h2>{module.title}</h2>}
          </div>
          <div className="card-info">
            {module.no_of_question && (
              <h3>{module.no_of_question} Questions</h3>
            )}
            <div>
              {module.duration.hrs && <small> {module.duration.hrs} Hr </small>}
              {module.duration.min && (
                <small> {module.duration.min} min </small>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
