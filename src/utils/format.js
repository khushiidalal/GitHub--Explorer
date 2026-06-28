export function formatDate(value, options = { month: "long", day: "numeric", year: "numeric" }) {
  if (!value) return "Not Available";
  return new Intl.DateTimeFormat("en-US", options).format(new Date(value));
}

export function normalizeBlog(blog) {
  if (!blog) return null;
  return /^https?:\/\//i.test(blog) ? blog : `https://${blog}`;
}
