import { createClient } from "contentful";
import Image from "next/image";
import cookie_icon from "../../public/cookie_icon.png";

export default async function Testimonies() {
  try {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID!,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
    });

    const response = await client.getEntries({
      content_type: process.env.CONTENTFUL_CONTENT_TYPE_TS || "testimonies",
    });

    // console.log(response.items);
    // console.log(response.items[0].fields.thumbnail);
    const testimoni = response.items;
    return (
      <div className="flex flex-col gap-4 py-4 px-4 w-full h-full max-w-[900px] mx-auto">
        {testimoni.map((item) => {
          const imeg = item.fields.image;
          return (
            <>
              <div className="chat chat-start py-4" key={item.sys.id}>
                <div className="chat-image avatar">
                  <div className="rounded-full w-[60%] sm-w[65%]">
                    <Image
                      alt="Orang"
                      src={`https:${(imeg! as any).fields.file.url}`}
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <div className="chat-header font-bold text-orange-100 text-2xl flex">
                  {(item as any).fields.user}
                  {/* <time className="text-xs opacity-50">12:45</time> */}
                </div>
                <div className="chat-bubble bg-orange-100 text-black font-semibold flex">
                  {(item as any).fields.comments}
                </div>
                {/* <div className="chat-footer opacity-50">Delivered</div> */}
              </div>
            </>
          );
        })}
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="rounded-full w-[60%] sm-w[65%]">
              <Image alt="Orang" src={cookie_icon} width={100} height={100} />
            </div>
          </div>
          <div className="chat-header font-bold text-orange-100 text-2xl flex">
            Sweet Crumbs Bakery
            {/* <time className="text-xs opacity-50">12:46</time> */}
          </div>
          <div className="chat-bubble bg-orange-100 text-black font-semibold flex">
            Thank you! Please come again!
          </div>
          {/* <div className="chat-footer opacity-50">Seen at 12:46</div> */}
        </div>
      </div>
    );
  } catch (error) {
    console.error(error);
  }
}
