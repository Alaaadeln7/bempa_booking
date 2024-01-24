import { Route, Routes } from "react-router-dom";
import Home from "./views/home/Home";
import Facilities from "./views/facilities/Facilities";
import Rooms from "./views/rooms/Rooms";
import Contact from "./views/contact/Contact";
export default function App() {
  return (
    <main className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
}
