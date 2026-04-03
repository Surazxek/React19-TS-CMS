import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// 2. Import CSS (Relative to this file: ./ means "start in src")
import "./assets/css/global.css";
import RouterConfig from "./config/RouterConfig";



// 3. Render the application
createRoot(document.getElementById("root")!).render(
  <StrictMode>
  
    <RouterConfig />
  </StrictMode>,
);
