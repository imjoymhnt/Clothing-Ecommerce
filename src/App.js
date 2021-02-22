import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";

const HatsPage = () => <h1>Hats page</h1>;

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/hats" component={HatsPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
