import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Card } from '../Cards';

export function Pagination({ items, itemsPerPage, currentPage, onPageChange }) {
  const pages = Math.ceil(items.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleItems = items.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="m-auto">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-7 gap-y-20 
        gap-x-8 sm:w-[90%] xl:w-8/12 m-auto "
      >
        {/* <HoverCardDemo /> */}
        {visibleItems.map((item: any) => (
          <Card.Root
            key={item.id}
            urlGithub={item.urlGithub}
            urlDeploy={item.urlDeploy}
            description={item.description}
            title={item.title}
            image={item.imageProject.url}
            titleicon01={item.titleicon01}
            icon01={item.icon01}
            titleicon02={item.titleicon02}
            icon02={item.icon02}
            titleicon03={item.titleicon03}
            icon03={item.icon03}
            titleicon04={item.titleicon04}
            icon04={item.icon04}
            titleicon05={item.titleicon05}
            icon05={item.icon05}
          >
            <Card.Content image={item.imageProject.url} title={item.title} />
          </Card.Root>
        ))}
      </div>
      <div className="flex items-center justify-between bg-[#efe1bd] dark:bg-[#494949] px-4 py-3 sm:px-6 mt-12">
        <div className="w-full relative">
          <nav
            className="w-full absolute bottom-0 px-4 sm:px-10 isolate inline-flex 
            justify-between"
          >
            <div className="mt-4 flex justify-between items-center sm:w-[1280px] mx-auto">
              <div>
                <button
                  className="lg:flex lg:justify-end px-4 py-2 w-[100px] cursor-pointer 
                   text-gray-900 hover:text-gray-700 dark:text-white dark:hover:text-gray-300"
                  onClick={() => onPageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  aria-label="Página anterior"
                >
                  <FaArrowLeft className="text-2xl" />
                </button>
              </div>

              <div>
                <p className="text-sm text-gray-900 dark:text-white font-semibold">
                  <span className="font-medium">{currentPage}</span> de{' '}
                  <span className="font-medium">{pages}</span>
                </p>
              </div>
              <div>
                <button
                  className="lg:flex lg:justify-end px-4 py-2 w-[100px] cursor-pointer 
                    text-gray-900 hover:text-gray-700 dark:text-white dark:hover:text-gray-300"
                  onClick={() => onPageChange(currentPage + 1)}
                  disabled={currentPage === pages}
                  aria-label="Próxima página"
                >
                  <FaArrowRight className="text-2xl" />
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
