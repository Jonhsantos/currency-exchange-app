import { Star } from 'lucide-react'
import { names } from '../constants/currencies'
import { money, percent } from '../utils/format'
import styles from './Panel.module.css'

export default function MarketSummary({ rates, setPage }) {
  return (
    <div className="grid gap-5 lg:grid-cols-[740fr_380fr]"><section className={`${styles.panel} p-5`}><div className="mb-3 flex justify-between"><h2 className="text-sm font-semibold">Moedas em destaque</h2><button onClick={() => setPage('Favoritos')} className="text-[11px] font-medium text-brand">Ver favoritos →</button></div>{['EUR', 'GBP', 'JPY'].map((code) => <div key={code} className="flex items-center justify-between py-2 text-[11px]"><div><strong className="mr-3 font-mono">{code}</strong><span className="text-muted">{names[code]}</span></div><div className="flex gap-4 font-mono"><span>{money(rates[`${code}/BRL`]?.rate, 'BRL')}</span><span className={rates[`${code}/BRL`]?.change < 0 ? 'text-red-500' : 'text-brand'}>{percent(rates[`${code}/BRL`]?.change)}</span></div></div>)}</section><section className="rounded-[13px] bg-[#e9f3f4] p-5"><h2 className="text-sm font-semibold">Seu mercado, em um olhar</h2><p className="mt-3 text-xs leading-5 text-muted">Salve pares de moedas para acompanhar suas variações com mais facilidade.</p><button onClick={() => setPage('Favoritos')} className="mt-4 flex items-center gap-2 text-[11px] font-semibold text-brand"><Star size={14}/> Organizar favoritos</button></section></div>
  )
}
