import { HashRouter, Routes, Route } from "react-router-dom";
import HomepageTOP from "./HomepageTOP";

function App() {
  return (
    <HashRouter>
      <Routes>

        <Route path="/" element={<HomepageTOP />} />

      </Routes>
    </HashRouter>
  );
}

export default App;