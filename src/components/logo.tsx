import Image from "next/image";
import React from "react";

export default function Logo({
  height,
  width,
}: {
  height: number;
  width: number;
}) {
  return (
    <Image
      height={height}
      width={width}
      className="object-cover"
      alt="Logo"
      src="/logo.png"
    />
  );
}
