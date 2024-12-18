# Loja online de vendas
Projeto desenvolvido através de aulas práticas na Alura. Tinha como objetivo praticar inúmeras técnicas relacionadas ao React.

O design e protótipo deste projeto podem ser encontrados [aqui](https://www.figma.com/file/R5ATrWK1nC44Eyeo6XZXlr/Meteora---Context-API?node-id=2386%3A2430&mode=dev).

## Para rodar o projeto
Após ter clonado o projeto, `npm install` e em seguida `npm run dev`.

## Linguagem, tecnologias e técnicas utilizadas
- React Vite
- Javascript
- CSS Módulos
- Hooks
  - useState
  - useEffect  
  - useContext (Context API)
  - useReducer
- Customizações
  - hook customizado
  - reducer customizado


# Aprendizado, anotações e destaques
Trabalhamos bastante a correção de bugs, atrapalhando propositalmente o código, removendo trechos, e consertando através de refatorações que eram possíveis ser aplicadas.

## Exemplos de onde aplicar a Context API:

### Autenticação de Usuário:
* Manter o estado de autenticação do usuário globalmente, permitindo que componentes em qualquer parte da aplicação acessem informações sobre o usuário logado.

### Temas e Estilos:
* Compartilhar informações sobre o tema atual da aplicação, como cores, fontes e estilos, para garantir uma consistência visual em toda a aplicação.

### Configurações do Usuário:
* Armazenar preferências e configurações do usuário para que elas possam ser acessadas e modificadas em diferentes partes da interface.

### Internacionalização (i18n):
* Manter as informações de idioma selecionado globalmente, permitindo que todos os componentes se adaptem ao idioma escolhido pelo usuário.



## Use a Context API quando:
- Houver a necessidade de compartilhar informações ou estado entre componentes que estão distantes na árvore de componentes.
- Evitar a "prop drilling" (passar propriedades através de vários níveis de componentes) se tornar impraticável ou confuso.



## Dicas para Melhor Uso:
- Use a Context API para compartilhar dados que são verdadeiramente globais na aplicação.
- Avalie a necessidade de re-renderização de componentes dependentes do contexto ao realizar atualizações.


## Quando usar contextos aninhados
```bash
function App() {
  return (
    <BibliotecaProvider>
      <PrateleiraProvider>
        <Book/>
      </PrateleiraProvider>
    </BibliotecaProvider>
  );
}
```
- Quando há diferentes níveis de hierarquia: Use contextos aninhados quando a hierarquia dos componentes reflete a necessidade de compartilhar dados em diferentes níveis de escopo.
- Quando existem dados globais e locais: Se você tem dados que são relevantes para toda a aplicação (global) e dados mais específicos para certas partes (local), contextos aninhados oferecem uma maneira organizada de gerenciar essas informações.

## Hooks customizados, quando usar
useMeuHookCustomizado (igual tem useState, useEffect, useContext, ...)
- Quando a lógica é reutilizável: Use Hooks Customizados quando tiver lógica específica que pode ser compartilhada entre vários componentes. Isso promove a reutilização de código.
- Quando você precisa de mais controle: Se a lógica envolve estados, efeitos ou outras funcionalidades complexas, os Hooks Customizados oferecem maior controle e modularidade.
- Quando você quer manter seus componentes simples: Use Hooks Customizados para manter seus componentes mais limpos e focados, delegando lógica específica para funções especializadas.

### Para saber mais
Cada um com sua responsabilidade: [SOLID](https://medium.com/desenvolvendo-com-paixao/o-que-%C3%A9-solid-o-guia-completo-para-voc%C3%AA-entender-os-5-princ%C3%ADpios-da-poo-2b937b3fc530)

Em resumo, use Hooks Customizados no React quando precisar encapsular e reutilizar lógica específica em diferentes partes da sua aplicação. Eles são como ferramentas especializadas que facilitam a gestão de funcionalidades específicas, tornando seu código mais limpo, modular e fácil de manter. https://react.dev/learn/reusing-logic-with-custom-hooks

