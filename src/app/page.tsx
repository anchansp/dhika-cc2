import Hero from "@/components/Hero";
import TestimonChat from "@/components/TestimonChat";
import SampleHP from "@/components/SampleHP";

export default function Home() {
  return (
    <main>
      <section>
        <Hero />
      </section>
      <div className="bg-orange-200">
        <div className="px-4 py-4">
          <SampleHP />
        </div>

        <div className="px-4 py-8 gap-4">
          <div className="card bg-red-900 w-full rounded-xl shadow-xl">
            <h1 className="text-5xl text-orange-200 font-extrabold px-4 py-4 flex justify-center sm:text-6xl">
              Testimonies
            </h1>
            <TestimonChat />
          </div>
          {/* <Testimonies /> */}
        </div>
      </div>
    </main>
  );
}
