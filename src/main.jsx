import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const rootEl = document.querySelector("#root");
const rootDom = ReactDOM.createRoot(rootEl);
rootDom.render(<App />);
