import logo from "./assets/logo.png?url";
import { cn } from "~/lib/utils";

export function WrongHaloEffect({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "grid size-80 w-full items-center justify-center",
        className,
      )}
    >
      <div className="grid [grid-column:1/2] [grid-row:1/2]">
        <img
          src={logo}
          alt="logo"
          className="m-auto size-10 animate-pulse [box-shadow:0px_0px_250px_50px_blue] lg:[box-shadow:0px_0px_250px_100px_blue]"
        />
      </div>
    </div>
  );
}
