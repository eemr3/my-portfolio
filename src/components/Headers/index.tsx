import Image from 'next/image';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Header() {
  return (
    <header className="w-full min-h-screen bg-[#494949] flex justify-center items-center bg-fixed">
      <div className="flex justify-center items-center flex-col sm:w-4/12">
        <Image src="/image-header.svg" alt="" width={100} height={100} />
        <h1
          className="
        text-gray-100 text-2xl
        lg:text-4xl 2xl:text-5xl my-5"
        >
          Emerson Moreira
        </h1>
        <div className="border-b-2 border-white w-full my-3" />
        <TypeAnimation
          className="text-sm lg:text-3xl 2xl:text-4xl mt-3 text-gray-100"
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'Desenvolvedor Web Full Stack',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            '',
            500,
            'Desenvolvedor Font-End',
            1000,
            '',
            500,
            'Desenvolvedor Back-End',
            1000,
            '',
            1000,
          ]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
        />
      </div>
    </header>
  );
}
