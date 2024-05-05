import { LinksFunction } from "@remix-run/cloudflare";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css?url";
import { Nav } from "./components/nav";
import { Footer } from "./components/footer";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-tertiary">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <div className="m-0 h-screen w-screen p-0 font-mono text-primary">
      <div className="relative mx-auto flex h-full w-full max-w-7xl flex-col">
        <Nav />
        <main className="mx-auto h-full w-full flex-1 overflow-auto px-6 sm:px-16">
          <Outlet />
        </main>
        <Footer className="px-6 py-2 sm:px-16" />
      </div>
    </div>
  );
}
