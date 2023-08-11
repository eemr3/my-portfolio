import { Card } from '../Cards';

export function Pagination({ items, itemsPerPage, currentPage, onPageChange }) {
  const pages = Math.ceil(items.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleItems = items.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="m-auto">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-7 gap-y-20 gap-x-8 sm:w-[90%] 
        xl:w-8/12 m-auto z-50 relative"
      >
        {visibleItems.map((item: any) => (
          <Card.Root key={item.id} titile={item.title} imageUrl={item.imageProject.url}>
            <Card.Action
              urlProject={item.urlProject}
              title={item.title}
              description={item.description}
            />
          </Card.Root>
        ))}
      </div>
      <div className="flex items-center justify-between bg-zinc-900 px-4 py-3 sm:px-6 mt-12">
        <div className="w-full relative">
          <nav className="w-full absolute bottom-0 px-4 sm:px-10 isolate inline-flex justify-between -space-x-px rounded-md shadow-sm">
            <div className="mt-4 flex justify-around items-center gap-x-4 sm:w-[100%]">
              <div className="w-auto">
                <button
                  className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600"
                  onClick={() => onPageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Anterior
                </button>
              </div>

              <div>
                <p className="text-sm text-gray-100">
                  <span className="font-medium">{currentPage}</span> of{' '}
                  <span className="font-medium">{pages}</span> results
                </p>
              </div>
              <div className="w-auto">
                <button
                  className="px-4 py-2 ml-2 bg-gray-700 text-white rounded-md hover:bg-gray-600"
                  onClick={() => onPageChange(currentPage + 1)}
                  disabled={currentPage === pages}
                >
                  Próximo
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
