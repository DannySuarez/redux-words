import words from '../fixtures/words';
import { UPDATE_SEARCH_TERM } from '../actions/wordsActions';

const initialState = {
  words,
  filter: ''
};

export default function reducer(state = initialState, action){
  switch(action.type) {
    case UPDATE_SEARCH_TERM:
      return { ...state, filter: action.payload };

    default:
      return state;
  }
}
