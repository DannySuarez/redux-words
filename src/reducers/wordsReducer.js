import words from '../fixtures/words';

const dictionary = words;

export default function reducer(state = dictionary, action){
  switch(action.type) {

    default:
      return state;
  }
}
