function TechBadge({ tech }: { tech: string }) {
  const techColors: { [key: string]: string } = {
    typescript: 'bg-blue-600 text-white', // TypeScript - Blue
    django: 'bg-green-600 text-white', // Django - Dark Green
    html: 'bg-orange-500 text-white', // HTML - Orange
    css: 'bg-blue-400 text-white', // CSS - Blue
    javascript: 'bg-yellow-300 text-black', // JavaScript - Yellow
    react: 'bg-blue-500 text-white', // React - Blue
    vue: 'bg-green-400 text-white', // Vue.js - Green
    angular: 'bg-red-600 text-white', // Angular - Red
    python: 'bg-blue-400 text-white', // Python - Light Blue
    java: 'bg-red-500 text-white', // Java - Red
    ruby: 'bg-red-700 text-white', // Ruby - Dark Red
    rust: 'bg-orange-600 text-white', // Rust - Orange
    go: 'bg-blue-700 text-white', // Go - Dark Blue
    csharp: 'bg-purple-600 text-white', // C# - Purple
    swift: 'bg-orange-400 text-white', // Swift - Orange
    kotlin: 'bg-orange-700 text-white', // Kotlin - Dark Orange
    php: 'bg-purple-500 text-white', // PHP - Purple
    flask: 'bg-cyan-500 text-white',
    poetry: 'bg-blue-400 text-white',
    node: 'bg-green-500 text-white',
    express: 'bg-black text-white',
    mongodb: 'bg-green-400 text-white',
    jest: 'bg-red-400 text-white',
    winston: 'bg-blue-400 text-white',
    daisyui: 'bg-yellow-400 text-black',
    vite: 'bg-gradient-to-br from-sky-400 to-purple-500 text-white',
    tailwindcss: 'bg-sky-400 text-white',
    pytorch: 'bg-orange-400 text-white',
    aws: 'bg-yellow-600 text-black',
    docker: 'bg-blue-500 text-white',
    trpc: 'bg-gradient-to-br from-blue-400 to-blue-600 text-white',
    'github actions': 'bg-gray-400 text-white',
    'node.js': 'bg-green-500 text-white',
  };

  let colorClasses = 'bg-neutral-300 text-neutral-800';

  if (techColors[tech.toLowerCase()]) {
    colorClasses = techColors[tech.toLowerCase()];
  }
  return (
    <span
      key={tech}
      className={`bg-grad m-1 inline-block rounded-full px-2 py-1 text-base font-semibold sm:px-4 sm:py-2 sm:text-lg ${colorClasses}`}
    >
      {tech}
    </span>
  );
}

export default TechBadge;
