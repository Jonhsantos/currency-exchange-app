import { useEffect, useState } from 'react'
import * as api from './services/frankfurter'
import { initialPairs, periods } from './constants/currencies'
import { change } from './utils/format'
import Sidebar from './components/Sidebar'
import PageHeader from './components/PageHeader'
import Dashboard from './components/Dashboard'
import Converter from './components/Converter'
import Favorites from './components/Favorites'
import AppFooter from './components/AppFooter'

function App() {
  const [page, setPage] = useState('Visão geral')
  const [base, setBase] = useState('USD')
  const [quote, setQuote] = useState('BRL')
  const [amount, setAmount] = useState('1000')
  const [period, setPeriod] = useState('Semana')
  const [list, setList] = useState({ USD: 'United States Dollar', BRL: 'Brazilian Real', EUR: 'Euro', GBP: 'British Pound', JPY: 'Japanese Yen' })
  const [favorites, setFavorites] = useState(() => { try { const saved = JSON.parse(localStorage.getItem('cambio-favorites')); return Array.isArray(saved) ? saved.filter((p) => typeof p === 'string' && /^[A-Z]{3}\/[A-Z]{3}$/.test(p)) : initialPairs } catch { return initialPairs } })
  const [search, setSearch] = useState('')
  const [refresh, setRefresh] = useState(0)
  const [rates, setRates] = useState({})
  const [series, setSeries] = useState([])
  const [conversion, setConversion] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => { localStorage.setItem('cambio-favorites', JSON.stringify(favorites)) }, [favorites])
  useEffect(() => { const controller = new AbortController(); api.currencies(controller.signal).then(setList).catch(() => {}); return () => controller.abort() }, [])
  useEffect(() => {
    const controller = new AbortController()
    setLoading(true); setError(''); setRates({})
    const pairs = [...new Set([...initialPairs, ...favorites])]
    Promise.all(pairs.map(async (pair) => { const [from, to] = pair.split('/'); const points = await api.history(from, to, 10, controller.signal); return [pair, { points, rate: points.at(-1)?.rate, date: points.at(-1)?.date, change: change(points.slice(-2)) }] }))
      .then((entries) => setRates(Object.fromEntries(entries)))
      .catch((err) => { if (err.name !== 'AbortError') setError(err.message) })
      .finally(() => { if (!controller.signal.aborted) setLoading(false) })
    return () => controller.abort()
  }, [favorites, refresh])
  useEffect(() => { const controller = new AbortController(); setSeries([]); api.history('USD', 'BRL', periods[period], controller.signal).then(setSeries).catch((err) => { if (err.name !== 'AbortError') setError(err.message) }); return () => controller.abort() }, [period, refresh])
  useEffect(() => { const controller = new AbortController(); setConversion(null); api.latest(base, quote, controller.signal).then(setConversion).catch((err) => { if (err.name !== 'AbortError') setError(err.message) }); return () => controller.abort() }, [base, quote, refresh])
  const toggle = (pair) => setFavorites((old) => old.includes(pair) ? old.filter((item) => item !== pair) : [...old, pair])
  const goPair = (from, to) => { setBase(from); setQuote(to); setPage('Conversor') }
  const active = `${base}/${quote}`
  const latestDate = rates['USD/BRL']?.date
  const title = page === 'Conversor' ? 'Conversor de moedas' : page
  const subtitles = { 'Visão geral': 'Acompanhe as moedas que importam para você.', Conversor: 'Simule valores usando cotações de referência.', Favoritos: 'Acompanhe de perto os pares que você escolheu.' }
  const largest = favorites.map((pair) => ({ pair, value: rates[pair]?.change })).filter((item) => item.value != null).sort((a, b) => Math.abs(b.value) - Math.abs(a.value))[0]

  return <div className="min-h-screen md:flex">
    <Sidebar page={page} setPage={setPage} />
    <main className="min-w-0 flex-1 px-5 py-8 md:px-9"><div className="mx-auto max-w-[1200px]">
      <PageHeader page={page} title={title} subtitle={subtitles[page]} setPage={setPage} setRefresh={setRefresh} />
      {error && <div role="alert" className="mb-5 flex flex-wrap items-center justify-between gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}<button onClick={() => setRefresh((v) => v + 1)} className="underline">Tentar novamente</button></div>}
      {page === 'Visão geral' && <Dashboard rates={rates} latestDate={latestDate} series={series} period={period} setPeriod={setPeriod} error={error} setPage={setPage} />}
      {page === 'Conversor' && <Converter base={base} quote={quote} setBase={setBase} setQuote={setQuote} amount={amount} setAmount={setAmount} list={list} conversion={conversion} favorites={favorites} toggle={toggle} active={active} rates={rates} goPair={goPair} />}
      {page === 'Favoritos' && <Favorites favorites={favorites} largest={largest} latestDate={latestDate} search={search} setSearch={setSearch} list={list} rates={rates} goPair={goPair} toggle={toggle} />}
      <AppFooter loading={loading} />
    </div></main>
  </div>
}
export default App
