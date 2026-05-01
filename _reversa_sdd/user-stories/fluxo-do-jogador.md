# User Stories — Fluxo do Jogador

Este documento descreve as histórias de usuário que o sistema atende, permitindo validar se a reimplementação atende às expectativas de experiência do usuário.

## US01 — Escolher uma Referência Bíblica
**Como** um jogador interessado em um tema específico,
**Eu quero** ver uma lista de referências bíblicas organizadas na tela inicial,
**Para que** eu possa escolher qual trecho da Bíblia quero testar meus conhecimentos.

### Critérios de Aceitação
- **Cenário:** Navegação Inicial
  - **Dado** que a aplicação está aberta
  - **Quando** eu visualizo a tela principal
  - **Então** devo ver botões com nomes de livros e capítulos (ex: "Daniel 1:1-6", "Tiago 5:14").

## US02 — Responder uma Pergunta
**Como** um jogador,
**Eu quero** selecionar uma alternativa entre as quatro opções apresentadas,
**Para que** eu receba a validação imediata se meu conhecimento sobre aquele versículo está correto.

### Critérios de Aceitação
- **Cenário:** Resposta Correta
  - **Dado** que estou com a janela da pergunta "Daniel 1:1-6" aberta
  - **Quando** eu clico na alternativa correta
  - **Então** uma nova janela verde com o texto "CERTO" deve ser exibida.
- **Cenário:** Resposta Incorreta
  - **Dado** que estou com a janela da pergunta aberta
  - **Quando** eu clico em uma alternativa errada
  - **Então** uma nova janela vermelha com o texto "ERRADA" deve ser exibida.

## US03 — Conferir a Resposta na Bíblia
**Como** um jogador cuidadoso,
**Eu quero** ver o texto completo do versículo na tela de feedback,
**Para que** eu possa aprender com meus erros ou confirmar meus acertos sem precisar abrir uma Bíblia física no momento.

### Critérios de Aceitação
- **Cenário:** Exibição de Versículo
  - **Dado** que a janela de feedback (Certo ou Errado) está aberta
  - **Quando** eu leio o conteúdo da janela
  - **Então** o texto bíblico exato deve estar presente abaixo do resultado.
