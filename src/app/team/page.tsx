import TeamCard from "@/components/TeamCard";
import hero_cookie from "../../../public/cookie_hero.jpg";

export default function TeamPage() {
  return (
    <main className="bg-orange-200">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${hero_cookie.src})`,
          // "url(https://images.unsplash.com/photo-1486893732792-ab0085cb2d43?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-xl bg-red-900/80 rounded-xl px-4 py-4">
            <h1 className="mb-5 text-5xl font-bold text-orange-100">
              Meet our Teams
            </h1>
            <p className="mb-5 text-orange-100 text-justify font-semibold">
              At Cookie Cravings, we pride ourselves on using the finest
              ingredients to create both classic and innovative cookie flavors.
              From our signature chocolate chip cookies to our seasonal
              specialties, we strive to make every bite a delight.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="grid grid-cols-2 grid-rows-1 md:grid-rows-2 gap-4 px-4 py-4 justify-center items-center sm:flex sm:flex-col"> */}
      <TeamCard />
      {/* </div> */}
    </main>
  );
}
