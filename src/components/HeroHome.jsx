import SearchBar from "./SearchBar";
import BanerImage from "../images/home-page-banner.jfif";
const HeroHome = () => {
  // const bgImage ="https://images.unsplash.com/photo-1536440136628-849c177e76a1";
  return (
    <>
      <section className="overflow-hidden relative min-h-[600px] ">
        <div
          className="py-12 px-4 absolute inset-0 bg-cover bg-center flex flex-col justify-center items-center"
          style={{
            backgroundImage: `url(${BanerImage})`,
          }}
        >
          <div className="absolute inset-0 bg-linear-to-t from-background via-background/80 to-background/40"></div>

          <div className="relative flex flex-col justify-center items-center z-10">
            <div className="flex  flex-col justify-center items-center gap-2">
              <h1 className="text-6xl text-text font-bold">
                Discover Amazing Cinema
              </h1>
              <span>Search, explore and dive into a universe of films</span>

              <SearchBar className={"w-full border-2  py-4 "} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroHome;
