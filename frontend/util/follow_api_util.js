export const createFollow = follow => $.ajax({
  method: 'POST',
  url: 'api/follows',
  data: follow,
});

export const deleteFollow = follow => $.ajax({
  method: 'DELETE',
  url: `api/follows/${follow.id}`,
  data: follow,
});
