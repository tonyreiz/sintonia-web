# Relatório de alterações — responsividade

## Arquivo alterado

- `CSS/responsivo.css`: refeito como uma camada de sobrescritas, sem alterações em `CSS/style.css` ou nos arquivos PHP.

## Comportamento implementado

| Largura | Ajustes principais |
| --- | --- |
| 1200px ou mais | Mantém a composição horizontal e limita a largura útil de banner, processo, FAQ e rodapé. |
| 768px a 1199px | Compacta cabeçalho e banner; cards de Sobre e Equipe passam a duas colunas; FAQ e rodapé se adaptam sem larguras fixas. |
| Até 767px | Empilha banner, cards, FAQ e rodapé; etapas do processo ficam verticais; menu pode rolar horizontalmente; modal e carrosséis respeitam a largura disponível. |
| Até 399px | Reduz espaçamentos e tipografia para a referência de 380px. |

## Reversão

Uma cópia integral do arquivo anterior foi preservada em `CSS/responsivo.css.bak`.

Para desfazer somente esta implementação, execute no PowerShell, a partir da raiz do projeto:

```powershell
Copy-Item -LiteralPath .\CSS\responsivo.css.bak -Destination .\CSS\responsivo.css -Force
```

Após confirmar que não precisa mais reverter, o backup pode ser removido manualmente.
