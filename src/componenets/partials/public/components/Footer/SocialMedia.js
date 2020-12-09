import React, { useState, useEffect } from "react";
import Axios from "axios";
function SocialMedia() {
  const [socialMediaList, setSocialMediaList] = useState([]);

  useEffect(() => {
    getAllSocialMedia();
  }, []);

  const getAllSocialMedia = () => {
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_HOME_GET_SOCIAL_MEDIA,
      method: "POST",
      withCredentials: true,
    })
      .then((res) => {
        try {
          // console.log(res.data.data);
          setSocialMediaList(res.data.data);
        } catch (e) {
          // console.log(e);
        }
      })
      .catch((e) => {
        // console.log(e);
      });
  };

  return (
    <ul className="social">
      {setSocialMediaList.length > 0 &&
        socialMediaList.map((item, index) => (
          <li key={index}>
            <a
              href={`https://${item.link}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={`fab fa-${item.type}`}></i>
            </a>
          </li>
        ))}
    </ul>
  );
}
export default SocialMedia;
