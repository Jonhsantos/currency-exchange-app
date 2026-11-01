# Referência visual

A referência disponível é o arquivo **`dev.pen`**

## Telas de referência

1. **Câmbio — Dashboard:** navegação lateral, cotação em destaque, gráfico de evolução e resumo do mercado.
2. **Câmbio — Conversor:** seleção de moedas, resultado, ação de salvar par e conversões populares.
3. **Câmbio — Favoritos:** indicadores, busca e lista de pares.

## Aplicação

- Marca: Corrency exchange.
- Fontes usadas: Geist e Geist Mono, com fontes genéricas como fallback.
- Fundo: `#F4F7FA`; texto principal: `#14243A`; destaque: `#07866E`; bordas: `#E5EAF0`.
- Estilos e tokens globais: `src/index.css`. Os painéis compartilham `src/components/Panel.module.css`; o restante usa Tailwind.
- O desenho contém valores ilustrativos; a aplicação os substitui por dados da API e informa a data de referência.
- O gráfico é responsivo e deve ocupar a largura do painel, sem reproduzir a linha ilustrativa truncada no desenho.
