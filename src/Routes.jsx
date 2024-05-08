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
        path="/admin-control-center"
        element={<Display />}
      />
    </Routes>
  );
};
