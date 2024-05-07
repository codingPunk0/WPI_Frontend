import { Routes, Route } from "react-router";
import App from "./App";
import { Display } from "./components/display";

export const RoutedApp = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<App />}
      />
      <Route
        path="/gbffh"
        element={<Display />}
      />
    </Routes>
  );
};
