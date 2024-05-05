import type { MetaFunction } from "@remix-run/cloudflare";
import { Intro } from "./components/intro";

export const meta: MetaFunction = () => {
  return [
    { title: "Sudhanshu's Corner" },
    {
      name: "description",
      content: "Sudhanshu's corner of the internet.",
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
