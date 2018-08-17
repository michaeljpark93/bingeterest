export const fetchBinging = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/users'
  });
};

export const createBinging = binging => {
  return $.ajax({
    method: 'POST',
    url: 'api/bingings',
    data: { binging }
  });
};

export const deleteBinging = binging => {
  return $.ajax({
    method: 'DELETE',
    url: `api/bingings/${binging.id}`
  })
}
