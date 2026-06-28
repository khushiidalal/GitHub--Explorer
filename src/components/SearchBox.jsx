import { LoaderCircle, Search } from "lucide-react";

function SearchBox({ query, setQuery, loading, onSubmit }) {
  return (
    <form
      onSubmit={onSubmit}
      className="mt-8 flex flex-col gap-3 rounded-lg border border-white/10 bg-[#101827] p-2 shadow-xl shadow-black/20 sm:flex-row"
    >
      <label htmlFor="github-username" className="sr-only">
        GitHub username
      </label>
      <div className="flex min-w-0 flex-1 items-center gap-3 rounded-md bg-[#0B111E] px-4 py-3 ring-1 ring-white/10">
        <Search className="h-5 w-5 shrink-0 text-slate-500" aria-hidden="true" />
        <input
          id="github-username"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Enter GitHub username"
          className="min-w-0 flex-1 bg-transparent text-base text-white outline-none placeholder:text-slate-500"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" /> : null}
        Search
      </button>
    </form>
  );
}

export default SearchBox;
