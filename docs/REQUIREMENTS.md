# Requisitos

## Objetivo

Permitir a consulta de taxas de referência, a simulação de conversões e o acompanhamento de pares de moedas em uma interface baseada no `dev.pen`.

## Requisitos funcionais implementados

| ID | Requisito |
| --- | --- |
| RF01 | Navegar entre Visão geral, Conversor e Favoritos. |
| RF02 | Exibir a cotação de referência USD/BRL e sua data. |
| RF03 | Apresentar gráfico histórico USD/BRL com filtros Dia, Semana, Mês, Ano e Tudo. |
| RF04 | Consultar moedas da Frankfurter e converter um valor entre duas moedas. |
| RF05 | Inverter origem e destino e selecionar conversões populares. |
| RF06 | Salvar e remover pares favoritos e filtrá-los por texto. |
| RF07 | Persistir favoritos no navegador e exibir cotação e variação dos pares. |
| RF08 | Permitir atualização manual e exibir mensagem de erro e opção de nova tentativa. |

## Requisitos não funcionais

- Interface responsiva, com navegação por botões e campos identificados por rótulos.
- Uso de React, Tailwind CSS e API pública Frankfurter, sem chave no cliente.
- Formatação de datas e números em português do Brasil.
- O gráfico ocupa a largura disponível de seu painel.
- Favoritos são locais ao navegador; não há conta ou sincronização entre dispositivos.

## Regras e limitações

- As taxas são de referência, não necessariamente de tempo real, e não incluem taxas ou tarifas.
- A variação dos favoritos compara as duas últimas referências disponíveis, não necessariamente 24 horas corridas.
- No código atual, os períodos de gráfico representam 4, 7, 30, 365 e 3.650 dias, respectivamente; “Tudo” não significa todo o histórico disponível.
- Para moedas iguais, a conversão usa taxa 1 localmente, sem consulta à API.
- A atualização de dados depende de conectividade e da disponibilidade da API; o histórico pode não conter cotações para todos os dias.
