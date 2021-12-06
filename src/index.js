import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { IntlProvider } from "react-intl";
import Es from "./intLocales/es.json";
import En from "./intLocales/en.json";
import Main from "./main";

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale={navigator.language} messages={JsonIntl()}>
      <Main />
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

function JsonIntl() {
  if (navigator.language.toLowerCase() === "es") {
    return Es;
  } else {
    //Puede ser en, en-US, entre otros
    return En;
  }
}

//PWA
serviceWorkerRegistration.register();
