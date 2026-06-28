import RepoCard from "./repos/RepoCard.jsx";
import { SkeletonBlock } from "./ui/Skeletons.jsx";

function Repositories({ repos, repoCount, loading, user, hasSearched }) {
  return (
    <section className="mt-12" id="repositories">
      <div className="mb-5 flex items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-white">Repositories ({loading ? "..." : repoCount})</h2>
      </div>

      {!hasSearched && !loading ? (
        <div className="rounded-lg border border-white/10 bg-[#101827]/70 p-8 text-center text-slate-300">
          Repositories will appear after a successful search.
        </div>
      ) : null}

      {loading ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {[0, 1, 2, 3, 4, 5].map((item) => (
            <SkeletonBlock key={item} className="h-56" />
          ))}
        </div>
      ) : repos.length ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {repos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      ) : user ? (
        <div className="rounded-lg border border-white/10 bg-[#101827]/70 p-8 text-center text-slate-300">
          No public repositories found for this profile.
        </div>
      ) : null}
    </section>
  );
}

export default Repositories;
