import React from "react";

function SocialMedia(props) {
  return (
    <div className="widget">
      <div className="widget-title">اشتراک گذاری</div>
      <div className="widget-body">
        <ul className="share-social">
          <li>
            <a
              href={`http://www.facebook.com/sharer.php?u=${process.env.REACT_APP_BACKEND_URL}single-course${props.courseId}`}
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>

          <li>
            <a
              href={`http://twitter.com/share?url=${process.env.REACT_APP_BACKEND_URL}single-course${props.courseId}&text=${props.courseTitle}${props.courseDescription}`}
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>

          <li>
            <a
              href={`https://telegram.me/share/url?url=${process.env.REACT_APP_BACKEND_URL}single-course${props.courseId}&text=${props.courseTitle}${props.courseDescription}`}
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <i className="fab fa-telegram"></i>
            </a>
          </li>

          <li>
            <a
              href={`https://plus.google.com/share?url=${process.env.REACT_APP_BACKEND_URL}single-course${props.courseId}`}
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <i className="fab fa-google-plus"></i>
            </a>
          </li>

          <li>
            <a
              href={`http://www.linkedin.com/shareArticle?mini=true&url=${process.env.REACT_APP_BACKEND_URL}single-course${props.courseId}`}
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SocialMedia;
