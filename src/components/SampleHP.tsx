import Image from "next/image";
import cookie_hero from "../../public/cookie_hero.jpg";
import chef from "../../public/chef.jpg";
import sweets from "../../public/sweet_make.jpg";
import show from "../../public/cookie_show.jpg";
import Link from "next/link";

export default function SampleHP() {
  return (
    <section>
      <div className="flex flex-col lg:grid lg:grid-cols-2 grid-rows-2 gap-4 rounded-lg">
        <div>
          {/* 1 */}
          <div className="card card-compact bg-red-900 w-full shadow-xl text-orange-200">
            <figure>
              <Image
                src={show}
                alt="image of our chocolate cookie. Made with love."
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-3xl font-bold">
                Company Overview
              </h2>
              <div className="lg:h-[300px]">
                <p className="lg:text-2xl">
                  Welcome to Sweet Crumbs Bakery! Our mission is to create
                  unforgettable cookie experiences by blending classic recipes
                  with creative twists. We are committed to excellence in every
                  batch, fostering a warm and welcoming environment for our
                  customers, and supporting our local community through
                  sustainable practices and charitable efforts. Our tagline is
                  <b> To spread happiness, one cookie at a time.</b>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* 2 */}
          <div className="card card-compact bg-red-900 w-full shadow-xl text-orange-200">
            <figure>
              <Image src={sweets} alt="image of our team making our cookies" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-3xl font-bold">Company History</h2>
              <div className="lg:h-[300px]">
                <p className="lg:text-2xl">
                  Sweet Crumbs Bakery is a premier cookie shop dedicated to
                  crafting the finest, artisanal cookies in town. Established in
                  2020, our bakery combines traditional baking techniques with
                  innovative flavors to offer a unique and delightful
                  experience. Located in the heart of the community, we pride
                  ourselves on using only the highest quality ingredients,
                  ensuring that every cookie we bake is a delicious treat that
                  brings joy to our customers.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* 3 */}
          <div className="card card-compact bg-red-900 w-full shadow-xl text-orange-200">
            <figure>
              <Image src={chef} alt="img of our previous chef" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-3xl font-bold">Meet Our Team!</h2>
              <div className="lg:h-[300px]">
                <p className="lg:text-2xl">
                  We deliver every bite with care and joy. Our team is a diverse
                  and passionate group, united by a love for baking and a
                  commitment to excellence. Each member brings their unique
                  background and personality to our kitchen, creating a vibrant,
                  collaborative atmosphere.
                </p>
              </div>
              <div className="card-actions justify-end">
                <Link href={"/team"}>
                  <button className="btn text-black bg-orange-200 border-black text-2xl font-semibold">
                    Click Me!
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* 4 */}
          <div className="card card-compact bg-red-900 w-full shadow-xl text-orange-200">
            <figure>
              <Image src={cookie_hero} alt="cookies" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-3xl font-bold">
                Signature Product
              </h2>
              <div className="lg:h-[300px]">
                <p className="lg:text-2xl">
                  Perfect for any occasion, these cookies add a touch of
                  sweetness and love to every moment. Baked fresh daily with
                  premium ingredients, they are a joyful gift or a special treat
                  for yourself. Check our signature product from button below!
                </p>
              </div>
              <div className="card-actions justify-end">
                <Link href={"/product"}>
                  <button className="btn text-black bg-orange-200 border-black text-2xl font-semibold">
                    Buy Now!
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
