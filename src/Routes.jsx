import { Routes, Route } from "react-router";
import App from "./App";

export const RoutedApp = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<App />}
      />
    </Routes>
  );
};
