import React from "react";

function Space(props) {
  return (
    <div className="col">
      <div className="card m-1 h-130">
        <img
          className="card-img-top"
          src={
            require(props.place.type.includes("house")
              ? "../assets/casa.png"
              : "../assets/apt.png").default
          }
          alt="Lugar"
          onClick={() => props.updateSelected(props.place)}
        />
        <div className="card-body">
          <h6
            className="card-title"
            onClick={() => props.updateSelected(props.place)}
          >
            {props.place.name}
          </h6>
          <p
            className="card-text"
            onClick={() => props.updateSelected(props.place)}
          >
            {props.place.address}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Space;
