# React Hooks

### Uma forma de trabalhar com as funcionalidades
### do React sem a necessidade de criar classes.

### Problemas que ele resolve:
  - Abordagem mais funcional
  - Reutilização de código.

## Como Funcionam?
  - Precisam estar no top level do componente.
  - Podem ser chamados dentro de custom hooks.

## Estado (useState)
### São valores que re-renderizarão o componente.
  - Guardar/atualizar o estado de um componente.

## Referência (useRef)
  - Guardar referência de um elemento.
  - Guardar valores que não atualizarão o componente.

## Efeito (useEffect)
  Ciclo de vida:

  1. Componente montado. (renderizado)
  2. Componente atualizado. (re-renderizado)
  3. Componente desmontado.

    Se existe valor dentro do useEffect, ele deve ser 
    passado no array para obter o valor atualizado... 

    Não se pode executar ações quando o componente
    for desmontado se o array de deps possuir valor.

    Se existir uma função assíncrona dentro do 
    useEffect ela deve ser chamada logo em seguida.

## Memoização (useMemo, useCallback)
  - Problemas que os hooks resolvem.
```bash
    1. Renderização desnecessária dos filhos.
    2. Operações pesadas sendo re-executadas.
    3. Salvar resultados de operações custosas.
```

  - Problemas do uso desnecessário.
```bash
    1. Também há um custo para executar esses hooks.
```

  - Regras para o uso e aplicação correta dos hooks.
```bash
    1. Se o valor não for atualizar algum state ou as props,
    é recomendado que ele seja definido fora do componente...

    2. Se o valor ou função não tem dependência de um cálculo 
    ou de um processamento pesado e nem será passada como prop, 
    então ela deve ser definida como valor ou função normais.
```
