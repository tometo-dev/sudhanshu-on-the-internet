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
      content: "/og/og-image.jpeg",
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
