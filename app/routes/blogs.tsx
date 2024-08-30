import { Link, useLoaderData } from "@remix-run/react";
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
        <p className="text-sm text-secondary">{description}</p>
      </div>
    </Link>
  );
}

export const loader = () => {
  // adapted from: https://github.com/remix-run/remix-website/blob/3cbd79fb69bbc3a4bf8c7c13ecfef0e1ba33ede8/app/lib/blog.server.ts#L8
  const postContentBySlug = Object.fromEntries(
    Object.entries(
      import.meta.glob("./**/*.mdx", {
        import: "frontmatter",
        eager: true,
      }),
    ).map(([filePath, contents]) => {
      return [
        filePath
          .replace("./", "/")
          .replace(".", "/")
          .replace(/\.mdx$/, ""),
        contents,
      ];
    }),
  ) as Record<
    string,
    {
      /** Title of the blog */
      title: string;
      /** Description of the blog */
      description: string;
      /** Authored date in MMM DD, YYYY format (e.g. Sep 09, 2024) */
      date: string;
    }
  >;

  return postContentBySlug;
};

export const meta = () => {
  return [
    {
      title: "Sudhanshu's Blogs",
      description: "A collection of blogs written by me.",
    },
  ];
};

export default function Blogs() {
  const data = useLoaderData<typeof loader>();

  return (
    <div>
      In this small corner of the internet, I write about things that interest
      me. Here are some of my posts:
      <div className="flex h-full w-full flex-wrap gap-4 py-4">
        {Object.entries(data).map(([slug, { title, description }]) => (
          <BlogCard
            key={slug}
            link={slug}
            title={title}
            description={description}
            className="min-h-[12rem]"
          />
        ))}
      </div>
    </div>
  );
}
