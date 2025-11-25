import React from "react";

const TagBox = ({ position, title, subtitle, bg, dots, list }) => {
  return (
    <div className={`tag ${position}`} style={{ background: bg || "white" }}>
      <h4>{title}</h4>
      {subtitle && <p>{subtitle}</p>}

      {dots && (
        <div className="season-dots">
          <span className="dot pink"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <span className="dot purple"></span>
        </div>
      )}

      {list && (
        <ul className="tag-list">
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TagBox;
