import Link from 'next/link';
import React from 'react';

interface ActionLinkProps {
  urlProject: string;
  title: string;
  description?: string;
}
export default function ActionLink({ urlProject, title, description }: ActionLinkProps) {
  return (
    <div className="flex h-full w-full space-x-4">
      <div>
        <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">{title}</h3>

        <p className="mt-1 text-sm font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <footer className="py-3 px-2 w-[390px] lg:w-auto flex justify-around">
          <Link href={urlProject} target="_blank">
            <p className="text-gray-100 text-base">
              <span className="text-orange-400">&lt;</span>
              Acessar
              <span className="text-orange-400">&#47;&gt;</span>
            </p>
          </Link>
        </footer>
      </div>
    </div>
  );
}
