import "../styles/App.css";
import {
  AddIngredient,
  Footer,
  Header,
  IngredientsList,
  OrderButton,
} from "../components";
import { useState } from "react";
import { TotalCaffeineContext, IngredientsListContext } from "../contexts";
import { ingredients } from "../constants";
import { Nav } from "../nav";

export const Main = () => {
  const [totalCaffeine, setTotalCaffeine] = useState(0);
  const [ingredientsList, setIngredientsList] = useState(ingredients);
  return (
    <div className="App">
      <Nav />
      <div className="main">
        <Header text="What do you want to order?" />
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
          </TotalCaffeineContext.Provider>
        </IngredientsListContext.Provider>
      </div>
      <Footer />
    </div>
  );
};
