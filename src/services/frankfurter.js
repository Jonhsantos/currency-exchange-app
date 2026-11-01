const API = 'https://api.frankfurter.dev/v1'

async function request(path, signal) {
  const response = await fetch(`${API}${path}`, { signal })
  if (!response.ok) throw new Error('Não foi possível carregar as cotações. Tente novamente.')
  return response.json()
}

export const currencies = (signal) => request('/currencies', signal)
export async function latest(base, quote, signal) {
  if (base === quote) return { rate: 1, date: new Date().toISOString().slice(0, 10) }
  const data = await request(`/latest?base=${base}&symbols=${quote}`, signal)
  return { rate: data.rates[quote], date: data.date }
}
export async function history(base, quote, days, signal) {
  const start = new Date()
  start.setUTCDate(start.getUTCDate() - days)
  const from = start.toISOString().slice(0, 10)
  if (base === quote) return [{ date: from, rate: 1 }, { date: new Date().toISOString().slice(0, 10), rate: 1 }]
  const data = await request(`/${from}..?base=${base}&symbols=${quote}`, signal)
  return Object.entries(data.rates).map(([date, rates]) => ({ date, rate: rates[quote] })).sort((a, b) => a.date.localeCompare(b.date))
}
