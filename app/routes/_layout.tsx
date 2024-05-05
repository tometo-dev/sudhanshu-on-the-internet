import { Outlet } from "@remix-run/react";
import { Nav } from "~/components/nav";

export default function Layout() {
  return (
    <div className="m-0 h-full w-full p-0 font-mono text-primary">
      <div className="relative mx-auto h-full w-full max-w-7xl">
        <Nav />
        <main className="mx-auto h-full w-full px-6 pb-6 sm:px-16">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
