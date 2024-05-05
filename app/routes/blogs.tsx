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
        "w-full rounded-lg border border-secondary focus:border-none focus:outline-none focus:ring focus:ring-accent md:w-1/2 lg:w-1/3",
        className,
      )}
    >
      <div className="p-4 text-primary shadow-lg hover:border-accent  ">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-sm text-secondary ">{description}</p>
      </div>
    </Link>
  );
}

export default function Blogs() {
  return (
    <div>
      In this small corner of the internet, I write about things that interest
      me. Here are some of my posts:
      <div className="flex h-full w-full flex-wrap py-4">
        <BlogCard
          link="/blog/config-ui-intro"
          title="Config-based UI"
          description="Introduction to what config-based UI is and why it's useful."
        />
      </div>
    </div>
  );
}
