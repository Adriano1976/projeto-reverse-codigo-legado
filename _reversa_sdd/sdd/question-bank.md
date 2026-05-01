# Question Bank (Banco de Questões e Feedbacks)

## Visão Geral
Gerencia o conteúdo das perguntas bíblicas, as alternativas de resposta e o processamento de feedback (certo/errado) baseado na escolha do usuário.

## Responsabilidades
- Armazenar enunciados e alternativas de questões. 🟢
- Validar se a alternativa escolhida é a correta para a questão específica. 🟢
- Exibir janelas de feedback com a referência bíblica para conferência. 🟢
- Contabilizar pontos para cada acerto no estado global do jogo. 🟢

## Interface
- **Entrada:** Chamada de função da pergunta (ex: `daniel_116`).
- **Saída:** Criação de janelas `Toplevel` com widgets de texto e botões de comando.

## Regras de Negócio
- Cada questão deve possuir exatamente 4 alternativas. 🟢
- O feedback "CERTO" deve ser exibido em uma janela com fundo verde (`green`). 🟢
- O feedback "ERRADA" deve ser exibido em uma janela com fundo vermelho (`red`). 🟢
- A janela de feedback deve obrigatoriamente mostrar o texto do versículo bíblico correspondente. 🟢

## Fluxo Principal
1. O usuário clica em um botão de referência no menu principal.
2. A função correspondente à referência é disparada (ex: `joao_148`).
3. Uma nova janela é aberta com o enunciado e 4 botões de alternativa.
4. Ao clicar em uma alternativa, um handler de feedback é chamado (`bt[id]_onclick`).
5. Uma terceira janela é aberta exibindo o resultado e a referência bíblica.

## Fluxos Alternativos
- **Múltiplas janelas:** O usuário pode manter várias janelas de perguntas abertas simultaneamente. 🟡

## Dependências
- `Quiz Engine` — Para receber os eventos de clique iniciais. 🟢
- `tkinter` — Para renderização das janelas modais/toplevel. 🟢

## Requisitos Não Funcionais

| Tipo | Requisito inferido | Evidência no código | Confiança |
|------|--------------------|---------------------|-----------|
| Confiabilidade | Dados hardcoded garantem que o conteúdo nunca "suma" por falha de DB | `app/JogoBiblico.pyw:1-2900` | 🟢 |
| UX | Feedback visual imediato via cores (Verde/Vermelho) | Handlers `bt[id]_onclick` | 🟢 |

## Critérios de Aceitação

```gherkin
Dado que uma janela de pergunta está aberta
Quando o usuário seleciona a alternativa correta
Então uma janela verde com o título "CERTO" deve aparecer e +1 ponto deve ser somado ao placar.

Dado que uma janela de pergunta está aberta
Quando o usuário seleciona uma alternativa incorreta
Então uma janela vermelha com o título "ERRADA" e o versículo deve aparecer
```

## Prioridade

| Requisito | MoSCoW | Justificativa |
|-----------|--------|---------------|
| Validação de Resposta | Must | O objetivo principal do jogo é o acerto/erro. |
| Exibição de Versículo | Must | Regra de negócio central de base bíblica. |
| Cores de Feedback | Should | Melhora a percepção rápida do resultado. |

## Rastreabilidade de Código

| Arquivo | Função / Classe | Cobertura |
|---------|-----------------|-----------|
| `app/JogoBiblico.pyw` | Funções `[referencia]` (ex: `tiago_514`) | 🟢 |
| `app/JogoBiblico.pyw` | Funções `bt[id]_onclick` | 🟢 |
