import React, { useEffect, useState } from "react";
import SpaceDetalle from "./spaceDetalle";
import Space from "./space";
import { FormattedMessage } from "react-intl";

function Spaces() {
  const [spaces, setSpaces] = useState([]);
  const [space, setSpace] = useState([]);

  useEffect(() => {
    if (navigator.onLine) {
      fetch(
        "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json"
      )
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem("spaces", JSON.stringify(data));
          setSpaces([...data]);
        });
    } else {
      if (localStorage.getItem("spaces") !== null) {
        let spaces = JSON.parse(localStorage.getItem("spaces"));
        setSpaces([...spaces]);
      }
    }
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h2>
          <FormattedMessage id="MySpaces" />
        </h2>
        <div className="row">
          {spaces.map((s) => (
            <Space place={s} key={s.id} updateSelected={setSpace} />
          ))}
        </div>
      </div>
      <div className="row">
        {space?.id ? <SpaceDetalle place={space} key={"s" + space.id} /> : null}
      </div>
    </div>
  );
}

export default Spaces;
