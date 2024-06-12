import { Outlet, useLoaderData } from "@remix-run/react";
import Giscus from "@giscus/react";
import {
  LoaderFunctionArgs,
  MetaFunction,
  json,
  redirect,
} from "@remix-run/cloudflare";
import { ShareOnTwitter } from "./components/share-twitter";
import { TWITTER_HANDLE } from "~/utils/contants";

// Hard-coding the title and description of the blogs for now
// There should be a better solution for this which could extract the
// title and description from the blog content itself
// but for now, this will do
// TODO: Extract title and description from the blog content
const blogs = [
  {
    title: "Improving LCP for your page",
    description: "A quick guide on how to improve LCP for your page",
    slug: "improving-lcp",
  },
  {
    title: "Why useImperativeHandle?",
    description: "A quick guide on why and how to use useImperativeHandle",
    slug: "use-imperative-handle",
  },
  {
    title: "Weird Google Autocomplete",
    description:
      "Experience my debugging session of weird Google Autocomplete + MUI issue",
    slug: "weird-google-autocomplete",
  },
];

export const loader = ({ request }: LoaderFunctionArgs) => {
  // check if the request has subpath
  // since the /blog route is a layout route, this should never be rendered
  // and users should be redirected to the /blogs route instead if they try to access it

  // check if it ends with /blog or /blog/
  if (request.url.endsWith("/blog") || request.url.endsWith("/blog/")) {
    return redirect("/blogs");
  }

  return json({ pageUrl: request.url });
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (data?.pageUrl) {
    const url = new URL(data.pageUrl);

    const matchedBlog = blogs.find(
      (blog) => blog.slug === url.pathname.slice(6),
    );

    if (matchedBlog) {
      const ogUrl = new URL(`${url.origin}/image-generator`);
      ogUrl.searchParams.append("title", matchedBlog.title);
      ogUrl.searchParams.append("description", matchedBlog.description);

      return [
        {
          title: matchedBlog.title,
          description: matchedBlog.description,
        },
        {
          property: "og:image",
          content: ogUrl.toString(),
        },
      ];
    } else {
      const ogUrl = new URL(`${url.origin}/image-generator`);

      ogUrl.searchParams.append("title", "Sudhanshu's Blogs");
      ogUrl.searchParams.append(
        "description",
        "A collection of blogs written by me.",
      );

      return [
        {
          title: "Sudhanshu's Blogs",
          description: "A collection of blogs written by me.",
        },
        {
          property: "og:image",
          content: ogUrl.toString(),
        },
      ];
    }
  } else {
    return [];
  }
};

export default function Blog() {
  const loaderData = useLoaderData<typeof loader>();

  return (
    <div className="flex h-full w-full flex-col">
      <div className="prose max-w-full flex-1 [&_a]:text-accent [&_a]:underline-offset-4 focus:[&_a]:rounded focus:[&_a]:outline-none focus:[&_a]:ring-[1px] focus:[&_a]:ring-accent focus:[&_a]:ring-offset-2">
        <Outlet />
      </div>
      <hr className="my-4 inline-block" />
      <div className="py-4">
        <aside className="border border-l-0 border-r-0 border-dotted border-b-accent border-t-accent p-4">
          If you like what you read, consider{" "}
          <a
            href={`https://twitter.com/${TWITTER_HANDLE}`}
            target="_blank"
            rel="noreferrer"
            className="text-accent underline underline-offset-4 focus:rounded focus:no-underline focus:outline-none focus:ring-[1px] focus:ring-accent focus:ring-offset-2"
          >
            following
          </a>{" "}
          me on Twitter, or{" "}
          <ShareOnTwitter pageUrl={loaderData.pageUrl}>sharing</ShareOnTwitter>{" "}
          this article.
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
