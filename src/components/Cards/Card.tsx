import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import { clsx } from 'clsx';
import Image from 'next/image';
import React from 'react';

interface HoverCardProps {
  imageUrl: string;
  children: React.ReactNode;
}

const HoverCard = ({ imageUrl, children }: HoverCardProps) => {
  return (
    <HoverCardPrimitive.Root>
      <HoverCardPrimitive.Trigger asChild>
        <div
          className={clsx(
            `inline-flex items-center justify-center rounded border 
              dark:border-gray-700 bg-[#fff] p-2.5 dark:bg-gray-900 cursor-pointer`,
          )}
        >
          <Image src={imageUrl} alt="" width={400} height={250} />
        </div>
      </HoverCardPrimitive.Trigger>
      <HoverCardPrimitive.Content
        align="center"
        sideOffset={4}
        className={clsx(
          ' radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down',
          'max-w-md rounded-lg p-4 md:w-full',
          'bg-[#fff] dark:bg-gray-800',
          'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75',
        )}
      >
        <HoverCardPrimitive.Arrow className="fill-current text-[#fff] dark:text-gray-800" />
        {children}
      </HoverCardPrimitive.Content>
    </HoverCardPrimitive.Root>
  );
};

export { HoverCard };
