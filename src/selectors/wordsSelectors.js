export const getWords = state => state.dictionary.words;

export const getFirstWords = (state, count = 1000) => {
  return getWords(state).slice(0, count);
}; 

export const getSearchTerm = state => state.dictionary.filter;

export const getTopWordsByTerm = (state, count = 1000) => {
  const searchTerm = getSearchTerm(state);
  return getWords(state).filter(word => {
    return word.includes(searchTerm);
  }).slice(0, count);
};
