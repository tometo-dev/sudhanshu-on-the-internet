import type { MetaFunction } from "@remix-run/cloudflare";
import { Intro } from "~/components/intro";

export const meta: MetaFunction = () => {
  return [
    { title: "Sudhanshu's Corner" },
    {
      name: "description",
      content: "Sudhanshu's corner of the internet.",
    },
    { name: "twitter:site", content: "@tsuki42_" },
    { name: "twitter:creator", content: "@tsuki42_" },
    { property: "og:site_name", content: "Sudhanshu's Corner" },
    { property: "og:locale", content: "en_US" },
    {
      property: "og:image",
      content:
        "https://og.sudh.online/api?title=Sudhanshu's%20Corner&description=Thoughts%20and%20musings%20of%20a%20developer",
    },
  ];
};

export default function Index() {
  return (
    <div className="h-full w-full text-base font-medium">
      <Intro />
    </div>
  );
}
