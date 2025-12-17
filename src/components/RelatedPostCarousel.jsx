import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import ImageWithFallback from "../components/ImageWithFallback";

const RelatedPostCarousel = ({ getRelatedPosts }) => {
  return (
    <section className="py-12 px-6 ">
      <div className="container mx-auto flex flex-col gap-5">
        <h2 className="font-semibold text-4xl md:text-3xl ">
          You May Also Like
        </h2>

        <Swiper
          className="w-full"
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          navigation
          pagination={false}
          grabCursor
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {getRelatedPosts.map((item) => (
            <SwiperSlide key={`${item.media_type}-${item.id}`}>
              <Link to={`/details?type=${item.media_type}&id=${item.id}`}>
                <div className="group relative bg-secondary-bg rounded-xl overflow-hidden shadow-lg  transition-all duration-300 cursor-pointer">
                  <ImageWithFallback
                    poster={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt={item.media_type === "movie" ? item.title : item.name}
                  />

                  <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1.5">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span className="text-sm font-semibold">
                      {item.vote_average.toFixed(1)}
                    </span>
                  </div>

                  <div className="p-4">
                    <h4 className="text-lg font-semibold line-clamp-2  transition-colors">
                      {item.media_type === "movie" ? item.title : item.name}
                    </h4>
                    <div className="flex flex-row items-center gap-5">
                      <p className="text-sm text-text/40 uppercase">
                        {item.media_type}
                      </p>
                      <p className="text-sm text-text/60">
                        {(item.media_type === "movie"
                          ? item.release_date
                          : item.first_air_date
                        )?.slice(0, 4)}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default RelatedPostCarousel;
