import './App.css';
// Components
import Welcome from './components/Welcome';
import Greeting from './components/Greeting';
import ParentComponent from './components/ParentComponent';
import User from './components/User';
import Counter from './components/Counter';
import Form from './components/Form';
import Button from './components/Button';
import ParentEventComponent from './components/ParentEventComponent';
import FormEvents from './components/FormEvents';
import RenderConditional from './components/RenderConditional';
import LoginButton from './components/LoginButton';
import Warning from './components/Warning';
import NumberList from './components/NumberList';
import ButtonWithStyles from './components/ButtonWithStyles';


function App() {
  
  return (
    <>
      {/* 9.1 Criacao de componente */}
      <Welcome/>
      {/* 9.2 Expressoes em JSX */}
      <Greeting/>
      {/* 10 Hierarquia de components */}
      <ParentComponent/>
      {/* 10 Props */}
      <User name="Alice" age={30} jobRole="Developer" />
      <User name="Bob" age={25} jobRole="Designer" />
      {/* 11 useState */}
      <Counter/>
      {/* 11 Multiple state */}
      <Form/>
      {/* 12 Events */}
      <Button/>
      {/* 12 Passing events functions as props  */}
      <ParentEventComponent/>
      {/* 13 Form */}
      <FormEvents/>
      {/* 13 Conditional Rendering */}
      <RenderConditional user="John"/>
      {/* 13 Ternary */}
      <LoginButton loggedIn={true}/>
      <LoginButton loggedIn={false}/>
      {/* 14 Rendering Null */}
      <Warning warning='The component was a warning'/>
      {/* 14 List */}
      <NumberList numbers={[5,10,15,20,25]}/>
      {/* 15 Styling Components */}
      <ButtonWithStyles>Button with styles</ButtonWithStyles>
    </>
  )
}

export default App
