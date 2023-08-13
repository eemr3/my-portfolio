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
        gap-x-8 sm:w-[90%] xl:w-8/12 m-auto z-30 relative"
      >
        {/* <HoverCardDemo /> */}
        {visibleItems.map((item: any) => (
          <Card.Root key={item.id} imageUrl={item.imageProject.url}>
            <Card.Action
              urlGithub={item.urlGithub}
              urlDeploy={item.urlDeploy}
              title={item.title}
              description={item.description}
            />
          </Card.Root>
        ))}
      </div>
      <div className="flex items-center justify-between bg-[#494949] px-4 py-3 sm:px-6 mt-12">
        <div className="w-full relative">
          <nav
            className="w-full absolute bottom-0 px-4 sm:px-10 isolate inline-flex 
            justify-between"
          >
            <div className="mt-4 flex justify-between items-center sm:w-[1280px] mx-auto">
              <div>
                <button
                  className="px-4 py-2 w-[100px] cursor-pointer text-[#fff] hover:text-gray-300"
                  onClick={() => onPageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  aria-label="Página anterior"
                >
                  <FaArrowLeft className="text-2xl" />
                </button>
              </div>

              <div>
                <p className="text-sm text-[#fff] font-semibold">
                  <span className="font-medium">{currentPage}</span> of{' '}
                  <span className="font-medium">{pages}</span> results
                </p>
              </div>
              <div>
                <button
                  className="lg:flex lg:justify-end px-4 py-2 w-[100px] cursor-pointer 
                    text-[#fff] hover:text-gray-300"
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
