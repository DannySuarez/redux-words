export const getWords = state => state.dictionary.words;

export const getFirstWords = (state, count = 1000) => {
  return getWords(state).slice(0, count);
}; 
