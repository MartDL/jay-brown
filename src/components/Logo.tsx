export default function Logo({ size = 48 }: { size?: number }) {
  return (
    <svg
      width={size * 5.2}
      height={size * 1.6}
      viewBox="0 0 260 80"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Jay Brown Carpentry Logo"
    >
      {/* Circular hand plane emblem */}
      <circle
        cx="40"
        cy="40"
        r="35"
        stroke="#8a5322"
        strokeWidth="5"
        fill="none"
      />
      <path d="M25 50h30l-5-10 5-10H35l-5 10 5 10Z" fill="#c87b31" />
      {/* Text */}
      <text
        x="85"
        y="40"
        fontFamily="Georgia, serif"
        fontWeight="700"
        fontSize="24"
        fill="#8a5322"
      >
        JB
      </text>
      <text
        x="85"
        y="60"
        fontFamily="Georgia, serif"
        fontWeight="700"
        fontSize="22"
        fill="#8a5322"
      >
        Shopfitting
      </text>
    </svg>
  );
}
