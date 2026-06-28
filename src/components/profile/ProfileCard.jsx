import { ExternalLink } from "lucide-react";
import { GitHubMark } from "../icons/GitHubMark.jsx";

function ProfileCard({ user }) {
  return (
    <section className="rounded-lg border border-white/10 bg-[#101827]/90 p-5 shadow-2xl shadow-black/25 md:p-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-center">
        <img
          src={user.avatar_url}
          alt={`${user.login} avatar`}
          className="mx-auto h-32 w-32 rounded-full border-4 border-[#0B111E] object-cover ring-4 ring-blue-400/30 md:mx-0 md:h-36 md:w-36"
        />

        <div className="min-w-0 flex-1 text-center md:text-left">
          <h2 className="break-words text-3xl font-bold tracking-normal text-white md:text-4xl">
            {user.name || user.login}
          </h2>
          <div className="mt-2 flex items-center justify-center gap-2 text-blue-300 md:justify-start">
            <GitHubMark className="h-4 w-4" />
            <span className="break-all text-sm font-medium">@{user.login}</span>
          </div>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-slate-300 md:mx-0 md:text-base">
            {user.bio || "This profile has no bio."}
          </p>
          <a
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProfileCard;
