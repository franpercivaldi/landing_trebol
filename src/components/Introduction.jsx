import landingPageData from "../data/data.json";
const { Introduction: introductionData } = landingPageData;

export const Introduction = () => {
  return (
    <div id="introduction">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="intro-text">
              <h1 className="main-title">{introductionData.title}</h1>
              <p>{introductionData.paragraph}</p>
              <a href="#benefits" className="btn btn-custom">
                Saber más
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
