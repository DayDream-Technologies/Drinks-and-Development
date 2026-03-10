import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Events } from '../components/Events'
// import { Signup } from '../components/Signup' // TODO: implement later
import { ImageBanner } from '../components/ImageBanner'

const MEETING_IMAGE = `${import.meta.env.BASE_URL}meeting.jpg`

/* Other placeholder images — TODO: implement later
const BANNER_IMAGES = {
  community: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&q=80',
  networking: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80',
}
*/

export function HomePage() {
  const location = useLocation()

  useEffect(() => {
    if (window.location.hash === '#events') {
      const el = document.getElementById('events')
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
    }
  }, [location.pathname, location.hash])

  return (
    <>
      <Hero />
      <main>
        {/* <ImageBanner src={BANNER_IMAGES.community} alt="" /> */}
        <About />
        <ImageBanner src={MEETING_IMAGE} alt="A Drinks and Development meetup" caption="A Drinks and Development meetup — networking over drinks in Grand Rapids." />
        <Events />
        {/* <ImageBanner src={BANNER_IMAGES.networking} alt="" /> */}
        {/* <Signup /> */} {/* TODO: implement later */}
      </main>
    </>
  )
}
