import React, { useState } from "react";
import ModalPurchase from "../../../shared/components/ModalPurchase";
import DropZoneUploaderMulti from "../../../shared/components/DropZoneUploaderMulti";

function SessionList(props) {
  const [modalState, setModalState] = useState(false);
  const theURL = `${process.env.REACT_APP_BACKEND_URL}${process.env.REACT_APP_CREATE_SESSION_ASSIGNMENT}`;

  return (
    <>
      <div className="curriculum-box">
        <h5 className="title">{props.courseSession.subject}</h5>
        <div className="accordition">
          <ul>
            <li>
              <a
                data-toggle="collapse"
                href={"#session" + props.index}
                role="button"
                aria-expanded="false"
                aria-controls={"session" + props.index}
              >
                ویدیو
              </a>
            </li>
            {props.courseSession.lecture_note && props.enrollmentRecord ? (
              <li>
                <p className="hint--bottom" aria-label="دانلود فایل PDF">
                  <a
                    href={`${
                      process.env.REACT_APP_IMAGE_URL +
                      "/" +
                      process.env
                        .REACT_APP_ADMIN_COURSE_SESSION_LECTURE_NOTE_PATH +
                      props.courseSession.lecture_note
                    }`}
                    target="_blank"
                  >
                    <i className="fas fa-file-pdf"></i>
                  </a>
                </p>
              </li>
            ) : (
              ""
            )}

            <li>
              <p>{props.courseSession.duration + "دقیقه "}</p>
            </li>

            {props.enrollmentRecord ? (
              <li>
                <div className="App">
                  <DropZoneUploaderMulti
                    sessionID={props.courseSession._id}
                    theURL={theURL}
                  />
                </div>
              </li>
            ) : (
              ""
            )}
          </ul>

          <div className="collapse" id={"session" + props.index}>
            {props.enrollmentRecord ? (
              <div className="open-card">
                <span
                  className="d-block"
                  dangerouslySetInnerHTML={{
                    __html: props.courseSession.video_url,
                  }}
                ></span>
              </div>
            ) : (
              <div className="open-card">
                <p>
                  لطفا ابتدا ثبت نام کنید تا به تمام اطلاعات این جلسه دسترسی
                  پیدا کنید.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <ModalPurchase
        modalState={modalState}
        setModalState={setModalState}
        courseSession={props.courseSession}
        course={props.course}
      />
    </>
  );
}
export default SessionList;
