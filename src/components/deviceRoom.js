import React from "react";

function DeviceRoom(props) {
  return (
    <tr>
      <th scope="row">{props.ind}</th>
      <td>{props.dev.id}</td>
      <td>{props.dev.name}</td>
      <td>{props.dev.desired.value}</td>
    </tr>
  );
}

export default DeviceRoom;
