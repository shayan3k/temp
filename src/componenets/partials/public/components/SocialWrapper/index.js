import React, { useState, useEffect } from "react";
import Axios from "axios";

import "../../../../../assets/public/css/index/_socialWrapper.scss";
import PropTypes from "prop-types";
import SocialItems from "./SocialItems";
import social_img1 from "../../../../../assets/public/images/social/01.jpg";

import Carousel from "react-elastic-carousel";
function SocialWrapper({ ...props }) {
  const [sociallList, setSocialList] = useState([]);
  useEffect(() => {
    getAllSocialMedia();
  }, []);

  const getAllSocialMedia = () => {
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_HOME_GET_ALL_MEDIA,

      method: "POST",
      withCredentials: true,
    }).then((res) => {
      try {
        // console.log(res.data.data);
        setSocialList(res.data.data ? res.data.data : []);
      } catch (e) {
        // console.log(e);
      }
    });
  };

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 650, itemsToShow: 4 },
    { width: 950, itemsToShow: 6, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 6 },
    { width: 1750, itemsToShow: 6 },
  ];

  return (
    <section className="social-wrapper wrapper">
      <h2 className="section-title">
        <span>{props.title}</span>
      </h2>
      <div className="container">
        {sociallList.length > 0 && (
          <Carousel
            itemsToShow={6}
            breakPoints={breakPoints}
            enableAutoPlay
            itemPadding={[5, 5]}
            pagination={false}
          >
            {sociallList.map((item, index) => (
              <SocialItems
                key={index}
                social_img={
                  process.env.REACT_APP_IMAGE_URL +
                  "/" +
                  process.env.REACT_APP_ADMIN_MEIDA_IMAGE_PATH +
                  item.image
                }
                // social_img={item.image}
                link={item.link}
              ></SocialItems>
            ))}

            {/*<SocialItems social_img={social_img1}></SocialItems>
             <SocialItems social_img={social_img2}></SocialItems>
            <SocialItems social_img={social_img3}></SocialItems>
            <SocialItems social_img={social_img4}></SocialItems>
            <SocialItems social_img={social_img5}></SocialItems>
            <SocialItems social_img={social_img1}></SocialItems>
            <SocialItems social_img={social_img2}></SocialItems> */}
          </Carousel>
        )}
      </div>
    </section>
  );
}
SocialWrapper.propTypes = {
  title: PropTypes.string.isRequired,
};
export default SocialWrapper;
