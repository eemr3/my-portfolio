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
    <HoverCardPrimitive.Root openDelay={500}>
      <HoverCardPrimitive.Trigger asChild>
        <div
          className={clsx(
            `inline-flex items-center justify-center rounded border
              dark:border-gray-700 bg-gray-100 p-2.5 dark:bg-gray-900 cursor-pointer`,
          )}
        >
          <Image src={imageUrl} alt="" width={400} height={250} />
        </div>
      </HoverCardPrimitive.Trigger>
      <HoverCardPrimitive.Content
        align="center"
        sideOffset={5}
        className={clsx(
          'data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade w-[300px] rounded-md bg-white p-5 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all',
          'max-w-md rounded-lg p-4 md:w-full',
          'bg-gray-100 dark:bg-gray-800',
          'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75',
        )}
      >
        <HoverCardPrimitive.Arrow className="fill-current text-gray-100 dark:text-gray-800" />
        {children}
      </HoverCardPrimitive.Content>
    </HoverCardPrimitive.Root>
  );
};

export { HoverCard };
