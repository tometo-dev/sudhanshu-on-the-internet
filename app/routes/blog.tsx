import { Outlet } from "@remix-run/react";

export default function Blog() {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="prose max-w-full flex-1 [&_a]:text-accent [&_a]:no-underline hover:[&_a]:underline focus:[&_a]:rounded focus:[&_a]:outline-none focus:[&_a]:ring-[1px] focus:[&_a]:ring-accent focus:[&_a]:ring-offset-2">
        <Outlet />
      </div>
      <aside className="pt-4">
        If you like what you read, consider following me on{" "}
        <a
          href="https://twitter.com/tsuki42_"
          target="_blank"
          rel="noreferrer"
          className="text-accent hover:underline focus:rounded focus:outline-none focus:ring-[1px] focus:ring-accent focus:ring-offset-2"
        >
          Twitter
        </a>
        .
      </aside>
    </div>
  );
}
