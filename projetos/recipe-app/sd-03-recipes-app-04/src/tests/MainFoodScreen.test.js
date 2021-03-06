import React from 'react';
import { waitForDomChange, cleanup, fireEvent, waitForElement } from '@testing-library/react';
import MainFoodScreen from '../components/MainFoodScreen';
import mockFetch from './Mocks/Fetch';
import renderWithRouter from './Mocks/RenderService';
import meals from '../../cypress/mocks/meals';
import breakfastMeals from '../../cypress/mocks/breakfastMeals';
import mealCategories from '../../cypress/mocks/mealCategories';
import goatMeals from '../../cypress/mocks/goatMeals';

global.alert = jest.fn();

const checkRecipes = (recipes, queryByTestId) => {
  const recipeType = 'Meal';

  recipes.slice(0, 12).forEach((recipe, index) => {
    const title = recipe[`str${recipeType}`];
    expect(queryByTestId(`${index}-recipe-card`)).toBeInTheDocument();
    expect(queryByTestId(`${index}-card-img`)).toHaveAttribute('src');
    expect(queryByTestId(`${index}-card-name`)).toHaveTextContent(title);
  });

  expect(queryByTestId('12-recipe-card')).not.toBeInTheDocument();
  expect(queryByTestId('12-card-img')).not.toBeInTheDocument();
  expect(queryByTestId('12-card-name')).not.toBeInTheDocument();
};

describe('testing MainFoodScreen', () => {
  afterEach(() => {
    cleanup();
  });

  jest.spyOn(global, 'fetch').mockImplementation(mockFetch);

  test('should fetch API', async () => {
    const { getByText } = renderWithRouter(<MainFoodScreen />);

    expect(global.fetch).toHaveBeenCalledTimes(3);

    await waitForDomChange();
    expect(getByText('Comidas')).toBeInTheDocument();
  });

  test('should render recipes', async () => {
    const { queryByTestId } = renderWithRouter(<MainFoodScreen />);

    await waitForDomChange();

    meals.meals.slice(0, 12).forEach((food, idx) => {
      const [
        card,
        cardName,
        cardImage,
      ] = [
          queryByTestId(`${idx}-recipe-card`),
          queryByTestId(`${idx}-card-name`),
          queryByTestId(`${idx}-card-img`),
        ];
      expect(card).toBeInTheDocument();
      expect(cardName).toHaveTextContent(food.strMeal);
      expect(cardImage).toHaveAttribute('src', food.strMealThumb);
    });
  });
});

describe('Testing filters buttons', () => {
  afterEach(() => {
    cleanup();
  });

  jest.spyOn(global, 'fetch').mockImplementation(mockFetch);

  test('should 5 first recipes buttons', async () => {
    const { queryByTestId } = renderWithRouter(<MainFoodScreen />);
    await waitForDomChange();

    mealCategories.meals.slice(0, 5).forEach(({ strCategory: category }) => {
      const filterCategory = queryByTestId(`${category}-category-filter`);
      expect(filterCategory).toBeInTheDocument();
    });

    mealCategories.meals.slice(5).forEach(({ strCategory: category }) => {
      const filterCategory = queryByTestId(`${category}-category-filter`);
      expect(filterCategory).not.toBeInTheDocument();
    });

    const searchButton = queryByTestId('search-top-btn');
    fireEvent.click(searchButton);
    mealCategories.meals.slice(0, 5).forEach(({ strCategory: category }) => {
      const filterCategory = queryByTestId(`${category}-category-filter`);
      expect(filterCategory).not.toBeInTheDocument();
    });
    fireEvent.click(searchButton);
    mealCategories.meals.slice(0, 5).forEach(({ strCategory: category }) => {
      const filterCategory = queryByTestId(`${category}-category-filter`);
      expect(filterCategory).toBeInTheDocument();
    });
  });
});

describe('Testing first recipes rendering', () => {
  afterEach(() => {
    cleanup();
  });

  jest.spyOn(global, 'fetch').mockImplementation(mockFetch);

  test('should render only breakfast recipes', async () => {
    const { queryByTestId } = renderWithRouter(<MainFoodScreen />);
    await waitForDomChange();

    const breakfast = queryByTestId('Breakfast-category-filter');
    fireEvent.click(breakfast);
    await waitForDomChange();
    checkRecipes(breakfastMeals.meals, queryByTestId);
  });

  test('should render only goat recipes', async () => {
    const { queryByTestId } = renderWithRouter(<MainFoodScreen />);
    await waitForDomChange();

    const goat = queryByTestId('Goat-category-filter');
    fireEvent.click(goat);
    await waitForDomChange();
    checkRecipes(goatMeals.meals, queryByTestId);
  });

  test('double click on filter buttons return all recipes', async () => {
    const { queryByTestId } = renderWithRouter(<MainFoodScreen />);
    await waitForDomChange();

    const goat = queryByTestId('Goat-category-filter');
    fireEvent.click(goat);
    await waitForDomChange();
    fireEvent.click(goat);
    await waitForDomChange();
    checkRecipes(meals.meals, queryByTestId);
  });
});

describe('Testing search button', () => {
  afterEach(() => {
    cleanup();
  });

  jest.spyOn(global, 'fetch').mockImplementation(mockFetch);

  test('should render only recipes with chicken', async () => {
    const { queryByTestId, getByText } = renderWithRouter(<MainFoodScreen />);
    await waitForDomChange();

    const searchButton = queryByTestId('search-top-btn');
    fireEvent.click(searchButton);
    fireEvent.click(queryByTestId('ingredient-search-radio'));
    fireEvent.input(queryByTestId('search-input'), {
      target: { value: 'Chicken' },
    });
    fireEvent.click(queryByTestId('exec-search-btn'));
    await waitForDomChange();
    expect(getByText('Thai Green Curry')).toBeInTheDocument();
  });

  // dando falso positivo
  test.skip('should not render any recipe', async () => {
    const { queryByTestId } = renderWithRouter(<MainFoodScreen />);
    await waitForDomChange();

    const searchButton = queryByTestId('search-top-btn');
    fireEvent.click(searchButton);
    fireEvent.click(queryByTestId('name-search-radio'));
    fireEvent.input(queryByTestId('search-input'), {
      target: { value: 'xablau' },
    });
    fireEvent.click(queryByTestId('exec-search-btn'));
    
    expect(alert).not.toBeNull();
  });

  test('should render only recipes with soup', async () => {
    const { queryByTestId, getByText } = renderWithRouter(<MainFoodScreen />);
    await waitForDomChange();

    const searchButton = queryByTestId('search-top-btn');
    fireEvent.click(searchButton);
    fireEvent.click(queryByTestId('name-search-radio'));
    fireEvent.input(queryByTestId('search-input'), {
      target: { value: 'soup' },
    });
    fireEvent.click(queryByTestId('exec-search-btn'));
    await waitForDomChange();
    expect(getByText('Tunisian Lamb Soup')).toBeInTheDocument();
  });

  // tentar enteder como validar a api calling
  test.skip('should redirect to details page', async () => {
    const { queryByTestId } = renderWithRouter(<MainFoodScreen />);
    await waitForDomChange();

    const searchButton = queryByTestId('search-top-btn');
    fireEvent.click(searchButton);
    fireEvent.click(queryByTestId('name-search-radio'));
    fireEvent.input(queryByTestId('search-input'), {
      target: { value: 'Arrabiata' },
    });
    fireEvent.click(queryByTestId('exec-search-btn'));
    await waitForElement(() => expect(global.fetch).toHaveBeenCalled());
    expect(history.location.pathname).toEqual('/comidas/52771');
  });
});
