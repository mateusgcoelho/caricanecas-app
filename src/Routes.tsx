import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./screens/Home";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
