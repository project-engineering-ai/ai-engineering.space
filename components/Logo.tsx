export default function Logo({ ...rest }) {
  return (
    <svg
      width="232"
      height="40"
      viewBox="0 0 232 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="ai-engineering"
      {...rest}
    >
      {/* Марка в стиле favicon: круг с вырезанным треугольником (fill-rule=evenodd —
          треугольник прозрачный, как в favicon.ico). Цвет наследует var(--logoColor)
          из Navbar — корректно в светлой и тёмной темах */}
      <path
        className="ccustom"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 0a20 20 0 1 0 0 40 20 20 0 0 0 0-40Zm0 8.5L8.8 28.5h22.4L20 8.5Z"
      />
      {/* Вордмарк в терминальном стиле */}
      <text
        x="50"
        y="27"
        fontFamily="'JetBrains Mono', 'Fira Code', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
        fontSize="21"
        fontWeight="700"
        letterSpacing="-0.3"
        className="ccustom"
        fill="currentColor"
      >
        ai-engineering
      </text>
    </svg>
  );
}
