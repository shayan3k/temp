import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import * as serviceWorker from "./serviceWorker";
// import "./assets/css/style.scss";
import "./assets/public/css/plugins/fontawesome.css";
import "bootstrap/dist/js/bootstrap";
import { RecoilRoot } from "recoil";

ReactDOM.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,

  document.getElementById("root")
);

serviceWorker.register({
  onUpdate: (registration) => {
    alert("نسخه جدید BestPlus موجود است\nاستفاده از آخرین نسخه؟");
    if (registration && registration.waiting) {
      registration.waiting.postMessage({ type: "SKIP_WAITING" });
    }
    window.location.reload();
  },
});
