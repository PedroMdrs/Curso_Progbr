module.exports = function ListReduce(state = [], action) {

    switch (action.type) {
        case "list/add":

            return [...state, action.payload]

        default:
            return state;
    }

}