import { Outlet } from "@remix-run/react";
import { Footer } from "~/components/footer";
import { Nav } from "~/components/nav";

export default function Layout() {
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
