export const number = (value, digits = 4) => new Intl.NumberFormat('pt-BR', { maximumFractionDigits: digits }).format(value)
export const date = (value) => value ? new Date(`${value}T12:00:00`).toLocaleDateString('pt-BR') : '—'
export const money = (value, currency) => value == null ? '—' : new Intl.NumberFormat('pt-BR', { style: 'currency', currency, maximumFractionDigits: value < 1 ? 4 : 2 }).format(value)
export const change = (points) => points?.length > 1 ? (points.at(-1).rate / points[0].rate - 1) * 100 : null
export const percent = (value) => value == null ? '—' : `${value >= 0 ? '+' : ''}${number(value, 2)}%`
