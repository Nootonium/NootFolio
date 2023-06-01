function TechBadge({ tech }: { tech: string }) {
  return (
    <span
      key={tech}
      className='mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700'
    >
      {tech}
    </span>
  );
}

export default TechBadge;
