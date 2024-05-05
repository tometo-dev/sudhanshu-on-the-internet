import { cn } from "~/lib/utils";

export function Footer({ className }: { className?: string }) {
  return (
    <footer className={cn("flex gap-2", className)}>
      <p className="text-secondary">Made with ❤️ by Sudhanshu</p>
      <a
        href="https://github.com/tometo-dev/portfolio-remix"
        className="ml-auto text-accent hover:underline"
        target="_blank"
        rel="noreferrer"
      >
        [view-source]
      </a>
    </footer>
  );
}
