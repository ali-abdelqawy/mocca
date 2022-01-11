import "./styles/App.css";
import { Footer, Header, IngredientsList } from "./components";

function App() {
  return (
    <div className="App">
      <div>
        <Header text="What do you want to order?" />
        <IngredientsList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
