export const incNumber = (num) => {
    return {
        type: "INCREMENT",
        payload: num //anyKey : value
    };
};

export const decNumber = () => {
    return {
        type: "DECREMENT"
    };
};