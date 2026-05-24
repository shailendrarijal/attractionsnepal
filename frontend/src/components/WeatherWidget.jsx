import { useQuery } from '@tanstack/react-query'

function getWeatherEmoji(id) {
  if (id >= 200 && id < 300) return '⛈️'
  if (id >= 300 && id < 400) return '🌦️'
  if (id === 511) return '🌨️'
  if (id >= 500 && id < 505) return '🌧️'
  if (id >= 500 && id < 600) return '🌧️'
  if (id >= 600 && id < 700) return '❄️'
  if (id >= 700 && id < 800) return '🌫️'
  if (id === 800) return '☀️'
  if (id === 801) return '🌤️'
  if (id === 802) return '⛅'
  if (id >= 803) return '☁️'
  return '🌡️'
}

function SkeletonCard() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 animate-pulse">
      <div className="h-4 w-40 bg-gray-200 rounded mb-3" />
      <div className="flex items-center gap-3 mb-2">
        <div className="h-10 w-10 bg-gray-200 rounded" />
        <div className="h-8 w-20 bg-gray-200 rounded" />
      </div>
      <div className="h-3 w-32 bg-gray-100 rounded" />
    </div>
  )
}

export default function WeatherWidget({ placeName, lat, lng }) {
  const apiKey = import.meta.env.VITE_OPENWEATHER_KEY

  const { data, isLoading, isError } = useQuery({
    queryKey: ['weather', lat, lng],
    queryFn: async () => {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}&units=metric`
      )
      if (!res.ok) throw new Error('Weather unavailable')
      return res.json()
    },
    staleTime: 30 * 60 * 1000, // 30 minutes
    enabled: Boolean(apiKey && lat != null && lng != null),
    retry: 1,
  })

  // Hide entirely if no API key or error
  if (!apiKey) return null
  if (isLoading) return <SkeletonCard />
  if (isError || !data) return null

  const temp = Math.round(data.main.temp)
  const description = data.weather?.[0]?.description ?? ''
  const weatherId = data.weather?.[0]?.id ?? 800
  const emoji = getWeatherEmoji(weatherId)
  const humidity = data.main.humidity
  const windKmh = Math.round((data.wind?.speed ?? 0) * 3.6)

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
        Current weather in {placeName}
      </p>

      <div className="flex items-center gap-3 mb-2">
        <span className="text-3xl leading-none" aria-hidden="true">{emoji}</span>
        <div>
          <p className="text-3xl font-bold text-gray-900 leading-none">{temp}°C</p>
          <p className="text-sm text-gray-500 capitalize mt-0.5">{description}</p>
        </div>
      </div>

      <div className="flex items-center gap-4 text-xs text-gray-500 border-t border-gray-100 pt-2 mt-2">
        <span>💧 {humidity}% humidity</span>
        <span>💨 {windKmh} km/h wind</span>
      </div>
    </div>
  )
}
