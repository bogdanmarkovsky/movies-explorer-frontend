import React from "react";
import './SectionTitle.css';

function SectionTitle(props) {
  return (
    <h2 id={props.id} className={`section-title` + ((props.title === "Технологии") ? ' section-title_block_techs ' : '')}>{props.title}</h2>
  );
}

export default SectionTitle;
