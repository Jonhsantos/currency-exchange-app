
export default function AppFooter({ loading }) {
  return (
    <footer className="mt-8 text-[11px] text-muted">Dados fornecidos por <a className="underline" href="https://frankfurter.dev/" target="_blank" rel="noreferrer">Frankfurter</a>. {loading && 'Atualizando cotações...'}</footer>
  )
}
