const ShowErrors = ({ message }) => {
  return (
    <>
      <section className="py-12 px-6">
        <div className="container mx-auto flex justify-center items-center">
          <p className="text-center">{message}</p>
        </div>
      </section>
    </>
  );
};

export default ShowErrors;
