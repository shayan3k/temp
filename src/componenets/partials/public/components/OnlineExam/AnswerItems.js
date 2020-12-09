import React from "react";
export default function AnswerItems({ ...props }) {
  return (
    <div className="form-group">
      <label className="control-label">{props.title}</label>
      <div>
        <div className="custom-control custom-radio">
          <input
            type="radio"
            className="custom-control-input"
            name={props.index}
            id={`${props.index}-1`}
            value="1"
            onChange={props.hanleSetAnswer}
          />
          <label className="custom-control-label" htmlFor={`${props.index}-1`}>
            A
          </label>
        </div>
        <div className="custom-control custom-radio">
          <input
            type="radio"
            className="custom-control-input"
            name={props.index}
            id={`${props.index}-2`}
            value="2"
            onChange={props.hanleSetAnswer}
          />
          <label className="custom-control-label" htmlFor={`${props.index}-2`}>
            B
          </label>
        </div>
        <div className="custom-control custom-radio">
          <input
            type="radio"
            className="custom-control-input"
            name={props.index}
            id={`${props.index}-3`}
            value="3"
            onChange={props.hanleSetAnswer}
          />
          <label className="custom-control-label" htmlFor={`${props.index}-3`}>
            C
          </label>
        </div>
        <div className="custom-control custom-radio">
          <input
            type="radio"
            className="custom-control-input"
            name={props.index}
            id={`${props.index}-4`}
            value="4"
            onChange={props.hanleSetAnswer}
          />
          <label className="custom-control-label" htmlFor={`${props.index}-4`}>
            D
          </label>
        </div>
      </div>
    </div>
  );
}
