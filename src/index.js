import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import Counters from "./components/counters";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(<Counters />, document.getElementById("root"));
registerServiceWorker();
