
module.exports = {
    increment: (value) => {
        return {
            type: 'counter/increment',
            payload: value,
        }
    },
    decrement: (value) => {
        return {
            type: 'counter/decrement',
            payload: value,
        }
    },
}