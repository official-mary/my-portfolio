import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CertificatesPage from "./pages/CertificatesPage.jsx";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/certificates" element={<CertificatesPage />} />
    </Routes>
  );
}

export default App;