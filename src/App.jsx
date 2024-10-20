import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import SmartSolution from "./pages/SmartSolution";
import OurimMakers from "./pages/OurimMakers";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/smart-solution" element={<SmartSolution />} />
        <Route path="/ourim-makers" element={<OurimMakers />} />
      </Routes>
    </Layout>
  );
}

export default App;
