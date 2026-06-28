import { Building2, CalendarDays, Link as LinkIcon } from "lucide-react";
import { formatDate, normalizeBlog } from "../../utils/format.js";

function MetaDetails({ user }) {
  const blog = normalizeBlog(user.blog);

  return (
    <section className="grid gap-4 rounded-lg border border-white/10 bg-[#101827]/75 p-5 md:grid-cols-3">
      <div className="flex min-w-0 items-center gap-3">
        <Building2 className="h-5 w-5 shrink-0 text-slate-400" aria-hidden="true" />
        <div className="min-w-0">
          <p className="text-xs uppercase tracking-wider text-slate-500">Company</p>
          <p className="truncate text-sm font-medium text-slate-200">{user.company || "Not Available"}</p>
        </div>
      </div>
      <div className="flex min-w-0 items-center gap-3">
        <LinkIcon className="h-5 w-5 shrink-0 text-slate-400" aria-hidden="true" />
        <div className="min-w-0">
          <p className="text-xs uppercase tracking-wider text-slate-500">Website</p>
          {blog ? (
            <a
              href={blog}
              target="_blank"
              rel="noreferrer"
              className="block truncate text-sm font-medium text-blue-300 hover:text-blue-200"
            >
              {user.blog}
            </a>
          ) : (
            <p className="text-sm font-medium text-slate-200">Not Available</p>
          )}
        </div>
      </div>
      <div className="flex min-w-0 items-center gap-3">
        <CalendarDays className="h-5 w-5 shrink-0 text-slate-400" aria-hidden="true" />
        <div className="min-w-0">
          <p className="text-xs uppercase tracking-wider text-slate-500">Joined</p>
          <p className="truncate text-sm font-medium text-slate-200">{formatDate(user.created_at)}</p>
        </div>
      </div>
    </section>
  );
}

export default MetaDetails;
