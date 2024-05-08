import './App.css';
import Counter from './components/Counter';
import Greeting from './components/Greeting';
import LoginForm from './components/LoginForm';
import ShoppingList from './components/ShoppingList';
import TextInput from './components/TextInput';

function App() {

  return (
    <>
      <h2>React com TS</h2>
      {/* 1. Functional Components */}
      <Greeting name='John' />
      {/* 2. Hooks com tipos */}
      <Counter />
      {/* 3. Events types  */}
      <TextInput />
      {/* 4. Exer */}
      <LoginForm/>
      {/* 5. Exer 2 */}
      <ShoppingList/>
    </>
  )
}

export default App;
