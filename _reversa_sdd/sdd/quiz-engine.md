# Quiz Engine (Motor de Interface)

## Visão Geral
Gerencia a interface gráfica principal da aplicação, orquestrando a navegação entre as categorias de questões e a inicialização do ambiente de execução Tkinter.

## Responsabilidades
- Inicializar a janela principal do sistema. 🟢
- Renderizar os botões de acesso às referências bíblicas organizados em containers. 🟢
- Gerenciar o encerramento da aplicação. 🟢
- Gerenciar o estado de concorrência de janelas (uma por vez). 🟢

## Interface
- **Entrada:** Interação do usuário via clique em botões.
- **Saída:** Abertura de janelas `Toplevel` para questões individuais.

## Regras de Negócio
- O sistema deve usar uma fonte padrão Verdana para todos os botões. 🟢
- Os botões de questões devem ter fundo `FireBrick` e texto branco. 🟢
- A janela principal deve ser centralizada e manter o `mainloop` ativo até o fechamento. 🟢

## Fluxo Principal
1. Execução do script `JogoBiblico.pyw`.
2. Instanciação da classe `Packing`.
3. Criação de 10 containers (`Frame`) para organização vertical.
4. População de botões de referência bíblica em cada container.
5. Início do loop de eventos Tkinter.

## Fluxos Alternativos
- **Redimensionamento:** O sistema usa `pack(side=TOP/RIGHT/LEFT)`, permitindo ajuste básico de layout conforme a janela expande. 🟡

## Dependências
- `tkinter` — Framework base de GUI. 🟢
- `Question Bank` — Contém as funções de pergunta disparadas pelos botões. 🟢

## Requisitos Não Funcionais

| Tipo | Requisito inferido | Evidência no código | Confiança |
|------|--------------------|---------------------|-----------|
| Performance | Renderização instantânea de widgets locais | `app/JogoBiblico.pyw:2970` | 🟢 |
| Portabilidade | Compatibilidade com Windows (.pyw extension) | Extensão do arquivo principal | 🟢 |

## Critérios de Aceitação

```gherkin
Dado que o usuário iniciou a aplicação
Quando a janela principal carregar
Então todos os botões de referências bíblicas devem estar visíveis e clicáveis

Dado que uma questão já está aberta
Quando o usuário tenta clicar em outra referência no menu principal
Então o sistema deve impedir a abertura ou fechar a janela anterior automaticamente.
```

## Prioridade

| Requisito | MoSCoW | Justificativa |
|-----------|--------|---------------|
| Inicialização da Janela | Must | Essencial para qualquer interação. |
| Renderização de Botões | Must | Principal forma de navegação do usuário. |
| Organização em Frames | Should | Melhora a estética mas não impede o jogo. |

## Rastreabilidade de Código

| Arquivo | Função / Classe | Cobertura |
|---------|-----------------|-----------|
| `app/JogoBiblico.pyw` | `Packing` | 🟢 |
| `app/JogoBiblico.pyw` | `janela = Tk()` | 🟢 |
