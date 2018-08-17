export const selectUserBoards = ({ entities }, userId) => (
  Object.values(entities.boards).filter(board => board.user_id === userId)
);

export const selectUserBinges = ({ entities }, userId) => (
  Object.values(entities.binges).filter(binge => binge.author_id === userId)
);

export const selectBoardBinges = ({ entities }, boardId) => {
  return (
    Object.values(entities.bingings).filter(binging => binging.board_id === parseInt(boardId))
  )
};

export const selectFollows = ({ entities }, userId) => (
  Object.values(entities.followed).filter(follow => follow.userId === userId)
);

export const selectFollowers = ({ entities }, userId) => (
  Object.values(entities.following).filter(follow => follow.userId === userId)
);
