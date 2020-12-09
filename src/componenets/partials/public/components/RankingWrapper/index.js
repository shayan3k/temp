import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../../../../../assets/public/css/index/_rankingWrapper.scss";
import RankingWrapperItems from "./RankingWrapperItems";
import RankingWrapperSliderItems from "./RankingWrapperSliderItems";
import Carousel from "react-elastic-carousel";
function RankingWrapper({ ...props }) {
  const [topRankInfo, setTopRankInfo] = useState("");
  const [carouselList, setCarouselList] = useState([]);

  useEffect(() => {
    getRankSection();
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 850, itemsToShow: 2 },
    { width: 1150, itemsToShow: 2 },
    { width: 1450, itemsToShow: 2 },
    { width: 1750, itemsToShow: 2 },
  ];
  const getRankSection = () => {
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_HOME_GET_RANK_SECTION,
      method: "POST",
      withCredentials: true,
    })
      .then((res) => {
        try {
          // console.log(res.data.data);
          setTopRankInfo(res.data.data);
          setCarouselList(res.data.data.carousel);
        } catch (e) {
          // console.log(e);
        }
      })
      .catch((e) => {
        // console.log(e);
      });
  };

  return (
    <section className="ranking-wrapper wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="title-box">
              <span>{props.title_box}</span>
            </div>
            <h4 className="title">{props.rank_title}</h4>
            <p dangerouslySetInnerHTML={{ __html: topRankInfo.rank_text }}>
              {/* {topRankInfo.rank_text} */}
            </p>
            <ul>
              <RankingWrapperItems
                title="دبیرستان"
                text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از"
              ></RankingWrapperItems>
              <RankingWrapperItems
                title="آزمون ها"
                text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از"
              ></RankingWrapperItems>
              <RankingWrapperItems
                title="کنکور"
                text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از"
              ></RankingWrapperItems>
            </ul>
          </div>

          <div className="col-md-5">
            <div className="best-title">
              <span>{topRankInfo.rank_image_title}</span>
            </div>
            <div className="ranking-carousel owl-carousel owl-theme">
              {carouselList.length > 0 && (
                <Carousel
                  className="elastic-carousel"
                  itemsToShow={2}
                  itemPadding={[5, 5]}
                  breakPoints={breakPoints}
                  pagination={false}
                >
                  {carouselList.map((item, index) => (
                    <RankingWrapperSliderItems
                      key={index}
                      image={
                        process.env.REACT_APP_IMAGE_URL +
                        "/" +
                        process.env.REACT_APP_ADMIN_TOP_RANK_IMAGE_PATH +
                        item.image
                      }
                      // image={item.image}
                      text={item.subtitle}
                    />
                  ))}
                </Carousel>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RankingWrapper;
