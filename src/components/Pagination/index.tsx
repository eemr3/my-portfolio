import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

export function Pagination({ items }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const pages = Math.ceil(items.length / itemsPerPage);

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedItems = items.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="m-auto">
      <div
        className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 mt-7
       gap-y-20 gap-x-8 lg:w-[90%] xl:w-8/12 m-auto"
      >
        {displayedItems.map((item: any) => (
          <div key={item.id} className="h-72 max-w-md m-auto">
            <Image
              src={item.imageProject.url}
              alt=""
              className="object-cover h-72"
              width={390}
              height={0}
            />
            <Link href={item.urlProject} target="_blank">
              <p className="text-gray-900 text-xl text-center bg-gray-50 py-3 px-2 w-[390px] lg:w-auto">
                <span className="text-orange-400">&lt;</span>
                {item.title}
                <span className="text-orange-400">&#47;&gt;</span>
              </p>
            </Link>
          </div>
        ))}
      </div>

      {/* <div className="mt-20">
        {currentPage > 1 && (
          <button className="bg-white" onClick={() => handlePageChange(currentPage - 1)}>
            Anterior
          </button>
        )}
        {currentPage} de {pages}
        {currentPage < pages && (
          <button className="bg-white" onClick={() => handlePageChange(currentPage + 1)}>
            Proximo
          </button>
        )}
      </div> */}
      <div className="flex items-center justify-between bg-zinc-900 px-4 py-3 sm:px-6 mt-24">
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-100">
              Showing <span className="font-medium">1</span> to{' '}
              <span className="font-medium">{currentPage}</span> of{' '}
              <span className="font-medium">{pages}</span> results
            </p>
          </div>
          <div>
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              {/* {currentPage > 1 && ( */}
              {/* <a
                onClick={() => handlePageChange(currentPage - 1)}
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </a> */}
              {/* )} */}
              {/* {currentPage < pages && ( */}
              {/* <button
                onClick={() => handlePageChange(currentPage + 1)}
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </button> */}
              {/* )} */}
              <div>
                {currentPage > 1 && (
                  <button
                    className="text-gray-100"
                    onClick={() => handlePageChange(currentPage - 1)}
                  >
                    Anterior
                  </button>
                )}

                {currentPage < pages && (
                  <button
                    className="text-gray-100"
                    onClick={() => handlePageChange(currentPage + 1)}
                  >
                    Proximo
                  </button>
                )}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
