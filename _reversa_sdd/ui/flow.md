# Fluxo de Navegação — projeto-python-biblia

```mermaid
graph TD
    Entry([Início]) --> MainMenu[Menu Principal]
    
    subgraph UI_Components
        MainMenu --> |Clique em Referência| QuestionModal[Janela de Pergunta]
        QuestionModal --> |Escolha de Alternativa| FeedbackModal[Janela de Feedback]
        FeedbackModal --> |Fechar| MainMenu
        FeedbackModal --> |Fechar| QuestionModal
    end
    
    MainMenu --> |Menu Arquivo| Exit([Sair])
```

## Pontos de Entrada e Saída
- **Entrada:** Inicialização do `JogoBiblico.pyw`.
- **Saída:** Botão de fechar do Windows (X) ou Menu Arquivo (se implementado).
