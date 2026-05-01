# Domínio de Negócio — projeto-python-biblia

## Glossário

| Termo | Definição |
|-------|-----------|
| **Questão** | Unidade básica de interação, composta por um enunciado e quatro alternativas. |
| **Referência Bíblica** | Versículo ou conjunto de versículos que servem de base para a pergunta e confirmação da resposta. |
| **Feedback** | Janela modal exibida após a escolha de uma alternativa, informando o resultado. |
| **Packing** | Componente responsável pela organização visual dos botões de acesso às questões na tela principal. |

## Regras de Negócio

### RN01 — Seleção de Questões
O usuário tem liberdade total para escolher qualquer questão a partir do menu principal. Não existe uma ordem obrigatória ou sistema de progressão. 🟢 CONFIRMADO

### RN02 — Estrutura de Resposta
Cada questão deve apresentar exatamente 4 alternativas, onde apenas uma é marcada como correta através da cor de fundo verde (`green`) no handler de feedback. 🟢 CONFIRMADO

### RN03 — Confirmação de Fonte
Todo feedback (positivo ou negativo) deve apresentar o versículo bíblico na íntegra para que o usuário possa conferir a resposta na própria Bíblia. 🟢 CONFIRMADO

### RN04 — Persistência de Pontuação
O sistema **deve** contabilizar acertos e erros. A nova versão deve implementar um placar visível ao jogador. 🟢 CONFIRMADO (Definição de Reconstrução)

### RN05 — Concorrência de Janelas
O sistema deve restringir a abertura de janelas, permitindo apenas uma questão ativa por vez. Ao abrir uma nova questão, a anterior deve ser fechada ou o acesso bloqueado. 🟢 CONFIRMADO (Definição de Reconstrução)
