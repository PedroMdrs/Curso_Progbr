module.exports = function counterReduce(state = { value: 0 }, action) {
    switch (action.type) {
        case "counter/increment":

            return { ...state, value: state.value + action.payload
    }
        case "counter/decrement":

            return { ...state, value: state.value - action.payload

}
        default:
return state
    }
}