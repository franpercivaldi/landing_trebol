const Footer = () => {
  return (
    <footer
      style={{
        height: "68px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 16px",
        boxSizing: "border-box",
        borderTop: "1px solid rgba(243, 244, 246, 0.18)",
        backgroundColor: "#202122",
        color: "#d1d5db",
        fontSize: "14px",
      }}
    >
      <p style={{ margin: 0, textAlign: "center" }}>
        Site built with ❤️ by{" "}
        <a
          href="https://bozziware.vercel.app/"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <span style={{ fontFamily: '"JetBrains Mono", monospace' }}>
            <span style={{ color: "#ffffff" }}>bozziware</span>
            <span style={{ color: "rgb(53, 212, 119)" }}>_</span>
          </span>
        </a>
      </p>
    </footer>
  );
};

export default Footer;
