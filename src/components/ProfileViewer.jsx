import MetaDetails from "./profile/MetaDetails.jsx";
import ProfileCard from "./profile/ProfileCard.jsx";
import StatsGrid from "./profile/StatsGrid.jsx";
import { LoadingProfile, SkeletonBlock } from "./ui/Skeletons.jsx";

function ProfileViewer({ user, loading, error, hasSearched }) {
  return (
    <div className="mt-10 space-y-6" id="profile">
      {error ? (
        <div className="rounded-lg border border-red-400/25 bg-red-500/10 p-5 text-center text-red-100">{error}</div>
      ) : null}

      {!hasSearched && !loading ? (
        <div className="rounded-lg border border-white/10 bg-[#101827]/70 p-8 text-center text-slate-300">
          Enter a GitHub username above to load profile details.
        </div>
      ) : null}

      {loading ? <LoadingProfile /> : user ? <ProfileCard user={user} /> : null}

      {loading ? (
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[0, 1, 2, 3].map((item) => (
            <SkeletonBlock key={item} className="h-28" />
          ))}
        </section>
      ) : user ? (
        <>
          <StatsGrid user={user} />
          <MetaDetails user={user} />
        </>
      ) : null}
    </div>
  );
}

export default ProfileViewer;
