import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import SmartSolution from "./pages/SmartSolution";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/smart-solution" element={<SmartSolution />} />
      </Routes>
    </Layout>
  );
}

export default App;
