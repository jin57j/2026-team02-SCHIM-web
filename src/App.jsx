import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ContentsPage from "./pages/ContentsPage.jsx";
import OnboardingPage from "./pages/OnboardingPage.jsx";
import RegisterFlowRoot from "./pages/register/RegisterFlowRoot.jsx";
import RegisterLayout from "./layouts/RegisterLayout.jsx";
import CategoryPage from "./pages/register/CategoryPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OnboardingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/contents" element={<ContentsPage />} />
        <Route path="/register" element={<RegisterFlowRoot />}>
          <Route element={<RegisterLayout currentStep={1} />}>
            <Route index element={<CategoryPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
