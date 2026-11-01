import FeaturedRate from './FeaturedRate'
import ExchangeChart from './ExchangeChart'
import MarketSummary from './MarketSummary'

export default function Dashboard({ rates, latestDate, series, period, setPeriod, error, setPage }) {
  return (
    <>
      <FeaturedRate rates={rates} latestDate={latestDate} />
      <ExchangeChart series={series} period={period} setPeriod={setPeriod} error={error} />
      <MarketSummary rates={rates} setPage={setPage} />
    </>
  )
}
