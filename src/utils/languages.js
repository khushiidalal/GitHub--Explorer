const languageColors = {
  JavaScript: "bg-yellow-300",
  TypeScript: "bg-sky-400",
  Python: "bg-blue-400",
  HTML: "bg-orange-400",
  CSS: "bg-purple-400",
  Java: "bg-red-400",
  Go: "bg-cyan-400",
  Ruby: "bg-rose-400",
  PHP: "bg-indigo-400",
  "C++": "bg-pink-400",
  C: "bg-gray-300",
  Shell: "bg-emerald-400",
  Rust: "bg-amber-500",
  Swift: "bg-orange-300",
  Kotlin: "bg-violet-400",
};

export function getLanguageColor(language) {
  return languageColors[language] || "bg-slate-400";
}
