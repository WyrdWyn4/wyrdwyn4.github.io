import Link from "next/link";

export default function ProjectLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-64 flex-shrink-0">
          <div className="sticky top-24 space-y-2">
            <h2 className="text-xl font-bold capitalize mb-4">{params.slug.replace('-', ' ')}</h2>
            <nav className="flex flex-col space-y-1">
              {['overview', 'tech-stack', 'results'].map((tab) => (
                <Link 
                  key={tab}
                  href={`/projects/${params.slug}/${tab}`}
                  className="px-4 py-2 rounded-lg hover:bg-secondary text-sm font-medium capitalize"
                >
                  {tab.replace('-', ' ')}
                </Link>
              ))}
            </nav>
            <div className="pt-4 mt-4 border-t">
              <Link href="/projects" className="text-sm text-muted-foreground hover:text-primary">
                ← Back to all projects
              </Link>
            </div>
          </div>
        </aside>

        <div className="flex-1 min-w-0">
          {children}
        </div>
      </div>
    </div>
  );
}