export const selectUserBoards = ({ entities }, userId) => (
  Object.values(entities.boards).filter(board => board.user_id === userId)
);

export const selectUserBinges = ({ entities }, userId) => (
  Object.values(entities.binges).filter(binge => binge.user_id === userId)
);
