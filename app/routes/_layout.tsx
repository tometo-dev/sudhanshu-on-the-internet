import { Outlet } from "@remix-run/react";
import { Nav } from "~/components/nav";

export default function Layout() {
  return (
    <div className="relative z-0 h-full w-full bg-tertiary font-mono text-primary">
      <div className="mx-auto max-w-7xl">
        <Nav />
        <main className="mx-auto px-6 pt-20 sm:px-16">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
