export const fetchSearchResults = query => $.ajax({
  method: 'GET',
  url: 'api/searches',
  data: { query },
});
