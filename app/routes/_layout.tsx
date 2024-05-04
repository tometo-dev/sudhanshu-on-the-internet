import { Outlet } from "@remix-run/react";
import { Nav } from "~/components/nav";

export default function Layout() {
  return (
    <div className="bg-primary relative z-0 h-full w-full">
      <Nav />
      <main className="px-6 pt-20 sm:px-16">
        <Outlet />
      </main>
    </div>
  );
}
