import FavoritesSummary from './FavoritesSummary'
import FavoritesTable from './FavoritesTable'

export default function Favorites({ favorites, largest, latestDate, search, setSearch, list, rates, goPair, toggle }) {
  return (
    <>
      <FavoritesSummary favorites={favorites} largest={largest} latestDate={latestDate} />
      <FavoritesTable favorites={favorites} search={search} setSearch={setSearch} list={list} rates={rates} goPair={goPair} toggle={toggle} />
      <p className="mt-6 text-[11px] text-muted">As cotações são taxas de referência e não representam valores em tempo real. A variação compara as duas últimas datas disponíveis.</p>
    </>
  )
}
