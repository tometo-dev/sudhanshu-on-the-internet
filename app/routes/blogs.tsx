import { MetaFunction } from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";
import { cn } from "~/lib/utils";

function BlogCard({
  title,
  description,
  className,
  link,
}: {
  title: string;
  description: string;
  link: string;
  className?: string;
}) {
  return (
    <Link
      to={link}
      className={cn(
        "h-full w-full rounded-lg border border-secondary shadow-lg hover:border-accent focus:border-none focus:outline-none focus:ring focus:ring-accent md:w-1/2 lg:w-1/3",
        className,
      )}
    >
      <div className="flex h-full flex-col gap-4 p-4 text-primary">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-sm text-secondary ">{description}</p>
      </div>
    </Link>
  );
}

export const meta: MetaFunction = () => {
  return [
    {
      title: "Sudhanshu's Blogs",
      description: "A collection of blogs written by me.",
    },
  ];
};

export default function Blogs() {
  return (
    <div>
      In this small corner of the internet, I write about things that interest
      me. Here are some of my posts:
      <div className="flex h-full w-full flex-wrap gap-4 py-4">
        <BlogCard
          link="/blog/config-ui-intro"
          title="Config-based UI"
          description="Introduction to what config-based UI is and why it's useful."
          className="min-h-[12rem]"
        />
        <BlogCard
          link="/blog/weird-google-autocomplete"
          title="Weird Google Autocomplete + MUI"
          description="A day of my life I spent trying to make Google Autocomplete work well with Material UI."
          className="min-h-[12rem]"
        />
        <BlogCard
          link="/blog/use-imperative-handle"
          title="Why useImperativeHandle?"
          description="A quick guide on why and how to use useImperativeHandle."
          className="min-h-[12rem]"
        />
      </div>
    </div>
  );
}
