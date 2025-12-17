const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  //   const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <>
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center items-center  *:font-semibold gap-3">
            <button
              //   disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="px-4 py-2 text-text bg-accent hover:bg-primary hover:text-secondary-bg rounded cursor-pointer transition"
            >
              Prev
            </button>
            <span className="text-[18px]">{`${currentPage} / ${totalPages}`}</span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="px-4 py-2 text-text bg-accent hover:bg-primary hover:text-secondary-bg rounded cursor-pointer transition"
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pagination;
