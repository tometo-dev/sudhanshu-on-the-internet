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
  return (
    <div>
      <h1>Welcome to Sudhanshu&apos;s Portfolio</h1>
    </div>
  );
}
