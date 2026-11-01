# Testes da API

## Configuração

Base utilizada pelo projeto: `https://api.frankfurter.dev/v1`. A integração está em `src/services/frankfurter.js`.

## Consultas verificadas

Em 01/11/2026, foram feitas consultas HTTP diretas aos endpoints abaixo. Os valores são exemplos observados, não valores fixos para testes futuros.

| Caso | Requisição | Resultado observado |
| --- | --- | --- |
| Moedas | `GET /currencies` | JSON com códigos e nomes, incluindo USD e BRL. |
| Última referência | `GET /latest?base=USD&symbols=BRL` | JSON com `base: USD`, data `2026-10-30` e `rates.BRL: 5.4325`. |
| Histórico | `GET /2026-10-20..?base=USD&symbols=BRL` | JSON com `rates` indexado por data, incluindo `2026-10-20` e `2026-10-30`. |

Para reproduzir, abra os URLs com a base acima ou use `curl`, por exemplo:

```bash
curl "https://api.frankfurter.dev/v1/latest?base=USD&symbols=BRL"
curl "https://api.frankfurter.dev/v1/2026-10-20..?base=USD&symbols=BRL"
```

## Casos adicionais a testar

- Moeda inválida ou indisponível: conferir resposta da API e mensagem de erro da interface.
- Rede indisponível e recuperação: conferir alerta e botão “Tentar novamente”.
- Par com origem e destino iguais: conferir retorno local de taxa 1, sem requisição.
- Datas sem cotação e histórico vazio: conferir comportamento da interface.
- Mudança rápida de moedas ou períodos: conferir cancelamento de requisições anteriores.

As consultas acima não constituem testes automatizados nem comprovam o comportamento da interface. Não há suíte automatizada de API configurada no projeto.
