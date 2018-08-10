export const fetchBinges = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/binges'
  });
};

export const fetchBinge = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/binges/${id}`
  });
};

export const createBinge = binge => {
  return $.ajax({
    method: 'POST',
    url: `/api/binges`,
    data: { binge }
  });
};

export const updateBinge = binge => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/binges/${binge.id}`,
    data: { binge }
  });
};

export const deleteBinge = id => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/binges/${id}`
  });
};
