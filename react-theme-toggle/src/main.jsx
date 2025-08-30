import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./style.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div>theme toggle</div>
  </StrictMode>
);
