
   import Navbarr from './componets/styles/sass';
   import Modelpage from './componets/styles/webpage/model';
   import CardPage from './componets/styles/webpage/cards';
   import Forms from './componets/styles/webpage/from';

function App() {
  return (
    <div className="App">
    {/* <TextStyle/> */}
    <Navbarr/>
 
   {/* <CaroselPage/> */}
   <Modelpage/>
   <CardPage/>
   <Forms/>
    </div>
  );
}

export default App;
