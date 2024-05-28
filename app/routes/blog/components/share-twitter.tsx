import { cn } from "~/lib/utils";
import { TWITTER_HANDLE } from "~/utils/contants";

export function ShareOnTwitter({
  className,
  pageUrl,
  children,
}: {
  pageUrl: string;
  className?: string;
  children: React.ReactNode;
}) {
  const defaultTweet = `Check out this awesome blog by @${TWITTER_HANDLE} ${pageUrl}`;

  const urlEncodedDefaultTweet = encodeURIComponent(defaultTweet);

  return (
    <a
      className={cn(
        "text-accent underline underline-offset-4 focus:rounded focus:no-underline focus:outline-none focus:ring-[1px] focus:ring-accent focus:ring-offset-2",
        className,
      )}
      href={`https://twitter.com/intent/tweet?text=${urlEncodedDefaultTweet}`}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}
