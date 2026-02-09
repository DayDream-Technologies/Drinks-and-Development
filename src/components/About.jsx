import { content } from '../content'
import { ScrollReveal } from './ScrollReveal'

export function About() {
  const { title, paragraph1, paragraph2 } = content.about

  return (
    <section className="about section-bg" id="about">
      <ScrollReveal variant="up" className="section-inner">
        <h2 className="about-title">{title}</h2>
        <p className="about-p">{paragraph1}</p>
        <p className="about-p">{paragraph2}</p>
      </ScrollReveal>
    </section>
  )
}
