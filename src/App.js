import logo from './logo.svg';
import './App.css';
import UseStateExample from './AllExampleComponents.js/useState';
import Timer from './AllExampleComponents.js/useEffectHook';
import LifecycleExample from './AllExampleComponents.js/useEffectHook';
import Counter from './AllExampleComponents.js/useReducer';
import MemoizedValueExample from './AllExampleComponents.js/usememo';
import App2 from './AllExampleComponents.js/useMemo2';
import ParentComponent from './AllExampleComponents.js/stateLifting';
import ExampleReducer from './AllExampleComponents.js/ValidationQuestions/useReducerExample2';
import Example1 from './AllExampleComponents.js/ValidationQuestions/usecallback1';
import TodosList from './AllExampleComponents.js/ValidationQuestions/todoslist';
import Factorial from './AllExampleComponents.js/factorialExample';

import ParentCom from './AllExampleComponents.js/purecomponents/parent';
import Component from './task-03-may/c-will-unmount';
import KeyboardEventHandler from './task-03-may/unmountEx-2';
import Togglepage from './AllExampleComponents.js/useStateExample-sir.js/toggle';
import Stage1 from './AllExampleComponents.js/propdrilling/prop1';

function App() {
  return (
    <div className="App">
      {/* <UseStateExample/>
      <LifecycleExample/>
      <Counter/>
      <MemoizedValueExample/>
      <App2/>
      <Timer/>
      <ParentComponent/>
      <Counter/> */}
      {/* <ExampleReducer/> */}
      {/* <Example1/> */}
      {/* <TodosList/>
      <Factorial/> */}
      {/* <ParentCom/> */}
      <Togglepage/>
      {/* <Component/> */}
      {/* <KeyboardEventHandler/> */}
      {/* <Stage1/> */}
    </div>
  );
}

export default App;
