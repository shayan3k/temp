import React from "react";

function Footer({ ...props }) {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-6">
            <p>{props.copy_write_text}</p>
          </div>
          <div className="col-sm-6 d-none d-sm-block col">
            <p className="text-left">
              <a href={props.link} target="_blank" rel="noopener noreferrer">
                {props.disiner_text}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
