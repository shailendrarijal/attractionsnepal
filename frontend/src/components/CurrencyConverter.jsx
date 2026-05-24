import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

const FALLBACK_RATES = {
  USD: 0.0075,
  EUR: 0.0069,
  GBP: 0.0059,
  AUD: 0.011,
  INR: 0.63,
}

const CURRENCIES = [
  { code: 'USD', label: 'US Dollar', symbol: '$', decimals: 2 },
  { code: 'EUR', label: 'Euro', symbol: '€', decimals: 2 },
  { code: 'GBP', label: 'Brit. Pound', symbol: '£', decimals: 2 },
  { code: 'AUD', label: 'Aus. Dollar', symbol: 'A$', decimals: 2 },
  { code: 'INR', label: 'Indian Rupee', symbol: '₹', decimals: 0 },
]

function ShimmerCard() {
  return (
    <div className="rounded-xl border border-gray-100 bg-gray-100 animate-pulse p-3 flex flex-col items-center">
      <div className="h-3 w-10 bg-gray-200 rounded mb-2" />
      <div className="h-5 w-16 bg-gray-200 rounded" />
    </div>
  )
}

export default function CurrencyConverter() {
  const [amount, setAmount] = useState(1000)

  const { data, isLoading, isError } = useQuery({
    queryKey: ['exchangeRates', 'NPR'],
    queryFn: async () => {
      const res = await fetch('https://open.er-api.com/v6/latest/NPR')
      if (!res.ok) throw new Error('Failed to fetch rates')
      return res.json()
    },
    staleTime: 60 * 60 * 1000, // 1 hour
    retry: 1,
  })

  const rates = isError || !data?.rates ? FALLBACK_RATES : data.rates

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <h3 className="font-display font-bold text-gray-900 mb-4 text-base">
        💱 Currency Converter
      </h3>

      {/* NPR input */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-sm font-semibold text-gray-500 shrink-0">NPR</span>
        <input
          type="number"
          min={0}
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full rounded-xl border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
          placeholder="Amount in NPR"
        />
      </div>

      {/* Currency cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {isLoading
          ? CURRENCIES.map((c) => <ShimmerCard key={c.code} />)
          : CURRENCIES.map(({ code, label, symbol, decimals }) => {
              const converted = (amount * (rates[code] ?? FALLBACK_RATES[code])).toFixed(decimals)
              return (
                <div
                  key={code}
                  className="rounded-xl border border-gray-100 bg-gray-50 p-3 flex flex-col items-center text-center"
                >
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                    {code}
                  </p>
                  <p className="text-sm font-bold text-gray-900">
                    {symbol}{converted}
                  </p>
                  <p className="text-xs text-gray-400">{label}</p>
                </div>
              )
            })}
      </div>

      {isError && (
        <p className="text-xs text-amber-600 mt-3 text-center">
          Rates temporarily unavailable — showing approximate values.
        </p>
      )}
    </div>
  )
}
