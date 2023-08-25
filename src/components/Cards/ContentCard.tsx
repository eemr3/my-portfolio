import Image from 'next/image';
import React from 'react';

interface ContentCardProps {
  title: string;
  image: string;
}
export function ContentCard({ title, image }: ContentCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      <Image
        className="w-full h-auto"
        src={image}
        width={400}
        height={250}
        alt="product"
      />
      <div className="px-6 py-4">
        <h4 className="mb-3 text-xl dark:text-white text-center uppercase tracking-tight text-gray-800">
          {title}
        </h4>
      </div>
    </div>
  );
}
