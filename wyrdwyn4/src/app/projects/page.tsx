import Link from "next/link";

const projects = [
  {
    id: "mission-planner",
    title: "Mission Planner",
    description: "A comprehensive tool for planning autonomous drone missions.",
    tags: ["React", "TypeScript", "Datalakes"],
    link: "/projects/mission-planner/overview"
  },
  {
    id: "behas",
    title: "Behas Social",
    description: "A forum-based social media networking platform connecting communities.",
    tags: ["Next.js", "Node", "PostgreSQL"],
    link: "/projects/behas/overview"
  }
];

export default function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Featured Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link key={project.id} href={project.link} className="group block">
            <div className="h-full border rounded-xl p-6 hover:shadow-lg transition-all hover:border-primary/50 bg-card">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition">{project.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}