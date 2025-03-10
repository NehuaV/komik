import Image from "next/image";

export default function HomePage() {
  return (
    <div>
      {/* Featured Comic - carousel todo */}
      <section className="hero relative mt-8 mb-8 h-96 rounded-xl shadow-lg">
        <Image src={`https://placehold.co/1920x1080`} alt="Featured comic background" fill className="rounded-xl object-cover" priority />
        <div className="hero-overlay absolute inset-0 rounded-xl bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="hero-content relative z-10 items-end justify-start pb-8 text-start text-white">
          <div>
            <p className="mb-2 text-sm uppercase">Featured Series</p>
            <h1 className="mb-2 text-3xl font-bold">The Epic Adventure</h1>
            <p className="mb-4">Follow the journey of heroes in this fantasy world!</p>
            <button className="btn btn-primary">Read Now</button>
          </div>
        </div>
      </section>

      {/* Comic Grid */}
      <section className="mb-10">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Popular This Week</h2>
          <a href="#" className="link link-primary">
            View All
          </a>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="card bg-base-100 shadow-md transition-transform duration-200 hover:-translate-y-1">
              <figure>
                <Image
                  src={`https://placehold.co/200x300`}
                  alt={`Comic ${item}`}
                  className="h-60 w-full object-cover"
                  width={200}
                  height={300}
                />
              </figure>
              <div className="card-body p-3">
                <h3 className="card-title text-base">Comic Title {item}</h3>
                <p className="text-base-content/60 text-xs">Fantasy • Adventure</p>
                <div className="text-base-content/60 flex gap-3 text-xs">
                  <span>⭐ 9.8</span>
                  <span>👁️ 1.2M</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Daily Updates Section */}
      <section className="mb-10">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Daily Updates</h2>
          <a href="#" className="link link-primary">
            View Calendar
          </a>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="card card-side bg-base-100 border-base-200 border p-3 transition hover:shadow-md">
              <figure>
                <Image
                  src={`https://placehold.co/64x64`}
                  alt={`Update ${item}`}
                  className="h-16 w-16 rounded-md object-cover"
                  width={64}
                  height={64}
                />
              </figure>
              <div className="card-body p-0 pl-4">
                <h3 className="font-medium">Updated Today</h3>
                <p className="text-base-content/60 text-sm">Episode {Math.floor(Math.random() * 100)}</p>
                <div className="mt-1 flex text-xs">
                  <span className="badge badge-primary badge-sm">New</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Genres Section */}
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-bold">Browse by Genre</h2>
        <div className="flex flex-wrap gap-2">
          {["Romance", "Action", "Fantasy", "Comedy", "Drama", "Slice of Life", "Horror", "Thriller"].map((genre) => (
            <a key={genre} href="#" className="badge badge-outline hover:badge-primary p-4 text-sm transition-colors">
              {genre}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
