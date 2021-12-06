import React from "react";
import DeviceRoom from "./deviceRoom";
import { FormattedMessage } from "react-intl";

function DevicesRoom(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">ID</th>
          <th scope="col">
            <FormattedMessage id="Device" />
          </th>
          <th scope="col">
            <FormattedMessage id="Value" />
          </th>
        </tr>
      </thead>
      <tbody>
        {props.devs.map((dev, i) => (
          <DeviceRoom dev={dev} key={"dev" + dev.id} ind={i} />
        ))}
      </tbody>
    </table>
  );
}

export default DevicesRoom;
