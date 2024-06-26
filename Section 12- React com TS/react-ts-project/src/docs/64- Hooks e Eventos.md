# Hooks e eventos com tipo

Em React com TypeScript, a utilização de hooks e tipos é uma prática comum para tornar o código mais seguro e legível. Os hooks são funções que permitem adicionar funcionalidades de estado e ciclo de vida aos componentes funcionais do React. Eles permitem que você use o estado e outros recursos do React sem escrever uma classe.

Vamos analisar os dois códigos fornecidos:

### Counter Component:

```typescript
import { useEffect, useState } from "react";

const Counter = () => {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        console.log(`The count is now: ${count}`);
    })

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increase</button>
        </div>
    )
}

export default Counter;
```

Neste componente:

- `useState<number>(0)`: O hook `useState` é usado para adicionar estado a um componente funcional. Aqui, `count` é o estado que armazena o valor atual do contador, e `setCount` é a função para atualizar esse estado. O tipo `number` é especificado entre os ângulos `< >` para indicar que o estado `count` deve ser do tipo número.

- `useEffect(() => {...})`: O hook `useEffect` é usado para realizar efeitos colaterais em componentes funcionais. No exemplo, um efeito é definido para ser executado sempre que o componente for renderizado ou o estado `count` for alterado. Ele registra no console o valor atual de `count`.

### TextInput Component:

```typescript
import { ChangeEvent, FormEvent, useState } from "react";

const TextInput = () => {
    const [text, setInput] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setInput("");
        console.log('Form was sent!')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={text} onChange={handleChange} />
            <p>{text}</p>
            <button type="submit">Send</button>
        </form>
    )
}

export default TextInput;
```

Neste componente:

- `useState<string>("")`: Aqui, um estado `text` é definido para armazenar o valor do campo de entrada. O tipo `string` é especificado para indicar que o estado `text` deve ser do tipo string.

- `handleChange(e: ChangeEvent<HTMLInputElement>)`: Esta função manipuladora é chamada sempre que o valor do campo de entrada é alterado. Ela atualiza o estado `text` com o valor atual do campo de entrada.

- `handleSubmit(e: FormEvent)`: Esta função é chamada quando o formulário é enviado. Ela previne o comportamento padrão de envio do formulário (recarregamento da página), limpa o campo de entrada (`text`) e exibe uma mensagem no console.

Ambos os componentes demonstram a utilização de estados (`useState`) e a realização de efeitos colaterais (`useEffect`) em componentes funcionais React, juntamente com TypeScript para garantir a tipagem correta dos dados.