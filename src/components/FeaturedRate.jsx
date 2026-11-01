import { date, money } from '../utils/format'

export default function FeaturedRate({ rates, latestDate }) {
  return (
    <section className="mb-5 flex items-center justify-between gap-3 rounded-[13px] bg-ink px-[22px] py-4 text-white"><div className="flex items-center gap-3.5"><div className="flex h-[42px] w-[42px] items-center justify-center rounded-xl bg-[#243954] text-xl font-bold">$</div><div><p className="text-[15px] font-semibold">USD / BRL</p><p className="mt-1 text-[11px] text-[#b8c6d8]">Dólar americano · Real brasileiro</p></div></div><div className="text-right"><p className="text-[26px] font-bold">{money(rates['USD/BRL']?.rate, 'BRL')}</p><p className="font-mono text-[10px] text-[#b8c6d8]">Referência: {date(latestDate)}</p></div></section>
  )
}
