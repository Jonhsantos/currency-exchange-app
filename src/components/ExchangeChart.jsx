import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { periods } from '../constants/currencies'
import { change, date, money, number, percent } from '../utils/format'
import styles from './Panel.module.css'

export default function ExchangeChart({ series, period, setPeriod, error }) {
  return (
    <section className={`${styles.panel} mb-5 min-h-[440px] w-full p-5 sm:p-6`}><div className="flex flex-wrap items-start justify-between gap-4"><div><h2 className="text-base font-semibold">Evolução da cotação</h2><p className="mt-2 text-[11px] text-muted"><span className={`mr-2 text-xs font-semibold ${change(series) < 0 ? 'text-red-500' : 'text-brand'}`}>{percent(change(series))}</span>no período selecionado</p></div><div className="flex rounded-lg bg-canvas p-[3px]">{Object.keys(periods).map((p) => <button key={p} onClick={() => setPeriod(p)} className={`rounded-md px-2.5 py-2 text-[11px] sm:px-3 ${p === period ? 'bg-white font-semibold shadow-sm' : 'text-muted'}`}>{p}</button>)}</div></div>
          <div className="mt-8 h-[280px] w-full min-w-0">{series.length ? <ResponsiveContainer width="100%" height="100%"><LineChart data={series} margin={{ left: 0, right: 12 }}><CartesianGrid vertical={false} stroke="#e5eaf0"/><XAxis dataKey="date" tickFormatter={(v) => date(v).slice(0, 5)} tick={{ fontSize: 10, fill: '#718096' }} tickLine={false} axisLine={false} minTickGap={30}/><YAxis width={45} domain={['auto', 'auto']} tickFormatter={(v) => number(v, 2)} tick={{ fontSize: 10, fill: '#718096' }} tickLine={false} axisLine={false}/><Tooltip labelFormatter={date} formatter={(v) => [money(v, 'BRL'), 'Cotação']}/><Line type="monotone" dataKey="rate" stroke="#07866e" strokeWidth={3} dot={series.length < 3}/></LineChart></ResponsiveContainer> : <p className="pt-20 text-center text-sm text-muted">{error || 'Carregando histórico...'}</p>}</div>
        </section>
  )
}
