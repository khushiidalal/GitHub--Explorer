export function getGitHubError(status) {
  if (status === 404) return "User not found. Check the username and try again.";
  if (status === 403) return "GitHub API rate limit exceeded. Please try again later.";
  return "Something went wrong while fetching GitHub data.";
}
