import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "Sudhanshu's Portfolio" },
    {
      name: "description",
      content: "Sudhanshu's developer portfolio website",
    },
  ];
};

export default function Index() {
  return <div className="text-white">Hello World!</div>;
}
