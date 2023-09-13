import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
