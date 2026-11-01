import { date, percent } from '../utils/format'
import styles from './Panel.module.css'

export default function FavoritesSummary({ favorites, largest, latestDate }) {
  return (
    <div className="mb-6 grid gap-[18px] sm:grid-cols-3">{[['Pares salvos', String(favorites.length).padStart(2, '0'), 'Moedas acompanhadas'], ['Maior variação', percent(largest?.value), largest ? `${largest.pair.replace('/', ' / ')} · última referência` : 'Sem dados disponíveis'], ['Última atualização', date(latestDate), 'Data da cotação de referência']].map(([label, value, detail]) => <div key={label} className={`${styles.panel} p-[18px]`}><p className="text-[11px] text-muted">{label}</p><p className="mt-2 text-lg font-semibold">{value}</p><p className="mt-1 text-[10px] text-muted">{detail}</p></div>)}</div>
  )
}
