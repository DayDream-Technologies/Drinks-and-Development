import { useEffect, useMemo } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import L from 'leaflet'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'

const pinIcon = L.icon({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

const GRAND_RAPIDS = [42.9634, -85.6681]

function FitVenues({ venues }) {
  const map = useMap()

  useEffect(() => {
    if (!venues.length) return
    const bounds = L.latLngBounds(venues.map((venue) => [venue.lat, venue.lng]))
    map.fitBounds(bounds, { padding: [88, 88], maxZoom: 12 })
  }, [map, venues])

  return null
}

function scrollToEvent(eventId) {
  document.getElementById(`event-${eventId}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function PastEventsMap({ events = [] }) {
  const venues = useMemo(() => {
    const byVenue = new Map()
    events.forEach((event) => {
      const key = event.venueId || event.id
      if (!byVenue.has(key)) {
        byVenue.set(key, {
          id: key,
          name: event.location,
          lat: event.lat,
          lng: event.lng,
          events: [],
        })
      }
      byVenue.get(key).events.push(event)
    })
    return [...byVenue.values()].filter((venue) => Number.isFinite(venue.lat) && Number.isFinite(venue.lng))
  }, [events])

  if (!venues.length) return null

  return (
    <div className="past-events-map-wrap">
      <MapContainer
        className="past-events-map"
        center={GRAND_RAPIDS}
        zoom={11}
        scrollWheelZoom
        aria-label="Map of past Drinks and Development events in Grand Rapids and West Michigan"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FitVenues venues={venues} />
        {venues.map((venue) => (
          <Marker key={venue.id} position={[venue.lat, venue.lng]} icon={pinIcon}>
            <Popup>
              <p className="past-events-map-popup-title">{venue.name}</p>
              {venue.events.length > 1 ? (
                <ul className="past-events-map-popup-list">
                  {venue.events.map((event, index) => (
                    <li key={event.id}>
                      <button
                        type="button"
                        className="past-events-map-popup-link"
                        onClick={() => scrollToEvent(event.id)}
                      >
                        Meetup {index + 1}
                        {event.sponsors?.[0]?.name ? `: ${event.sponsors[0].name}` : ''}
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <button
                  type="button"
                  className="past-events-map-popup-link"
                  onClick={() => scrollToEvent(venue.events[0].id)}
                >
                  View meetup
                </button>
              )}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
