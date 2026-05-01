# Dicionário de Dados — projeto-python-biblia

O projeto não utiliza um banco de dados externo ou arquivos de persistência. Todos os dados são "hardcoded". Abaixo está o mapeamento das estruturas de dados implícitas.

## Entidade: Pergunta (Implicit)
Representada por uma função `[referencia]()`.

| Campo | Tipo | Descrição | Origem |
|-------|------|-----------|--------|
| `referencia` | String | Referência bíblica (ex: "Daniel 1:1-6") | Nome da função / Label do botão |
| `enunciado` | String | O texto da pergunta exibida | Atributo `text` do Label |
| `alternativas` | Lista | Lista de 4 opções de resposta | Atributos `text` dos Botões |
| `handler_correto` | Função | Função chamada na resposta certa | Atributo `command` do botão correto |
| `handler_errado` | Função | Função chamada na resposta errada | Atributo `command` dos botões errados |

## Entidade: Resposta/Feedback (Implicit)
Representada por uma função `bt[id]_onclick()`.

| Campo | Tipo | Descrição | Origem |
|-------|------|-----------|--------|
| `status` | Boolean | Se a resposta foi certa ou errada | Texto inicial do Label ("CERTO" / "ERRADA") |
| `referencia_confirmacao` | String | Versículo para conferência | Texto do Label |
| `cor_fundo` | String | Cor da janela de feedback | Atributo `bg` ("green" ou "red") |

## Constantes de Design (Tokens)
| Nome | Valor | Uso |
|------|-------|-----|
| `font_pergunta` | Verdana | Perguntas e opções |
| `bg_pergunta` | FireBrick | Fundo da pergunta |
| `bg_opcao` | Khaki | Fundo dos botões de opção |
| `bg_sucesso` | green | Feedback positivo |
| `bg_erro` | red | Feedback negativo |
