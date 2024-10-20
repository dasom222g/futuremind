import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import SubPage from "./pages/SubPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sub/:pageName" element={<SubPage />} />
        {/* <Route path="/smart-solution" element={<SmartSolution />} />
        <Route path="/ourim-makers" element={<OurimMakers />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;
