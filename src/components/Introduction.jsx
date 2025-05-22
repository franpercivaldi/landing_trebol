export const Introduction = (props) => {
  return (
    <div id="introduction">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="intro-text">
              <h1 className="main-title">{props.data.title}</h1>
              <p>{props.data.paragraph}</p>
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
