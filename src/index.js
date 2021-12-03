import React from "react";
import ReactDOM from "react-dom";
import Spaces from "./components/spaces";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";


ReactDOM.render(
  <React.StrictMode>
    <Spaces />
  </React.StrictMode>,
  document.getElementById("root")
);



//PWA
serviceWorkerRegistration.register();


