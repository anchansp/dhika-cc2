import hero_home from "../../public/hero_home.jpg";
import Link from "next/link";

export default function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${hero_home.src})`,
        // "url(https://images.unsplash.com/photo-1486893732792-ab0085cb2d43?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md bg-red-900/80 rounded-xl px-4 py-4">
          <h1 className="mb-5 text-5xl font-bold text-orange-100">
            Welcome to Sweet Crumbs Bakery!
          </h1>
          <p className="mb-5 text-orange-100">
            Indulge in a world of delicious, handcrafted cookies where every
            bite is a celebration of flavor and love. From our classic favorites
            to inventive creations, our cookies are made with the finest
            ingredients and a sprinkle of passion. Discover the joy of
            exceptional baking and treat yourself to something truly special
            today!
          </p>
          <Link href={"/product"}>
            <button className="btn text-black bg-orange-200 border-black text-2xl font-semibold">
              Buy Now!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
