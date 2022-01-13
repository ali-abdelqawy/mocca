import "./styles/App.css";
import { Button, Footer, Header, IngredientsList } from "./components";
import { useState } from "react";
import { TotalCaffeineContext } from "./contexts/totalCaffeineContext";

function App() {
  const [totalCaffeine, setTotalCaffeine] = useState(0);
  return (
    <div className="App">
      <TotalCaffeineContext.Provider
        value={{ totalCaffeine, setTotalCaffeine }}
      >
        <div>
          <Header text="What do you want to order?" />
          <IngredientsList />
          <div className="totalCaffeineContainer">
            <h3>Total Caffeine: {totalCaffeine} MG</h3>
          </div>
        </div>
      </TotalCaffeineContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
