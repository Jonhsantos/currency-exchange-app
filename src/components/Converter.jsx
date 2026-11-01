import ConverterPanel from './ConverterPanel'
import PopularConversions from './PopularConversions'

export default function Converter({ base, quote, setBase, setQuote, amount, setAmount, list, conversion, favorites, toggle, active, rates, goPair }) {
  return (
    <>
      <ConverterPanel base={base} quote={quote} setBase={setBase} setQuote={setQuote} amount={amount} setAmount={setAmount} list={list} conversion={conversion} favorites={favorites} toggle={toggle} active={active} />
      <PopularConversions rates={rates} goPair={goPair} />
    </>
  )
}
