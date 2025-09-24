import { getSkillsData } from '@/lib/content'

export function Skills() {
  const skillsData = getSkillsData()

  if (skillsData.categories.length === 0) return null

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-xl font-semibold mb-6">{skillsData.title}</h2>
        <div className="space-y-4">
          {skillsData.categories.map((category) => (
            <div key={category.name}>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-muted rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
