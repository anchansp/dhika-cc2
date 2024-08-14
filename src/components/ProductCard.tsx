import { createClient } from "contentful";
import Image from "next/image";

export default async function ProductCard() {
  try {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID!,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
    });

    const response = await client.getEntries({
      content_type: process.env.CONTENTFUL_CONTENT_TYPE_PR || "products",
    });

    // console.log(response.items);
    // console.log(response.items[0].fields.thumbnail);
    const products = response.items;
    return (
      <div className="grid sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-4 px-4 py-4">
        {products.map((item) => {
          const thumbnail = item.fields.thumbnail;
          return (
            <div key={item.sys.id}>
              <div className="card card-compact bg-red-900 w-full shadow-xl text-orange-200">
                <figure>
                  <Image
                    // src="https://images.unsplash.com/photo-1542178036-c221b3856ed8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    src={`https:${(thumbnail! as any).fields.file.url}`}
                    alt={(item as any).fields.altText}
                    width={2000}
                    height={1500}
                    className="w-full h-full"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title font-bold">
                    {(item as any).fields.name}
                  </h2>
                  <p className="lg:h-[300px]">
                    {(item as any).fields.description}
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn text-black bg-orange-200 border-black">
                      Buy Now
                    </button>
                  </div>
                </div>
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
