# Inventário — projeto-python-biblia

## Visão Geral
Este projeto é uma aplicação desktop desenvolvida em Python utilizando a biblioteca Tkinter. O objetivo principal parece ser um jogo de perguntas e respostas (quiz) baseado em temas bíblicos.

## Estrutura de Pastas
```text
projeto-python-biblia/
├── app/
│   └── JogoBiblico.pyw
├── .reversa/
└── .agents/
```

## Arquivos Principais
- `app/JogoBiblico.pyw`: Arquivo único contendo toda a lógica da aplicação, interface gráfica (GUI) e banco de dados de perguntas embutido em funções.

## Tecnologias Identificadas
- **Linguagem:** Python
- **Interface Gráfica:** Tkinter (biblioteca padrão do Python)
- **Extensão:** `.pyw` (execução em modo janela sem console no Windows)

## Mapeamento de Módulos
Como o projeto consiste em um único arquivo de mais de 3000 linhas, ele será tratado como um módulo monolítico, mas subdividido logicamente em:
- **GUI Engine:** Inicialização da janela principal e loop de eventos.
- **Pergunta/Resposta Handlers:** Funções específicas para cada questão bíblica.
- **Navegação:** Menus e transições entre telas.
