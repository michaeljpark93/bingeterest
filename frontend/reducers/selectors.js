export const selectUser = (entities, userId) => {
  const userData = Object.values(entities.users).filter(user => user.id === parseInt(userId, 10));
  return (userData);
};

export const selectUserBoards = (entities, userId) => {
  const userBoards = Object.values(entities.boards).filter(
    board => board.user_id === parseInt(userId, 10),
  );
  return userBoards;
};
