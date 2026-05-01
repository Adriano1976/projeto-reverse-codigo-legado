# 📖 Projeto Reversa — Jogo Bíblico

> **Engenharia reversa completa de um aplicativo desktop legado**, com geração de especificações executáveis por agentes de IA para reconstrução moderna.

[![Python](https://img.shields.io/badge/Python-3.x-blue?logo=python)](https://python.org)
[![Tkinter](https://img.shields.io/badge/GUI-Tkinter-informational)](https://docs.python.org/3/library/tkinter.html)
[![Reversa](https://img.shields.io/badge/Framework-Reversa-purple)](https://github.com/Adriano1976/projeto-reverse-codigo-legado)
[![Confiança](https://img.shields.io/badge/Confiança-100%25-brightgreen)](#relatório-de-confiança)

---

## 📋 Sobre o Projeto

Este repositório contém o código-fonte original do **Jogo Bíblico** — uma aplicação desktop monousuário desenvolvida em Python com Tkinter — e toda a documentação gerada pelo **framework Reversa** durante o processo de engenharia reversa completa do sistema.

O objetivo é preservar o comportamento legado e gerar especificações executáveis que permitam **reconstruir o sistema do zero** com uma arquitetura moderna, limpa e testável.

---

## 🎮 O Sistema Original — Jogo Bíblico

### O que é
Um quiz interativo de perguntas e respostas sobre a Bíblia, com interface gráfica desktop. O jogador seleciona uma referência bíblica no menu principal, responde à pergunta apresentada e recebe feedback imediato com o versículo de confirmação.

### Tecnologias
| Tecnologia | Uso |
|---|---|
| **Python 3** | Linguagem de programação |
| **Tkinter** | Interface gráfica (biblioteca padrão) |
| **`.pyw`** | Extensão para execução sem console no Windows |

### Como executar
```bash
# Certifique-se de ter Python 3 instalado
python app/JogoBiblico.pyw
```

### Estrutura do Projeto
```
projeto-python-biblia/
├── app/
│   └── JogoBiblico.pyw       # Arquivo principal (≈3.293 linhas)
├── _reversa_sdd/             # Especificações geradas pela engenharia reversa
│   ├── architecture.md
│   ├── domain.md
│   ├── code-analysis.md
│   ├── state-machines.md
│   ├── confidence-report.md
│   ├── sdd/
│   │   ├── quiz-engine.md
│   │   └── question-bank.md
│   └── design-system/
│       ├── color-palette.md
│       ├── typography.md
│       └── tokens.md
├── .reversa/                 # Configuração e estado do framework Reversa
│   └── plan.md
└── .agents/                  # Skills dos agentes de IA
```

---

## 🔬 Engenharia Reversa com o Framework Reversa

O projeto passou por uma análise completa em **5 fases** utilizando o framework **Reversa**, resultando em especificações com **100% de confiança**.

### Fases Executadas

| Fase | Agente | Status | Entregável |
|------|--------|--------|------------|
| **1 — Reconhecimento** | `reversa-scout` | ✅ Concluído | `inventory.md`, `dependencies.md` |
| **2 — Escavação** | `reversa-archaeologist` | ✅ Concluído | `code-analysis.md`, `data-dictionary.md` |
| **3 — Interpretação** | `reversa-detective` + `reversa-architect` | ✅ Concluído | `domain.md`, `architecture.md`, `state-machines.md`, `adrs/` |
| **4 — Geração** | `reversa-writer` | ✅ Concluído | `sdd/`, `user-stories/`, `traceability/` |
| **5 — Revisão** | `reversa-reviewer` | ✅ Concluído | `confidence-report.md` |

---

## 🏗️ Arquitetura do Sistema Legado

### Estilo Arquitetural
- **Monolito de Camada Única:** Toda a apresentação, lógica e dados vivem em um único arquivo.
- **Event-Driven UI:** O fluxo é controlado por cliques do usuário que disparam callbacks.

### Diagrama C4 — Contexto
```
[Jogador] --interação--> [Jogo Bíblico — App Desktop Python/Tkinter]
```

### Módulos Lógicos Identificados

| Módulo | Responsabilidade |
|--------|-----------------|
| **Quiz Engine** | Janela principal, menus, navegação e disposição de botões |
| **Question Bank** | Armazenamento e exibição de perguntas; processamento de respostas |

### Ciclo de Vida de uma Questão

```
[Menu Principal] → [Pergunta Aberta] → [Feedback] → [Menu Principal]
                       ↑_________________________↑
                         (pode voltar para mesma questão)
```

---

## 📐 Regras de Negócio

| # | Regra | Status |
|---|-------|--------|
| **RN01** | Jogador escolhe livremente qualquer questão, sem ordem obrigatória | 🟢 CONFIRMADO |
| **RN02** | Cada questão tem exatamente **4 alternativas**, sendo 1 correta | 🟢 CONFIRMADO |
| **RN03** | O feedback sempre exibe o **versículo bíblico completo** para conferência | 🟢 CONFIRMADO |
| **RN04** | O sistema **deve** contabilizar acertos e erros com placar visível | 🟢 CONFIRMADO |
| **RN05** | Apenas **uma janela de questão** pode estar aberta por vez | 🟢 CONFIRMADO |

---

## ⚙️ Dívidas Técnicas Identificadas

O código original possui as seguintes limitações documentadas:

1. **DRY Violado** — Centenas de funções quase idênticas para cada questão e feedback.
2. **Acoplamento Extremo** — Dados bíblicos estão presos à implementação da interface.
3. **Escalabilidade de Conteúdo** — Adicionar 100 novas perguntas requer ~500 linhas de código manual.
4. **Ausência de Testes** — Nenhum teste unitário ou de integração existe no projeto original.
5. **Sem Tratamento de Erros** — Nenhum bloco `try-except`; erros de runtime fecham a aplicação.

---

## 📊 Relatório de Confiança

| Dimensão | Confiança |
|----------|-----------|
| **Geral** | 🟢 100% |
| **Specs SDD** | 🟢 100% |
| **UI/UX** | 🟢 100% |
| **Regras de Negócio** | 🟢 100% |

### Lacunas Resolvidas
Três lacunas críticas foram identificadas e resolvidas com o usuário:
- **Pontuação:** Adicionada como requisito obrigatório para a reconstrução.
- **Concorrência:** Restringida para uma única janela de questão por vez.
- **Tempo:** Confirmada a inexistência de limites de tempo por questão.

---

## 🚀 Próximos Passos — Reconstrução

Com todas as especificações geradas e validadas, o projeto está pronto para a fase de **reconstrução**. Para iniciar, ative o agente:

```
/reversa-reconstructor
```

O agente lerá as specs em `_reversa_sdd/` e reconstruirá o sistema do zero, com:
- ✅ Arquitetura limpa (separação de dados, lógica e interface)
- ✅ Banco de dados externo para as perguntas
- ✅ Placar de pontuação
- ✅ Controle de janela única
- ✅ Testes automatizados

---

## 📁 Documentação Gerada

Toda a documentação de engenharia reversa está disponível em [`_reversa_sdd/`](./_reversa_sdd/):

- [`architecture.md`](./_reversa_sdd/architecture.md) — Diagramas C4 e dívidas técnicas
- [`domain.md`](./_reversa_sdd/domain.md) — Glossário e regras de negócio
- [`code-analysis.md`](./_reversa_sdd/code-analysis.md) — Análise técnica profunda
- [`state-machines.md`](./_reversa_sdd/state-machines.md) — Máquinas de estado
- [`sdd/quiz-engine.md`](./_reversa_sdd/sdd/quiz-engine.md) — Spec do motor do quiz
- [`sdd/question-bank.md`](./_reversa_sdd/sdd/question-bank.md) — Spec do banco de perguntas
- [`confidence-report.md`](./_reversa_sdd/confidence-report.md) — Relatório de confiança final

---

## 🤝 Como Contribuir

Este projeto usa o **Framework Reversa** para análise de código legado. Para continuar a análise ou iniciar a reconstrução:

1. Clone o repositório
2. Abra no VS Code com a extensão Antigravity
3. Digite `reversa` para ativar o framework

---

## 📄 Licença

Este projeto é de uso educacional e de análise de código legado.

---

<div align="center">
  <sub>Documentado com ❤️ pelo <strong>Framework Reversa</strong> — Engenharia Reversa para a Era da IA</sub>
</div>
