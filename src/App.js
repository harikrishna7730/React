import { Provider } from "react-redux";
import NavigationStack from "./navigationStack/navigationStack";
import { reduxStore } from "./redux/store/store";



function App() {
  return (
    <div className="App">
      <Provider store={reduxStore}>
    <NavigationStack/>
    </Provider>
    </div>
  );
}

export default App;
