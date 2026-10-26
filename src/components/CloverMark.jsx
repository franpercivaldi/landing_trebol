import { CLOVER_PATHS, CLOVER_VIEWBOX } from "../assets/cloverPaths";

export const CloverMark = ({ className, title }) => (
  <svg
    className={className}
    viewBox={CLOVER_VIEWBOX}
    fill="currentColor"
    role={title ? "img" : undefined}
    aria-hidden={title ? undefined : true}
    aria-label={title}
  >
    {CLOVER_PATHS.map((d, i) => (
      <path key={i} d={d} />
    ))}
  </svg>
);
