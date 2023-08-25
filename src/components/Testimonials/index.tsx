import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import TestimonialCard from './TestimonialCard';

export default function Testimonials({ testimonials }) {
  const testimonialsGroups = [];
  for (let i = 0; i < testimonials.length; i += 3) {
    testimonialsGroups.push(testimonials.slice(i, i + 3));
  }

  return (
    <div
      id="testimonials"
      className="min-h-[700px] py-14 bg-[#efe1bd] dark:bg-[#494949] w-full"
    >
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl text-gray-800 dark:text-[#fff] mb-2 uppercase">
          Depoimentos
        </h2>
        <p className="text-xs md:text-sm text-gray-800 dark:text-[#fff] mt-2 md:mt-3 uppercase">
          O que dizem sobre mim
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-screen-xl mx-auto mt-8">
        {testimonials.map((group) => (
          <TestimonialCard key={group.id} testimonial={group} />
        ))}
      </div>
    </div>
  );
}
