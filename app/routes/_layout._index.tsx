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
    <div className="text-base font-medium">
      Hi, I'm Sudhanshu Ranjan; a frontend developer.
    </div>
  );
}
