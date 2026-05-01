# Spec Impact Matrix — projeto-python-biblia

Esta matriz mapeia como mudanças em um componente impactam as especificações do sistema.

| Componente | Impacto em Lógica | Impacto em Dados | Impacto em UI | Severidade |
|------------|-------------------|-------------------|---------------|------------|
| **Packing Class** | Baixo | Nenhum | Alto | Média |
| **Question Functions** | Médio | Alto | Médio | Alta |
| **Feedback Handlers** | Baixo | Baixo | Alto | Baixa |
| **Tkinter Global Config** | Nenhum | Nenhum | Crítico | Crítica |

## Análise de Impacto de Mudança
- **Adicionar Questão:** Requer nova `Question Function` e novo `Button` na `Packing Class`.
- **Alterar Estilo:** Requer alteração manual em centenas de instâncias de widgets (Label, Button) devido à ausência de CSS ou Temas globais.
- **Corrigir Versículo:** Requer busca textual em milhares de linhas para encontrar a string correta dentro da função de feedback.
