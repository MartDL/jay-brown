import Image from "next/image";

interface LogoProps {
  size?: number; // pixels
}

export default function LogoWithName({ size = 48 }: LogoProps) {
  return (
    <div
      style={{
        width: size,
        height: size,
        position: "relative",
        flexShrink: 0,
      }}
    >
      <Image
        src="/JB_LOGO_WITH_NAME.svg"
        alt="JB Shopfitting & Construction Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}
