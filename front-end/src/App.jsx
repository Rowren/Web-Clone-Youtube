import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLay from "../src/Layout/MainLay";
import SearchPage from "./Layout/SearchPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLay />} />
        <Route path="/result" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
