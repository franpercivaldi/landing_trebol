const Footer = () => {
  return (
    <footer className="flex h-[68px] items-center justify-center border-t border-gray-100/10 bg-neutral-950 px-4 text-sm text-gray-300">
      <p className="text-center">
        Made by{" "}
        <a
          href="https://bozziware.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center hover:opacity-90"
        >
          <span style={{ fontFamily: '"JetBrains Mono", monospace' }}>
            <span className="text-white">bozziware</span>
            <span style={{ color: "rgb(53, 212, 119)" }}>_</span>
          </span>
        </a>
      </p>
    </footer>
  );
};

export default Footer;
