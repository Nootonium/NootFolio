function TechBadge({ tech }: { tech: string }) {
  const techColors: { [key: string]: string } = {
    ts: 'bg-blue-600 text-white', // TypeScript - Blue
    django: 'bg-green-600 text-white', // Django - Dark Green
    html: 'bg-orange-500 text-white', // HTML - Orange
    css: 'bg-blue-400 text-white', // CSS - Blue
    js: 'bg-yellow-300 text-black', // JavaScript - Yellow
    react: 'bg-blue-500 text-white', // React - Blue
    vue: 'bg-green-400 text-white', // Vue.js - Green
    angular: 'bg-red-600 text-white', // Angular - Red
    python: 'bg-blue-300 text-white', // Python - Light Blue
    java: 'bg-red-500 text-white', // Java - Red
    ruby: 'bg-red-700 text-white', // Ruby - Dark Red
    rust: 'bg-orange-600 text-white', // Rust - Orange
    go: 'bg-blue-700 text-white', // Go - Dark Blue
    csharp: 'bg-purple-600 text-white', // C# - Purple
    swift: 'bg-orange-400 text-white', // Swift - Orange
    kotlin: 'bg-orange-700 text-white', // Kotlin - Dark Orange
    php: 'bg-purple-500 text-white', // PHP - Purple
  };

  let colorClasses = 'bg-neutral-300 text-neutral-800';

  if (techColors[tech.toLowerCase()]) {
    colorClasses = techColors[tech.toLowerCase()];
  }
  return (
    <span
      key={tech}
      className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${colorClasses}`}
    >
      {tech}
    </span>
  );
}

export default TechBadge;
