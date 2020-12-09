import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../../../../../assets/public/css/index/_commentWrapper.scss";
import PropTypes from "prop-types";
import CommentItems from "./CommentItems";
function CommentWrapper({ ...props }) {
  const [testimonialList, setTestimonialList] = useState([]);

  useEffect(() => {
    getAllTestimonial();
  }, []);

  const getAllTestimonial = () => {
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_HOME_GET_ALL_TESTIMONIAL,
      method: "POST",
      withCredentials: true,
    }).then((res) => {
      try {
        // console.log(res.data.data);
        setTestimonialList(res.data.data ? res.data.data : []);
      } catch (e) {
        // console.log(e);
      }
    });
  };

  return (
    <section className="comment-wrapper wrapper">
      <h2 className="title-section">{props.title}</h2>
      <div className="container">
        {testimonialList.length > 0 &&
          testimonialList
            .slice(0, 4) //set limit 4
            .map((item, index) => (
              <CommentItems
                key={index}
                student_img={item.image}
                createdAt={item.createdAt}
                student_name={item.name}
                comment_text={item.text}
              ></CommentItems>
            ))}

        <span className="arrow1"></span>
        <span className="arrow2"></span>
        <span className="arrow3"></span>
      </div>
    </section>
  );
}
CommentWrapper.propTypes = {
  title: PropTypes.string.isRequired,
};
export default CommentWrapper;
