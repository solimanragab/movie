import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ContextMoviesProvider } from "./pages/Store";

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <ContextMoviesProvider>
      <App />
    </ContextMoviesProvider>
  </BrowserRouter>
);
