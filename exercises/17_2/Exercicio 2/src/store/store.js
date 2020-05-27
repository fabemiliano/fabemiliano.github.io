import { createStore } from 'redux';
import {changeInputReducer} from '../reducer/changeInputReducer'

export const store = createStore(changeInputReducer);
