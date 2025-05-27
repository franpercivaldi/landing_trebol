import introductionData from "../data/introductionData.json";

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
                {introductionData.button}
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
