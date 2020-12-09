import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../../../assets/shared/css/not_found_page.scss";
import { useRecoilState } from "recoil";
import { TriggerIsAuthenticated } from "../../../../../services/Recoils";

function NotFoundPage({ ...props }) {
  const [triggerIsAuthenticated, setTriggerIsAuthenticated] = useRecoilState(
    TriggerIsAuthenticated
  );

  useEffect(() => {
    setTriggerIsAuthenticated(!triggerIsAuthenticated);
  }, []);

  return (
    <section className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 set_center">
            <div className="col-sm-10 col-sm-offset-2 text-center ">
              <div className="four_zero_four_bg">
                <h1 className="text-center ">404</h1>
              </div>

              <div className="contant_box_404">
                <h3 className="h2">{props.title}</h3>

                <p>{props.text}</p>

                <Link to={`${props.link}`} className="link_404">
                  {props.link_text}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFoundPage;
