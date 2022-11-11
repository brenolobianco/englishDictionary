import "./App.css";
import Provider from "./contexts/userContexts";
import Dashboard from "./components/dashboard";


function App() {
 
  

  return (
    <Provider>
      <Dashboard/>
    </Provider>
  );
}
export default App;
