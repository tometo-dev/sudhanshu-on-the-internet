import { Outlet } from "@remix-run/react";

export default function Blog() {
  return (
    <div className="prose h-full w-full max-w-full [&_a]:text-accent [&_a]:no-underline hover:[&_a]:underline focus:[&_a]:rounded focus:[&_a]:outline-none focus:[&_a]:ring-[1px] focus:[&_a]:ring-accent focus:[&_a]:ring-offset-2">
      <Outlet />
    </div>
  );
}
