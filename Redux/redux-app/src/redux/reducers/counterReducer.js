
export const counter= (state = 0, action) => {
  switch (action.type) {
    case "increase_count": 
      return state + action.payload
    case "decrease_count":
      return state - action.payload
    default:
      return state;
  }
};
export default counter;

