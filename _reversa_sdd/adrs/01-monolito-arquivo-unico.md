# ADR 01: Arquitetura Monolítica de Arquivo Único

## Status
Aceito (Legado)

## Contexto
O projeto foi desenvolvido inteiramente em um único arquivo `.pyw` com mais de 3000 linhas. Isso inclui lógica de GUI, definições de questões e handlers de eventos.

## Decisão
Manter todo o conhecimento e execução centralizados em um único script Python para facilitar a distribuição (Single-file distribution).

## Consequências
- **Positivas:** Facilidade de execução em ambientes sem gerenciadores de pacotes complexos.
- **Negativas:** Dificuldade extrema de manutenção, alta duplicidade de código (DRY violado centenas de vezes) e escalabilidade nula para novos recursos.
