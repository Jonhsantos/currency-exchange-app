import { Plus, RefreshCw } from 'lucide-react'

export default function PageHeader({ page, title, subtitle, setPage, setRefresh }) {
  return (
    <header className="mb-[26px] flex flex-wrap items-center justify-between gap-4"><div><h1 className="text-[27px] font-bold tracking-tight">{title}</h1><p className="mt-1 text-[13px] text-muted">{subtitle}</p></div>
        {page === 'Visão geral' ? <button onClick={() => setRefresh((v) => v + 1)} className="flex items-center gap-2 rounded-[9px] border border-line bg-white px-3.5 py-2.5 text-[13px] font-medium"><RefreshCw size={15}/> Atualizar</button> : page === 'Conversor' ? <span className="rounded-lg border border-line bg-white px-3 py-2 text-[11px] text-muted"><span className="mr-2 text-brand">●</span>Cotação de referência</span> : <button onClick={() => setPage('Conversor')} className="flex items-center gap-2 rounded-[9px] bg-brand px-3.5 py-3 text-xs font-semibold text-white"><Plus size={15}/>Adicionar moeda</button>}
      </header>
  )
}
