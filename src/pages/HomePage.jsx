import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Events } from '../components/Events'
import { Signup } from '../components/Signup'

export function HomePage() {
  return (
    <>
      <Hero />
      <main>
        <About />
        <Events />
        <Signup />
      </main>
    </>
  )
}
