import { money } from '../utils/format'
import styles from './Panel.module.css'

export default function PopularConversions({ rates, goPair }) {
  return (
    <section className={`${styles.panel} mt-5 p-6`}><h2 className="mb-4 text-sm font-semibold">Conversões populares</h2><div className="grid gap-3 sm:grid-cols-3">{['USD', 'EUR', 'GBP'].map((code) => <button key={code} onClick={() => goPair(code, 'BRL')} className="rounded-[9px] bg-canvas p-4 text-left hover:bg-[#e6f5f1]"><strong className="font-mono text-xs">{code} → BRL</strong><p className="mt-2 text-[11px] text-muted">1 {code} = {money(rates[`${code}/BRL`]?.rate, 'BRL')}</p></button>)}</div></section>
  )
}
