# Testes funcionais

## Verificações executadas

Em 01/11/2026:

| Verificação | Resultado |
| --- | --- |
| `npm run build` | Concluído; Vite avisou sobre um bundle maior que 500 kB. |
| `npm run lint` | Concluído sem erros, com três avisos `react/set-state-in-effect` em `src/App.jsx`. |

Essas verificações não substituem testes de interação. Não há script de testes automatizados configurado em `package.json`.

## Roteiro manual pendente

Execute `npm run dev`, abra o endereço informado e registre os resultados no ambiente usado.

| Caso | Procedimento | Resultado esperado | Situação |
| --- | --- | --- | --- |
| Navegação | Abrir as três opções do menu. | Tela e título correspondem à opção. | Não executado |
| Gráfico | Selecionar cada período e redimensionar a janela. | Histórico muda e gráfico ocupa o painel sem corte. | Não executado |
| Conversão | Informar valor e selecionar moedas distintas. | Resultado corresponde ao valor multiplicado pela taxa mostrada. | Não executado |
| Inversão | Clicar no botão de inverter moedas. | Origem e destino trocam e a taxa é atualizada. | Não executado |
| Mesma moeda | Selecionar a mesma moeda nos dois campos. | Taxa 1 e resultado igual ao valor informado. | Não executado |
| Favoritos | Salvar um par, recarregar e removê-lo. | Par persiste após recarga e desaparece ao remover. | Não executado |
| Busca | Filtrar a lista por código ou nome. | Apenas pares correspondentes são exibidos. | Não executado |
| Pares populares | Selecionar um par sugerido. | Conversor passa a usar o par selecionado. | Não executado |
| Erro de rede | Desconectar a rede e atualizar; reconectar e tentar novamente. | Erro é informado e nova tentativa pode recuperar dados. | Não executado |
| Responsividade e teclado | Testar telas estreitas e navegar com Tab. | Controles continuam utilizáveis e foco é visível. | Não executado |
