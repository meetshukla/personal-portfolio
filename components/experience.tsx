import { getExperienceData } from '@/lib/content'

export function Experience() {
  const experienceData = getExperienceData()

  if (experienceData.items.length === 0) return null

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-xl font-semibold mb-6">{experienceData.title}</h2>
        <div className="space-y-6">
          {experienceData.items.map((item, index) => (
            <div key={index} className="border-l-2 border-muted pl-4">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-medium">{item.position}</h3>
                {item.remote && (
                  <span className="text-xs bg-muted px-2 py-1 rounded">Remote</span>
                )}
              </div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-muted-foreground">{item.company}</p>
                <p className="text-xs text-muted-foreground">{item.period}</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
