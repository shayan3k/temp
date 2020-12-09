import React from "react";
function RankingWrapperSliderItems({ ...props }) {
  return (
    <div className="item">
      <div className="ranking-item">
        <img
          // src={
          //   `${process.env.REACT_APP_IMAGE_URL}/${process.env.REACT_APP_ADMIN_TOP_RANK_IMAGE_PATH}` + props.image
          // }
          src={props.image}
          alt="manshuredanesh"
          title="image"
        />
        <h6>{props.user_name}</h6>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default RankingWrapperSliderItems;
