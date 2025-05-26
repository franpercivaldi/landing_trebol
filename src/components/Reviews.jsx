import landingPageData from "../data/data.json";
const { Reviews: reviewsData } = landingPageData;

export const Reviews = () => {
  return (
    <div id="reviews">
      <div className="container">
        <div className="section-title text-center">
          <h2>Lo que dicen nuestros clientes</h2>
        </div>
        <div className="testimonials-list">
          {reviewsData.map((d) => (
            <div
              key={d.name}
              className="testimonial"
              style={{
                minHeight: "150px",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                gap: "15px",
              }}
            >
              <div className="testimonial-image">
                <img
                  src={d.img}
                  alt={d.name}
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="testimonial-content">
                <p style={{ marginBottom: "8px" }}>"{d.text}"</p>
                <div className="testimonial-meta">- {d.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
