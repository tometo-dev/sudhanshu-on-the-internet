import logo from "~/assets/images/logo.png?url";
import { cn } from "~/lib/utils";

export function HaloEffect({
  className,
  haloClassName,
}: {
  className?: string;
  haloClassName?: string;
}) {
  return (
    <div
      className={cn(
        "grid size-80 w-full items-center justify-center",
        className,
      )}
    >
      <div className="grid size-20 [grid-column:1/2] [grid-row:1/2]">
        <div
          className={cn(
            "m-auto size-[0px] animate-pulse [box-shadow:0px_0px_250px_100px_blue]",
            haloClassName,
          )}
        />
      </div>
      <div className="z-10 grid [grid-column:1/2] [grid-row:1/2]">
        <img src={logo} alt="logo" className="m-auto size-10" />
      </div>
    </div>
  );
}
