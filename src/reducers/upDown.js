const initialState = 0;
//reducer takes 2 args state and action, better to have initialstate 
const changeTheNumber = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT": {
            //return state + 1;
            return state + action.payload;
        }
        case "DECREMENT": {
            if (state != 0) {
                return state - 1;
            };
        }
        default: {
            return state;
        }
    }
};

export default changeTheNumber;