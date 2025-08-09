import MainBrandLogo from "./components/MainBrandLogo";
import Quiz from "./components/Quiz";

function App() {
  return (
    <div className="bg-light min-vh-100 py-5">
      <MainBrandLogo
        logoSrc="/soft-logo.webp"
        mainDomain="soft.io.vn"
        dismissible={false}
        altText="Logo Soft"
      />
      <div className="container text-center mb-5">
        <h1 className="fw-bold display-4 text-primary animate__animated animate__fadeInDown">
          Personality Insights Quiz
        </h1>
        <p className="lead text-muted animate__animated animate__fadeIn animate__delay-1s">
          Discover your MBTI type & cognitive functions in just a few minutes!
        </p>
      </div>

      <div className="d-flex align-items-center justify-content-center">
        <Quiz />
      </div>
    </div>
  );
}

export default App;
