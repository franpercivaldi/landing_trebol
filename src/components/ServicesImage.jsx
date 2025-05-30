export const ServicesImage = ({ title, largeImage, smallImage }) => {
  return (
    <div className="our-services-item">
      <div className="hover-bg">
        <a href={largeImage} title={title}>
          <div className="hover-text">
            <h3>{title}</h3>
          </div>
          <img
            src={smallImage}
            alt={title}
            style={{
              width: "100%",
              height: "250px",
              objectFit: "cover",
              display: "block",
              borderRadius: "6px",
            }}
          />
        </a>
      </div>
    </div>
  );
};
