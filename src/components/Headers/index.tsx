import React from 'react';

export default function Header() {
  return (
    <header className="w-full min-h-screen bg-header-texture flex justify-center items-center bg-fixed">
      <div className="flex justify-center items-center flex-col sm:w-4/12">
        <h1 className="text-white sm:text-6xl my-5">Emerson Moreira</h1>
        <div className="border-b-2 border-white w-full my-3"></div>
        <h2 className="text-white sm:text-4xl mt-3">Desenvolvedor Web</h2>
      </div>
    </header>
  );
}
