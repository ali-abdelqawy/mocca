import "./styles/App.css";
import {
  AddIngredient,
  CaffieneHistory,
  Footer,
  Header,
  IngredientsList,
} from "./components";
import { useState } from "react";
import {
  TotalCaffeineContext,
  IngredientsListContext,
  NewOrderContext,
} from "./contexts";
import { ingredients } from "./constants";
import { OrderButton } from "./components/OrderButton";

function App() {
  const [totalCaffeine, setTotalCaffeine] = useState(0);
  const [ingredientsList, setIngredientsList] = useState(ingredients);
  const [isNewOrder, setIsNewOrder] = useState(false);
  return (
    <div className="App">
      <div className="main">
        <Header text="What do you want to order?" />
        <NewOrderContext.Provider value={{ isNewOrder, setIsNewOrder }}>
          <IngredientsListContext.Provider
            value={{ ingredientsList, setIngredientsList }}
          >
            <TotalCaffeineContext.Provider
              value={{ totalCaffeine, setTotalCaffeine }}
            >
              <IngredientsList />
              <AddIngredient />
              <div className="totalCaffeineContainer">
                <h3>Total Caffeine: {totalCaffeine} MG</h3>
              </div>
              <OrderButton />
              <CaffieneHistory />
            </TotalCaffeineContext.Provider>
          </IngredientsListContext.Provider>
        </NewOrderContext.Provider>
      </div>
      <Footer />
    </div>
  );
}

export default App;
