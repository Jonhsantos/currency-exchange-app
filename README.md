# Corrency exchange

Aplicação de consulta e conversão de moedas baseada no desenho `dev.pen`. Utiliza taxas de referência da [Frankfurter](https://frankfurter.dev/); elas não representam necessariamente o preço em tempo real nem incluem tarifas de uma operação.

## Funcionalidades

- Visão geral da cotação USD/BRL e gráfico histórico por período.
- Conversão entre moedas disponíveis na API, com opção de inverter o par.
- Pares favoritos com busca e armazenamento no navegador.
- Atualização manual e indicação de erro quando consultas falham.

## Tecnologias

React, Vite, Tailwind CSS, CSS Modules, Recharts e Lucide React. É necessário acesso à internet para consultar a API e carregar as fontes externas.

## Como executar

Instale uma versão do Node.js compatível com o Vite instalado e o npm. Na raiz do projeto:

```bash
npm install
npm run dev
```

Abra o endereço informado pelo Vite no terminal. Outros comandos:

```bash
npm run build    # gera a versão de produção em dist/
npm run preview  # apresenta localmente o build gerado
npm run lint     # executa o Oxlint
```

Não é necessária chave de API nem configuração de variáveis de ambiente. Os favoritos ficam no `localStorage` do navegador, sob a chave `cambio-favorites`.

## Estrutura

```text
src/
  components/   componentes de interface e CSS Module compartilhado
  constants/    moedas iniciais e períodos
  services/     integração com Frankfurter
  utils/        formatação e cálculo de variação
  App.jsx       estado e composição das telas
  index.css     Tailwind, fontes e tokens globais
  main.jsx      ponto de entrada React
docs/           requisitos, componentes, desenho e testes
dev.pen         arquivo de referência visual
```

## Documentação

- [Requisitos](docs/REQUIREMENTS.md)
- [Componentes](docs/COMPONENTS.md)
- [Referência visual](docs/FIGMA.md)
- [Testes da API](docs/API_TESTS.md)
- [Testes funcionais](docs/FUNCTION_TESTS.md)
- [Uso de inteligência artificial](docs/AI_USAGE.md)
