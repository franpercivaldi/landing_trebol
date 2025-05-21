export const Reviews = (props) => {
  return (
    <div id="reviews">
      <div className="container">
        <div className="section-title text-center">
          <h2>Lo que dicen nuestros clientes</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <div
                    className="testimonial"
                    style={{
                      minHeight: "230px",
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
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
