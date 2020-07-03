import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { getIngredientsList } from '../services/foodApi';
import { ContextAplication } from '../context/ContextAplication';
import InferiorMenu from './InferiorMenu';
import Header from './Header';

function ExploreFoodIngredientScreen() {
  const [ingredients, setingredients] = useState([]);
  const { setingredientFilter } = useContext(ContextAplication);

  useEffect(() => {
    getIngredientsList()
      .then((answer) => setingredients(answer.meals));
  }, []);

  return (
    <div>
      <Header screen={'Explorar Ingredientes'} />
      <div className="food-screen">
        {ingredients.reduce((arr, e, i) => {
          if (i < 12) {
            return [...arr,
              <Link to="/comidas">
                <button
                  className="product-pic"
                  data-testid={`${i}-ingredient-card`}
                  onClick={() => setingredientFilter(e.strIngredient)}
                >
                  <img
                    src={`https://www.themealdb.com/images/ingredients/${e.strIngredient}-Small.png`}
                    alt="thumbnail" width="150px"
                    data-testid={`${i}-card-img`}
                  />
                  <h5 data-testid={`${i}-card-name`}>{e.strIngredient}</h5>
                </button>
              </Link>,
            ];
          }
          return arr;
        }, [])}
      </div>
      <InferiorMenu />
    </div>

  );
}

export default ExploreFoodIngredientScreen;