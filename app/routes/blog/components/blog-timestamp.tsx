export function BlogTimestamp({ timestamp }: { timestamp: string }) {
  return (
    <div className="flex w-full">
      <span className="ml-auto text-sm text-secondary">{timestamp}</span>
    </div>
  );
}
