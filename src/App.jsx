import { useEffect, useMemo, useState } from "react";
import Navigation from "./components/Navigation.jsx";
import ProfileViewer from "./components/ProfileViewer.jsx";
import Repositories from "./components/Repositories.jsx";
import SearchBox from "./components/SearchBox.jsx";
import { getGitHubError } from "./utils/github.js";

function App() {
  const [query, setQuery] = useState("");
  const [activeUser, setActiveUser] = useState("");
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const hasSearched = Boolean(activeUser);

  useEffect(() => {
    if (!activeUser) return;

    const controller = new AbortController();

    async function fetchGitHubUser() {
      setLoading(true);
      setError("");

      try {
        const [profileResponse, reposResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${activeUser}`, { signal: controller.signal }),
          fetch(`https://api.github.com/users/${activeUser}/repos?sort=updated&per_page=30`, {
            signal: controller.signal,
          }),
        ]);

        if (!profileResponse.ok) {
          throw new Error(getGitHubError(profileResponse.status));
        }

        if (!reposResponse.ok) {
          throw new Error(getGitHubError(reposResponse.status));
        }

        const [profileData, reposData] = await Promise.all([profileResponse.json(), reposResponse.json()]);
        setUser(profileData);
        setRepos(Array.isArray(reposData) ? reposData : []);
      } catch (fetchError) {
        if (fetchError.name !== "AbortError") {
          setError(fetchError.message || "Unable to load this GitHub profile.");
          setUser(null);
          setRepos([]);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchGitHubUser();

    return () => controller.abort();
  }, [activeUser]);

  const repoCount = useMemo(() => repos.length, [repos]);

  function handleSubmit(event) {
    event.preventDefault();
    const username = query.trim();
    if (username) {
      setActiveUser(username);
    }
  }

  return (
    <div className="min-h-screen bg-[#0B111E] text-slate-100">
      <Navigation />

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-normal text-white sm:text-5xl">GitHub Profile Viewer</h1>
          <p className="mt-4 text-base leading-7 text-slate-400">
            Search any public GitHub username to explore profile details, stats, and recently updated repositories.
          </p>

          <SearchBox query={query} setQuery={setQuery} loading={loading} onSubmit={handleSubmit} />
        </section>

        <ProfileViewer user={user} loading={loading} error={error} hasSearched={hasSearched} />
        <Repositories repos={repos} repoCount={repoCount} loading={loading} user={user} hasSearched={hasSearched} />
      </main>
    </div>
  );
}

export default App;
