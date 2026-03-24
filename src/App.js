import { Box } from "@mui/material";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";

const App = () => {
  return (
    <Router>
      {/* <Home /> */}
      <Header />
      <Box>
        <h1>Welcome on Home page</h1>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Box>
    </Router>
  );
};
export default App;
