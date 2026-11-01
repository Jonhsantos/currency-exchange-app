import { ArrowLeftRight, ChartNoAxesCombined, LayoutDashboard, Star } from 'lucide-react'
const nav = [['Visão geral', LayoutDashboard], ['Conversor', ArrowLeftRight], ['Favoritos', Star]]

export default function Sidebar({ page, setPage }) {
  return (
    <aside className="bg-white px-[22px] py-7 md:min-h-screen md:w-56 md:shrink-0">
      <div className="mb-[30px] flex items-center gap-2.5"><span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[10px] bg-brand text-white"><ChartNoAxesCombined size={19}/></span><span className="text-sm font-bold tracking-tight">Corrency exchange</span></div>
      <nav aria-label="Navegação principal" className="flex gap-2 md:flex-col">{nav.map(([label, Icon]) => <button key={label} onClick={() => setPage(label)} aria-current={page === label ? 'page' : undefined} className={`flex h-11 flex-1 items-center gap-3 rounded-[10px] px-3 text-left text-sm font-semibold md:flex-none ${page === label ? 'bg-[#e6f5f1] text-brand' : 'text-muted hover:bg-canvas'}`}><Icon size={18}/><span className="hidden sm:inline">{label}</span></button>)}</nav>
    </aside>
  )
}
