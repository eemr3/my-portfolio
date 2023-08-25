import Image from 'next/image';
import React from 'react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="max-w-md py-4 px-8 bg-white dark:bg-zinc-800 dark:hover:bg-zinc-900 shadow-lg rounded-lg my-10 hover:scale-110 transition duration-300 ease-in-out">
      <div className="flex justify-center md:justify-end -mt-16">
        <Image
          src={testimonial.avatarUrl.url}
          alt={`Foto de ${testimonial.name}`}
          width={1195}
          height={1600}
          className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
        />
      </div>
      <div className="relative h-[270px]">
        <div>
          <h2 className="text-gray-800 dark:text-white text-xl font-semibold">
            {testimonial.name}
          </h2>
          <p className="mt-1 text-gray-600 dark:text-gray-400 text-sm">
            {testimonial.occupation}
          </p>
          <blockquote className="p-4 my-4 bg-white dark:bg-zinc-800 border-l-4 border-gray-300 overflow-auto max-h-[162px]">
            <p className="text-gray-800 dark:text-white text-sm">{`"${testimonial.testimony}"`}</p>
          </blockquote>
        </div>
        <div className="flex justify-end mt-4 gap-x-2 absolute bottom-0">
          <a
            href={testimonial.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-medium text-indigo-500"
          >
            <i className="devicon-linkedin-plain"></i>
          </a>
          <a
            href={testimonial.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-medium text-indigo-500"
          >
            <i className="devicon-github-original"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
