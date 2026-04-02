import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// 1. Import your custom component
import HomePage from "./pages/auth/home/HomePage";

// 2. Import CSS (Relative to this file: ./ means "start in src")
import "./assets/css/global.css";


// 3. Render the application
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HomePage />
   
  
  </StrictMode>,
);
