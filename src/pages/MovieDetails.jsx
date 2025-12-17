import { useLocation } from "react-router-dom";
import Header from "../components/Header";

const MovieDetails = () => {
  const location = useLocation();
  const prams = new URLSearchParams(location.search);
  const searchId = prams.get("id");
  console.log(searchId);

  return (
    <>
      <Header />
      {/* Backdrop */}
      <section className="py-12p px-6 min-h-fit">
        <div className="container mx-auto h-[600px]">backDrop Section</div>
      </section>
      {/* Details */}
      <section className="py-12p px-6">
        <div className="container mx-auto">backDrop Section</div>
      </section>
    </>
  );
};

export default MovieDetails;
