import React from "react";

export const Card = ({ personData }) => {
  return (
    <div className="card">
      <h2 className="name">{personData.name}</h2>
      <p className="description">{personData.description}</p>
      <h3 className="interestsHeader">Interests</h3>
      <ul className="interestsList">
        {personData.intrests.map((intrest, index) => (
          <li key={index} className="interestItem">
            {intrest}
          </li>
        ))}
      </ul>
      <div className="socialLinks">
        {Object.keys(personData.socialMedia).map((key, index) => (
          <a
            key={index}
            href={personData.socialMedia[key]}
            target="_blank"
            rel="noopener noreferrer"
          >
            {key}
          </a>
        ))}
      </div>
    </div>
  );
};
