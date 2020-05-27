import { createStore } from 'redux';
import {clickReducer} from '../reducer/clickReducer'

export const store = createStore(clickReducer);
