export const selectUserBoards = (entities, userId) => {
  const userBoards = Object.values(entities.boards).filter(
    board => board.user_id === userId
  );
  return userBoards;
};

export const selectUserBinges = (entities, userId) => {
  const userBinges = Object.values(entities.binges).filter(
    binge => binge.author_id === userId
  );
  return userBinges;
};

export const selectBoardBinges = (entities, boardId) => {
  const bingings = Object.values(entities.bingings).filter(
    binging => binging.board_id === parseInt(boardId)
  );
  const binges = bingings.map(binging => entities.binges[binging.binge_id]);
  return binges;
};

export const selectFollows = (entities, userId) =>
  Object.values(entities.followed).filter(follow => follow.userId === userId);

export const selectFollowers = (entities, userId) =>
  Object.values(entities.following).filter(follow => follow.userId === userId);
