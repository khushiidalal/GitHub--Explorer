export function SkeletonBlock({ className }) {
  return <div className={`animate-pulse rounded-md bg-white/10 ${className}`} />;
}

export function LoadingProfile() {
  return (
    <div className="rounded-lg border border-white/10 bg-[#101827]/80 p-6 shadow-2xl shadow-black/20">
      <div className="flex flex-col gap-6 md:flex-row md:items-center">
        <SkeletonBlock className="mx-auto h-32 w-32 rounded-full md:mx-0" />
        <div className="flex-1 space-y-4">
          <SkeletonBlock className="h-8 w-56" />
          <SkeletonBlock className="h-5 w-36" />
          <SkeletonBlock className="h-5 w-full max-w-2xl" />
          <SkeletonBlock className="h-5 w-3/4" />
        </div>
      </div>
    </div>
  );
}
