import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/logo.svg"
      alt="Logo"
      width={100}
      height={100}
      priority
      className="h-12 w-auto"
    />
  );
}
