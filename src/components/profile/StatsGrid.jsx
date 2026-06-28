import { BookOpen, Users } from "lucide-react";

const statCards = [
  {
    label: "Repositories",
    key: "public_repos",
    icon: BookOpen,
    accent: "text-blue-300",
    ring: "ring-blue-400/20",
    bg: "bg-blue-400/10",
  },
  {
    label: "Followers",
    key: "followers",
    icon: Users,
    accent: "text-emerald-300",
    ring: "ring-emerald-400/20",
    bg: "bg-emerald-400/10",
  },
  {
    label: "Following",
    key: "following",
    icon: Users,
    accent: "text-violet-300",
    ring: "ring-violet-400/20",
    bg: "bg-violet-400/10",
  },
  {
    label: "Gists",
    key: "public_gists",
    icon: BookOpen,
    accent: "text-orange-300",
    ring: "ring-orange-400/20",
    bg: "bg-orange-400/10",
  },
];

function StatsGrid({ user }) {
  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {statCards.map(({ label, key, icon: Icon, accent, ring, bg }) => (
        <div key={key} className={`rounded-lg border border-white/10 bg-[#101827]/80 p-5 ring-1 ${ring}`}>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm text-slate-400">{label}</p>
              <p className="mt-2 text-3xl font-bold text-white">{user[key].toLocaleString()}</p>
            </div>
            <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-md ${bg}`}>
              <Icon className={`h-5 w-5 ${accent}`} aria-hidden="true" />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default StatsGrid;
