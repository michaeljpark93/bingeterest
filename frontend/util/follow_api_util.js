export const createFollow = userId => {
  return $.ajax({
    method: 'POST',
    url: `api/users/${userId}/follows`,
    data: { follow: {followed_id: id} }
  });
};

export const deleteFollow = follow => {
  return $.ajax({
    method: 'DELETE',
    url: `api/users/${follow.userId}/follows/${follow.id}`
  })
}

export const fetchFollowers = id => {
  return $.ajax({
    method: 'DELETE',
    url: `api/users/${follow.id}`,
    data: { follow }
  })
}
