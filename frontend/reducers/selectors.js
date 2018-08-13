export const selectUserBoards = ({ entities, session }) => (
  Object.values(entities.boards).filter(board => board.user_id === session.currentUser.id)
);

export const selectUserBinges = ({ entities, session }) => (
  Object.values(entities.binges).filter(binge => binge.user_id === session.currentUser.id)
);
