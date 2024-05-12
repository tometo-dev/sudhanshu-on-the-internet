import { Outlet } from "@remix-run/react";
import Giscus from "@giscus/react";

export default function Blog() {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="prose max-w-full flex-1 [&_a]:text-accent [&_a]:no-underline hover:[&_a]:underline focus:[&_a]:rounded focus:[&_a]:outline-none focus:[&_a]:ring-[1px] focus:[&_a]:ring-accent focus:[&_a]:ring-offset-2">
        <Outlet />
      </div>
      <hr className="my-4 inline-block" />
      <div className="py-4">
        <aside className="border border-l-0 border-r-0 border-dotted border-b-accent border-t-accent p-4">
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
      <div className="h-full w-full text-primary">
        <Giscus
          repo="tometo-dev/sudhanshu-on-the-internet"
          repoId="R_kgDOL28q5Q"
          category="comments"
          categoryId="DIC_kwDOL28q5c4CfNa2"
          mapping="pathname"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme="dark_dimmed"
        />
      </div>
    </div>
  );
}
