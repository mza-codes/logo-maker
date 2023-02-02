import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

console.log = () => false;
console.warn = () => false;
console.error = () => false;
console.count = () => false;
console.debug = () => false;

createRoot(document.getElementById("root") as HTMLElement).render(<App />);

/** @param {disable console.log lines in dev mode} */