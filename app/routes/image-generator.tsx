/* eslint-disable react/no-unknown-property */
/**
 * Original Implementation by Jacob Paris at: https://www.jacobparis.com/content/remix-og
 */

declare module "react" {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface HTMLAttributes<T> {
    tw?: string;
  }
}

import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { LoaderFunctionArgs } from "@remix-run/cloudflare";
import { getFont } from "~/utils/satori-getFonts";
import logo from "~/assets/images/logo.png?url";

export async function loader({ request }: LoaderFunctionArgs) {
  const requestUrl = request.url;

  const url = new URL(requestUrl);

  const title = url.searchParams.get("title");
  const description = url.searchParams.get("description");

  const jsx = (
    <div
      tw="text-[#363681] w-full h-full flex flex-col bg-[#F3F2F8] p-4"
      style={{
        background: "linear-gradient(to bottom right, #FFF8E3, #E6A4B4)",
      }}
    >
      <div tw="flex w-full items-center mb-auto">
        <img
          src={`${url.origin}/${logo}`}
          tw="w-16 h-16"
          alt=""
          aria-hidden={true}
        />
        <div tw="text-2xl font-bold border-b-2 border-[#2646BA]">
          Sudhanshu's Blogs
        </div>
      </div>
      <section tw="flex flex-col flex-1 justify-center items-center">
        <div tw="text-4xl font-bold text-black">{title}</div>
        <p tw="text-lg text-[#363681]">{description}</p>
      </section>
    </div>
  );
  // From satori docs example
  const svg = await satori(jsx, {
    width: 600,
    height: 300,
    fonts: await getFont("Space Mono"),
  });
  const resvg = new Resvg(svg);
  const pngData = resvg.render();
  const data = pngData.asPng();
  return new Response(data, {
    headers: {
      "Content-Type": "image/png",
    },
  });
}
