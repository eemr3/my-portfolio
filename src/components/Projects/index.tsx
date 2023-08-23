import { PorpsProject } from '../../helpers/interfaces';
// import Pagination from '../Pagination/Pagination';
import { useState } from 'react';
import { Pagination } from '../Pagination';

const itemsPerPage = 6;

export default function Projects({ data }: PorpsProject) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  return (
    <section
      className="min-h-screen pb-24 bg-[#efe1bd] dark:bg-[#494949] w-full"
      id="project"
    >
      <div className="flex flex-col justify-center items-center">
        <div className="container mx-auto pt-20 text-center">
          <h2 className="text-4xl text-gray-900 dark:text-white mb-4">MEUS PROJETOS</h2>
          <span className="text-gray-900 dark:text-white text-sm">
            ESTA É A MINHA HISTÓRIA
          </span>
        </div>
        <div className="border-b-2 border-gray-900 dark:border-white w-52 my-4" />
      </div>
      <div>
        <Pagination
          items={data}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
}
