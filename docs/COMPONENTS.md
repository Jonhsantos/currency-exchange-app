# Componentes do frontend

Os caminhos são relativos à raiz do projeto. Componentes sem CSS Module próprio usam classes Tailwind; `src/index.css` contém estilos e tokens globais. O módulo `Panel.module.css` é compartilhado pelos componentes de painel.

| Componente | Responsabilidade | Arquivo JSX | CSS Module | Principais props | Estados | Relação |
| --- | --- | --- | --- | --- | --- | --- |
| App | Coordena navegação, consultas, conversão e favoritos. | `src/App.jsx` | — | Nenhuma | `page`, `base`, `quote`, `amount`, `period`, `list`, `favorites`, `search`, `refresh`, `rates`, `series`, `conversion`, `error`, `loading` | Raiz; contém Sidebar, PageHeader, Dashboard, Converter, Favorites e AppFooter. |
| Sidebar | Exibe marca e navegação entre telas. | `src/components/Sidebar.jsx` | — | `page`, `setPage` | Nenhum. | Filho de App. |
| PageHeader | Exibe título, descrição e ação da tela. | `src/components/PageHeader.jsx` | — | `page`, `title`, `subtitle`, `setPage`, `setRefresh` | Nenhum. | Filho de App. |
| Dashboard | Agrupa a visão geral. | `src/components/Dashboard.jsx` | — | `rates`, `latestDate`, `series`, `period`, `setPeriod`, `error`, `setPage` | Nenhum. | Filho de App; contém FeaturedRate, ExchangeChart e MarketSummary. |
| FeaturedRate | Exibe cotação USD/BRL e data. | `src/components/FeaturedRate.jsx` | — | `rates`, `latestDate` | Nenhum. | Filho de Dashboard. |
| ExchangeChart | Exibe histórico, variação e filtros de período. | `src/components/ExchangeChart.jsx` | `src/components/Panel.module.css` | `series`, `period`, `setPeriod`, `error` | Nenhum; controlado por App. | Filho de Dashboard; utiliza Recharts. |
| MarketSummary | Exibe moedas em destaque e acesso aos favoritos. | `src/components/MarketSummary.jsx` | `src/components/Panel.module.css` | `rates`, `setPage` | Nenhum. | Filho de Dashboard. |
| Converter | Agrupa formulário e conversões populares. | `src/components/Converter.jsx` | — | `base`, `quote`, `amount`, `list`, `conversion`, `favorites`, `rates` e callbacks | Nenhum. | Filho de App; contém ConverterPanel e PopularConversions. |
| ConverterPanel | Permite informar valor, escolher e inverter moedas e salvar o par. | `src/components/ConverterPanel.jsx` | `src/components/Panel.module.css` | `base`, `quote`, `amount`, `list`, `conversion`, `favorites`, `active`, setters, `toggle` | Nenhum; campos controlados por App. | Filho de Converter. |
| PopularConversions | Exibe e seleciona pares populares. | `src/components/PopularConversions.jsx` | `src/components/Panel.module.css` | `rates`, `goPair` | Nenhum. | Filho de Converter. |
| Favorites | Agrupa resumo, lista e aviso sobre dados. | `src/components/Favorites.jsx` | — | `favorites`, `largest`, `latestDate`, `search`, `list`, `rates` e callbacks | Nenhum. | Filho de App; contém FavoritesSummary e FavoritesTable. |
| FavoritesSummary | Exibe quantidade, maior variação e data. | `src/components/FavoritesSummary.jsx` | `src/components/Panel.module.css` | `favorites`, `largest`, `latestDate` | Nenhum. | Filho de Favorites. |
| FavoritesTable | Pesquisa, apresenta, abre e remove pares. | `src/components/FavoritesTable.jsx` | `src/components/Panel.module.css` | `favorites`, `search`, `setSearch`, `list`, `rates`, `goPair`, `toggle` | Nenhum; busca e favoritos controlados por App. | Filho de Favorites. |
| AppFooter | Exibe fonte dos dados e atualização em andamento. | `src/components/AppFooter.jsx` | — | `loading` | Nenhum. | Filho de App. |

## Dados compartilhados

`src/services/frankfurter.js` concentra as consultas; `src/constants/currencies.js` define nomes conhecidos, pares iniciais e períodos; `src/utils/format.js` reúne formatação e cálculo da variação. `App` gerencia os estados e salva favoritos no `localStorage`.
