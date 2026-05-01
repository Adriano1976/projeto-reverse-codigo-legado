# Design Tokens — projeto-python-biblia

Tabela consolidada de tokens identificados no monólito.

| Categoria | Token | Valor Legado | Confiança |
|-----------|-------|--------------|-----------|
| Cor | `color-banner` | `SteelBlue` | 🟢 |
| Cor | `color-quiz-btn` | `FireBrick` | 🟢 |
| Cor | `color-option-btn` | `Khaki` | 🟢 |
| Cor | `color-success` | `green` | 🟢 |
| Cor | `color-error` | `red` | 🟢 |
| Fonte | `font-family` | `Verdana` | 🟢 |
| Raio | `border-radius` | `0` (None) | 🟢 |
| Tamanho | `btn-width-ref` | `18` (text chars) | 🟢 |
| Tamanho | `btn-height-ref`| `2` (text lines) | 🟢 |

## Notas sobre Tokens
Os valores de tamanho no Tkinter (width/height) para botões de texto não são em pixels, mas em número de caracteres e linhas da fonte atual. Isso deve ser levado em conta na conversão para CSS. 🟢
