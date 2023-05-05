import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

if (import.meta.env.PROD) {
    console = {
        ...console,
        log: () => false,
        warn: () => false,
        error: () => false,
        count: () => false,
        debug: () => false,
    };
}

createRoot(document.getElementById("root") as HTMLElement).render(<App />);

/** @param {disable console.log lines in dev mode} */
