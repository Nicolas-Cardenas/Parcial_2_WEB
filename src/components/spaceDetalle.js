import React, { useEffect, useState } from "react";
import DevicesRoom from "./devicesRoom";
import Room from "./room";
import Pie from "./pie";
import { FormattedMessage } from "react-intl";

function SpaceDetalle(props) {
  const [rooms, setRooms] = useState([]);
  const [room, setRoom] = useState({});
  const [pwr, setPwr] = useState([]);

  useEffect(() => {
    let local = props.place.id;
    if (navigator.onLine) {
      fetch(
        "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json"
      )
        .then((res) => res.json())
        .then((data) => {
          let rooms = [...data];
          let room = [...rooms].filter(
            (r) => r.homeId.localeCompare(props.place.id) === 0
          );
          localStorage.setItem(local, JSON.stringify(room));
          setRooms([...room]);
          let pwr = [...room].map((p) => {
            let objeto = {};
            objeto.value = p.powerUsage.value;
            objeto.name = p.name;
            return objeto;
          });
          setPwr([...pwr]);
        });
    } else {
      if (localStorage.getItem(local) !== null) {
        let rooms = JSON.parse(localStorage.getItem(local));
        setRooms([...rooms]);
        let pwr = [...rooms].map((p) => {
          let objeto = {};
          objeto.value = p.powerUsage.value;
          objeto.name = p.name;
          return objeto;
        });
        setPwr([...pwr]);
      }
    }
  }, []);

  return (
    <div className="row">
      <h2>
        <FormattedMessage id="MyRooms" />
      </h2>
      <div className="row">
        <div className="col-6">
          <div className="row">
            {rooms?.map((r, i) => (
              <Room
                key={"r" + r.homeId + " " + i}
                room={r}
                updateSelected={setRoom}
              />
            ))}
          </div>
        </div>
        <div className="col-6">
          {room?.name ? (
            <DevicesRoom key={"d" + room.homeId} devs={room.devices} />
          ) : null}
        </div>
      </div>
      <div className="row">
        {pwr?.length > 0 ? <Pie key={"pw" + room.homeId} data={pwr} /> : null}
      </div>
    </div>
  );
}

export default SpaceDetalle;
