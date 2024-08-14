import TeamCard from "@/components/TeamCard";
import Image from "next/image";
import logo from "../../../public/sweets.png";

export default function About() {
  return (
    <div className="bg-orange-200 text-black px-4 w-full">
      <div className="py-4">{/* ---- */}</div>
      <div className="bg-red-900 rounded-xl w-full">
        <div className="flex justify-center py-4">
          <Image
            alt="delicious chocolate flavored cookies"
            src={logo}
            className="w-48 h-48"
          />
        </div>
        <h2 className="card-title flex justify-center text-3xl font-bold text-orange-200">
          Company history
        </h2>
        <div className="flex justify-center items-center px-24 py-8 ">
          <p className="text-orange-200 lg:text-2xl">
            Started with a small shop and homemade cookie recipes. Quickly
            became popular for unique flavors. Expanded to a second location in
            2015 and released a best-selling cookbook in 2018. Switched to
            eco-friendly practices in 2021 and launched a cookie subscription
            service in 2023. Still going strong, making delicious cookies and
            engaging with the community.
          </p>
        </div>
        <h2 className="card-title flex justify-center text-3xl font-bold text-orange-200">
          The Work Culture
        </h2>
        <div className="flex justify-center items-center px-24 py-8 ">
          <p className="text-orange-200 lg:text-2xl">
            Step into Sweet Crumbs Bakery, where our vibrant team turns baking
            into an art form. Our crew is a dynamic mix of seasoned bakers and
            enthusiastic novices, each contributing their unique skills and
            cheerful energy. We pride ourselves on a culture of inclusivity and
            creativity, where every idea is valued and every voice is heard. In
            our kitchen, collaboration and laughter are as important as the
            ingredients, creating a welcoming environment that extends to our
            customers. At Sweet Crumbs Bakery, every cookie is made with a
            sprinkle of joy and a dash of team spirit.
          </p>
        </div>
      </div>
      {/* <div className="grid grid-cols-2 grid-rows-2 gap-4 px-4 py-4 justify-center items-center sm:flex sm:flex-col">
        <div> */}
      <TeamCard />
      {/* </div>
      </div> */}
    </div>
  );
}
