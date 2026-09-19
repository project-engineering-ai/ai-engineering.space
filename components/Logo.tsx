export default function Logo({ ...rest }) {
  return (
    <svg
      width="212"
      height="40"
      viewBox="0 0 212 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="ai-engineering"
      {...rest}
    >
      {/* Вордмарк в терминальном стиле: [ai-engineering] — скобки в акцентном цвете #2DF8BB,
          текст наследует currentColor (Navbar красит его через var(--logoColor)) */}
      <text
        x="1"
        y="27"
        fontFamily="'JetBrains Mono', 'Fira Code', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
        fontSize="21"
        fontWeight="700"
        letterSpacing="-0.3"
      >
        <tspan className="ccompli2" fill="#2DF8BB">
          [
        </tspan>
        <tspan className="ccustom" fill="currentColor">
          ai-engineering
        </tspan>
        <tspan className="ccompli2" fill="#2DF8BB">
          ]
        </tspan>
      </text>
    </svg>
  );
}
