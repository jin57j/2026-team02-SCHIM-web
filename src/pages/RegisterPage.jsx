import { useNavigate } from "react-router";
import RegisterLayout from "../layouts/RegisterLayout.jsx";

const stepTitles = {
  1: "카테고리를 선택해주세요",
  2: "콘텐츠를 찾아주세요",
  3: "감상을 남겨주세요",
};

function RegisterPage({ currentStep = 1 }) {
  const navigate = useNavigate();

  return (
    <RegisterLayout
      currentStep={currentStep}
      onClose={() => navigate("/")}
      onBack={() => navigate(-1)}
    >
      <section>
        <h1 className="heading-26-sb text-text-cream text-center">
          {stepTitles[currentStep]}
        </h1>
      </section>
    </RegisterLayout>
  );
}

export default RegisterPage;
