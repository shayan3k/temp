import React from "react";
import propTypes from "prop-types";

import "../../../../../assets/public/css/pages/_aboutWrapper.scss";

export default function AboutWrapper({ ...props }) {
  return (
    <section className="about-wrapper wrapper">
      <div className="container">
        <div dangerouslySetInnerHTML={{ __html: `${props.content}` }}></div>
      </div>
    </section>
  );
}

AboutWrapper.propTypes = {
  content: propTypes.string.isRequired,
};
