import logo from './logo.svg';
import './App.css';
import UseStateExample from './AllExampleComponents.js/useState';
//import Timer from './AllExampleComponents.js/useEffectHook';
import LifecycleExample from './AllExampleComponents.js/useEffectHook';
import Counter from './AllExampleComponents.js/useReducer';
import MemoizedValueExample from './AllExampleComponents.js/usememo';
import App2 from './AllExampleComponents.js/useMemo2';
import ParentComponent from './AllExampleComponents.js/stateLifting';

function App() {
  return (
    <div className="App">
      {/* <UseStateExample/> */}
      {/* <LifecycleExample/>
      <Counter/>
      <MemoizedValueExample/> */}
      {/* <App2/> */}
      <ParentComponent/>
      <Counter/>
    </div>
  );
}

export default App;
