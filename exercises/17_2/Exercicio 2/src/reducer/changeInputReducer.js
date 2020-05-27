
const INITIAL_STATE = {one: {value: 0}, two: {value: 0}, three: {value: 0}, sum: {value: 0}};
const CHANGE = 'CHANGE';

const changeInputReducer = (state = INITIAL_STATE, action) => {
  
  switch (action.type) {
    case CHANGE: {
      const sum = Number(state.one.value) +  Number(state.two.value) + Number(state.three.value);
      return (state = {...state, sum: {value: sum}, [action.input]: { value: action.value}})
    } ;
    default: return state;
  }
}

export {changeInputReducer};