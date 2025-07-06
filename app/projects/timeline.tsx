export default function ProjectTimeline() {
  const projects = [
    {
      title: 'Portfolio Starter Kit',
      description: 'Developed a Next.js template optimized for blogs and portfolios.',
      date: '2023-01-15',
    },
    {
      title: 'Static Typing Exploration',
      description: 'Published a blog post on the advantages of static typing in programming.',
      date: '2024-04-07',
    },
    {
      title: 'Spaces vs Tabs Debate',
      description: 'Wrote an article discussing the pros and cons of spaces and tabs for indentation.',
      date: '2024-04-08',
    },
    {
      title: 'Dynamic OG Images',
      description: 'Implemented dynamic Open Graph images for enhanced social sharing.',
      date: '2023-06-20',
    },
  ]

  return (
    <section className="px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Project Timeline</h1>
      <ul className="space-y-4">
        {projects.map((project, index) => (
          <li key={index} className="border-b pb-4">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-neutral-600 dark:text-neutral-400">{project.description}</p>
            <p className="text-sm text-neutral-500 dark:text-neutral-300">{project.date}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
