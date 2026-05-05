# Reconstruction Plan — projeto-python-biblia

**Stack:** Vite + React + TypeScript + Vanilla CSS (Rich Aesthetics)
**Gerado em:** 2026-05-05
**Status:** 6 tarefas | 0 concluídas | 6 pendentes

---

## Alertas de pré-voo

> Revise estes pontos antes de iniciar. Gaps marcados com ⚠️ bloqueiam a tarefa associada.

- ⚠️ **Persistência de Pontuação** — O sistema legado não possuía placar. Devemos implementar a lógica de `score` do zero conforme definido na revisão. — bloqueia Tarefa 02 (Entidades e Lógica de Jogo)
- ⚠️ **Concorrência de Janelas** — Restrição para apenas uma questão ativa por vez (comportamento novo solicitado). — bloqueia Tarefa 04 (Componente QuizEngine)

---

## Tarefas

### Tarefa 01 — Modelo de Dados e Banco de Questões
**Status:** done
**Lê:** `_reversa_sdd/question-bank.md`, `_reversa_sdd/data-dictionary.md`
**Constrói:** `src/data/questions.json` ou `src/models/Question.ts`
**Pronto quando:** Todas as questões do legado (Daniel, João, Lucas, etc.) estão mapeadas em uma estrutura de dados moderna e tipada.

---

### Tarefa 02 — Entidades e Lógica de Jogo (Scoring)
**Status:** done
**Lê:** `_reversa_sdd/domain.md`, `_reversa_sdd/sdd/question-bank.md`
**Constrói:** `src/hooks/useQuizLogic.ts` ou `src/store/quizStore.ts`
**Pronto quando:** As funções de validação de resposta e o novo sistema de pontuação (+1 ponto por acerto) estão implementados e testados.

---

### Tarefa 03 — Design System e Tokens (Aesthetics)
**Status:** done
**Lê:** `_reversa_sdd/design-system/color-palette.md`, `_reversa_sdd/design-system/typography.md`, `_reversa_sdd/design-system/tokens.md`
**Constrói:** `src/index.css` (CSS Variables e Global Styles)
**Pronto quando:** Os tokens de cores (FireBrick, SteelBlue, Khaki) e tipografia (Verdana) estão disponíveis como variáveis CSS e aplicados ao layout base.

---

### Tarefa 04 — Componente QuizEngine (Main Screen)
**Status:** done
**Lê:** `_reversa_sdd/sdd/quiz-engine.md`, `_reversa_sdd/architecture.md`
**Constrói:** `src/components/MainDashboard.tsx`, `src/App.tsx`
**Pronto quando:** O dashboard principal exibe as referências bíblicas organizadas e o placar global. Deve respeitar a restrição de uma janela/modal por vez.

---

### Tarefa 05 — Componente QuestionCard e Feedback
**Status:** done
**Lê:** `_reversa_sdd/sdd/question-bank.md`, `_reversa_sdd/ui/`
**Constrói:** `src/components/QuestionModal.tsx`, `src/components/FeedbackBanner.tsx`
**Pronto quando:** O modal exibe a pergunta, alternativas e, após a resposta, mostra o feedback colorido (verde/vermelho) com o versículo para conferência.

---

### Tarefa 06 — Fluxo Completo do Jogador (Integration)
**Status:** done
**Lê:** `_reversa_sdd/user-stories/fluxo-do-jogador.md`, `_reversa_sdd/confidence-report.md`
**Constrói:** Integração final e refinamento de UX.
**Pronto quando:** O jogador consegue iniciar o app, responder múltiplas questões, ver sua pontuação subir e navegar sem erros entre as referências.
