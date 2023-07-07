import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const rootHtmlElement: HTMLElement | null = document.getElementById("root");
if (rootHtmlElement) {
  const root = ReactDOM.createRoot(rootHtmlElement);
  root.render(<App />);
}
