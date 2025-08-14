"use client";

import Link from "next/link";
import React, { useState } from "react";

const AnimatedButton = ({
  text,
  l,
  link,
}: {
  text: string;
  l: string;
  link: string;
}) => {
  const [hover, setHover] = useState(false);

  return (
    <>
      <div
        className="relative w-auto h-auto"
        onMouseLeave={() => setHover(false)}
        onMouseEnter={() => setHover(true)}
      >
        <Link
          href={link}
          className="flex justify-between uppercase items-center text-secondary font-bold text-[14px] leading-10 tracking-widest"
        >
          {text + "  "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={25}
            height={7}
            viewBox="0 0 25 7"
            fill="none"
            className="ml-2"
          >
            <path
              d="M20.2283 7L25 3.5L20.231 0L22.1731 3.03333H0V3.96667H22.1731L20.2283 7Z"
              fill="#042A33"
            />
          </svg>
        </Link>

        <div
          className={`absolute top-1 rounded-full w-8 h-8 bg-primary/20 transform transition-transform duration-1000 ease-in-out ${!hover ? "-translate-x-2" : "translate-x-44 " + l}`}
        />
      </div>
    </>
  );
};

export default AnimatedButton;
