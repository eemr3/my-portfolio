import React from 'react';

export default function Footer() {
  return (
    <footer className="footer bg-zinc-900 relative pt-1">
      <div className="container mx-auto px-6"></div>
      <div className="container mx-auto px-6">
        <div className="mt-16 flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-6">
            <p className="lg:text-lg text-zinc-50 font-bold mb-2">
              © 2021 by Emerson Moreira
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
