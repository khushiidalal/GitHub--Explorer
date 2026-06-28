import { CalendarDays, ExternalLink, GitFork, Star } from "lucide-react";
import { formatDate } from "../../utils/format.js";
import { getLanguageColor } from "../../utils/languages.js";

function RepoCard({ repo }) {
  const languageDot = getLanguageColor(repo.language);

  return (
    <article className="flex min-h-56 flex-col rounded-lg border border-white/10 bg-[#101827]/80 p-5 transition hover:-translate-y-0.5 hover:border-blue-300/40 hover:bg-[#121d30]">
      <div className="flex items-start justify-between gap-4">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className="min-w-0 break-words text-lg font-semibold text-white hover:text-blue-300"
        >
          {repo.name}
        </a>
        <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-slate-500" aria-hidden="true" />
      </div>

      <p className="line-clamp-2 mt-3 min-h-12 text-sm leading-6 text-slate-400">
        {repo.description || "No description provided for this repository."}
      </p>

      <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-3 pt-6 text-xs text-slate-400">
        <span className="inline-flex items-center gap-2">
          <span className={`h-2.5 w-2.5 rounded-full ${languageDot}`} aria-hidden="true" />
          {repo.language || "Other"}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Star className="h-4 w-4" aria-hidden="true" />
          {repo.stargazers_count.toLocaleString()}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <GitFork className="h-4 w-4" aria-hidden="true" />
          {repo.forks_count.toLocaleString()}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <CalendarDays className="h-4 w-4" aria-hidden="true" />
          {formatDate(repo.pushed_at || repo.updated_at, { month: "short", day: "numeric", year: "numeric" })}
        </span>
      </div>
    </article>
  );
}

export default RepoCard;
