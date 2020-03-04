const initialState = {
  rows: [
    {
      id: 1,
      portfolio: "Equity",
      assets: 1000000,
      mtd: 0.04,
      qtd: 0.05,
      ytd: 0.06,
      _new: false
    },
    {
      id: 2,
      portfolio: "Fixed Income",
      assets: 500000,
      mtd: 0.01,
      qtd: 0.02,
      ytd: 0.03,
      _new: false
    }
  ]
};

export const perfSummaryReducer = (state = initialState, action) => {
  // ternary operator needed because first action is always system generated '@@INIT' action 
  return action.fn ? action.fn(state, action.args) : state
}
