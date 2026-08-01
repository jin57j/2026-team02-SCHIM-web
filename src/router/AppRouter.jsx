import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import ArchivePage from "../pages/ArchivePage.jsx";
import HeaderShowcasePage from "../pages/HeaderShowcasePage.jsx";
import HomePage from "../pages/HomePage.jsx";
import OnboardingPage from "../pages/OnboardingPage.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import SettingsPage from "../pages/SettingsPage.jsx";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route
          path="/onboarding/nickname"
          element={<OnboardingPage nickname />}
        />
        <Route
          path="/register"
          element={<Navigate to="/register/category" replace />}
        />
        <Route
          path="/register/category"
          element={<RegisterPage currentStep={1} />}
        />
        <Route
          path="/register/search"
          element={<RegisterPage currentStep={2} />}
        />
        <Route
          path="/register/editor"
          element={<RegisterPage currentStep={3} />}
        />
        <Route
          path="/my-cards"
          element={<ArchivePage type="reflectionCard" />}
        />
        <Route
          path="/discoveries"
          element={<ArchivePage type="discoveries" />}
        />
        <Route path="/settings" element={<SettingsPage />} />
        {import.meta.env.DEV && (
          <Route path="/showcase" element={<HeaderShowcasePage />} />
        )}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
