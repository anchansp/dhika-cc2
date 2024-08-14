import { createClient } from "contentful";
import Image from "next/image";
import { SiCookiecutter } from "react-icons/si";

export default async function TeamCard() {
  try {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID!,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
    });

    const response = await client.getEntries({
      content_type: process.env.CONTENTFUL_CONTENT_TYPE_RU || "randomUser",
    });

    // console.log(response.items);
    // console.log(response.items[0].fields.thumbnail);
    const randos = response.items;
    return (
      <div className="grid grid-rows-2 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 w-full h-full px-4 py-4 justify-center items-center">
        {randos.map((item) => {
          const photo = item.fields.photo;

          return (
            <div
              className="card bg-red-900 w-full h-full shadow-xl"
              key={item.sys.id}
            >
              <div className="card-body">
                <div className="avatar items-center">
                  <div className="w-48 h-48 rounded-full">
                    <Image
                      src={`https:${(photo! as any).fields.file.url}`}
                      alt="profile picture"
                      width={200}
                      height={200}
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <h2 className="card-title text-orange-200 text-3xl font-extrabold">
                  <SiCookiecutter /> {(item as any).fields.name}
                </h2>
                <h3 className="text-orange-200 text-2xl font-bold">
                  {(item as any).fields.job}
                </h3>
                <p className="text-orange-200 lg:h-[80px]">
                  {(item as any).fields.expertise}
                </p>
                <p className="text-orange-200">
                  <b>Email: </b>
                  {(item as any).fields.email}
                </p>
                <p className="text-orange-200">
                  <b>Contact: </b>
                  {(item as any).fields.phoneNumber}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  } catch (error) {
    console.error(error);
  }
}
