import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Events } from '../components/Events'
import { Signup } from '../components/Signup'
import { ImageBanner } from '../components/ImageBanner'

/* Placeholder images: drinks/meetup-style (replace with your own assets) */
const BANNER_IMAGES = {
  community: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&q=80',
  meetup: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1200&q=80',
  networking: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80',
}

export function HomePage() {
  return (
    <>
      <Hero />
      <main>
        <ImageBanner src={BANNER_IMAGES.community} alt="" />
        <About />
        <ImageBanner src={BANNER_IMAGES.meetup} alt="" />
        <Events />
        <ImageBanner src={BANNER_IMAGES.networking} alt="" />
        <Signup />
      </main>
    </>
  )
}
