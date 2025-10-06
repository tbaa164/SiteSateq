import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./assets/hero-optimizations.css"; // Optimisations spécifiques pour les Hero sections

createRoot(document.getElementById("root")!).render(<App />);
