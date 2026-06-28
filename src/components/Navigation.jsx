import { GitHubMark } from "./icons/GitHubMark.jsx";

function Navigation() {
  return (
    <header className="border-b border-white/10 bg-[#0B111E]/95">
      <nav className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-500/15 ring-1 ring-blue-300/20">
            <GitHubMark className="h-6 w-6 text-blue-300" />
          </div>
          <span className="text-xl font-bold text-white">GitHub Explorer</span>
        </div>

        <div className="flex flex-wrap gap-2">
          <a
            href="#profile"
            className="rounded-md border border-white/10 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-blue-300/40 hover:text-white"
          >
            Profile Viewer
          </a>
          <a
            href="#repositories"
            className="rounded-md border border-white/10 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-blue-300/40 hover:text-white"
          >
            Repo Explorer
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
