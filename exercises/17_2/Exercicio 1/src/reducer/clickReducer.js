
const INITIAL_STATE = 5;
const CLICK = 'CLICK';

const clickReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CLICK: return state + 1;
    default: return state;
  }
}

export {clickReducer};