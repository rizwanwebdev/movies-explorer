import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import ImageWithFallback from "../components/ImageWithFallback";
const RelatedPostCarousel = ({ getRelatedPosts }) => {
  return (
    <>
      <section className="py-12 px-6">
        <div className="container mx-auto flex flex-col gap-5 ">
          <h2 className="font-semibold text-4xl md:text-3xl">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {getRelatedPosts.map((item) => (
              <div key={`${item.media_type}-${item.id}`}>
                <Link to={`/details?type=${item.media_type}&id=${item.id}`}>
                  <div className="group relative block bg-secondary-bg rounded-xl overflow-hidden  shadow-lg hover:shadow-2xl  hover:scale-103 transition-all hover:shadow-primary/13 duration-300 cursor-pointer">
                    <ImageWithFallback
                      poster={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                      alt={item.media_type === "movie" ? item.title : item.name}
                    />

                    <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1.5">
                      <Star
                        className="w-4 h-4 fill-primary"
                        style={{ color: "#ffbe0b" }}
                      />
                      <span className="text-sm font-semibold">
                        {Math.floor(item.vote_average).toFixed(1)}
                      </span>
                    </div>
                    <div className="p-4">
                      <h4 className="text-2xl font-semibold text-text mb-1 group-hover:text-primary transition-colors line-clamp-2">
                        {item.media_type === "movie" ? item.title : item.name}
                      </h4>
                      <p className="text-sm text-text/60">
                        {item.media_type === "movie"
                          ? item.release_date
                          : item.first_air_date}
                      </p>
                      <p className="text-sm text-text/60">{item.media_type}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default RelatedPostCarousel;
