import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/global.css";   // 2. Import CSS (Relative to this file: ./ means "start in src")
import RouterConfig from "./config/RouterConfig";
import { Toaster } from "sonner";



// 3. Render the application
createRoot(document.getElementById("root")!).render(
  <StrictMode>
   <Toaster richColors closeButton />
    <RouterConfig />
  </StrictMode>,
);
