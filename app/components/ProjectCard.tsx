export default function ProjectCard({ project }: { project: any }) {
  return (
    <div className="border border-white/10 p-6 rounded-xl hover:border-cyan-500/50 transition-all">
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-400 mb-4">{project.description}</p>
      <div className="flex gap-2 mb-4">
        {project.tags.map((tag: string) => (
          <span key={tag} className="text-xs bg-white/5 px-2 py-1 rounded">{tag}</span>
        ))}
      </div>
      <a href={project.url} className="text-cyan-400 hover:underline">View on GitHub →</a>
    </div>
  );
}