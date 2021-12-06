import React from "react";

function Room(props) {
  return (
    <div className="col">
      <div className="card m-2">
        <h6
          className="card-title"
          onClick={() => props.updateSelected(props.room)}
        >
          {props.room.name}
        </h6>
        <img
          className="card-img"
          src={
            require(props.room.type.includes("room")
              ? "../assets/sala.png"
              : "../assets/cocina.png").default
          }
          alt="Place"
          onClick={() => props.updateSelected(props.room)}
        />
      </div>
    </div>
  );
}

export default Room;
