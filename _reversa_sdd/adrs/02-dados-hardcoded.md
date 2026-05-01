# ADR 02: Dados e Lógica "Hardcoded"

## Status
Aceito (Legado)

## Contexto
Não existe separação entre o "Banco de Questões" e a "Lógica de Exibição". Cada pergunta é uma função Python única que cria seus próprios widgets.

## Decisão
Codificar o conteúdo bíblico diretamente no código-fonte, eliminando a necessidade de um banco de dados externo ou arquivos JSON/XML.

## Consequências
- **Positivas:** Zero dependência de I/O de arquivo ou drivers de banco de dados.
- **Negativas:** Para adicionar ou corrigir uma pergunta, é necessário modificar o código-fonte e redeployar a aplicação. Impossibilita a internacionalização ou troca dinâmica de temas.
