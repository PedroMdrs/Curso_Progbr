const { applyMiddleware } = require('@reduxjs/toolkit')
const redux = require('@reduxjs/toolkit')
const combineReducers = redux.combineReducers
const thunk = require('redux-thunk')
const fetch = require('cross-fetch')
const { addItem } = require('./actions/listAction')

// const { increment, decrement } = require('./actions/counterAction')
// const counterReduce = require('./reducers/counterReduce')
// const { addItem } = require('./actions/listAction')
// const ListReduce = require('./reducers/listReducer')
const loadItemAndAdd = () => {
    return(dispatch)=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json()).then(json => {
            console.log(json)
            dispatch(addItem(json))
        })
    }
}
const listReducer = (state = [{ id: 0, title: 'tra', completed: false }], action) => {

    switch (action.type) {
        case "list/add":

            return [...state, action.payload]

        default:
            return state
    }
}



const allReducers = combineReducers({
    // count: counterReduce,
    // list: ListReduce,
    list: listReducer,

})

const store = redux.configureStore({ reducer: allReducers }, applyMiddleware(thunk))
console.log(store.dispatch(loadItemAndAdd()))
