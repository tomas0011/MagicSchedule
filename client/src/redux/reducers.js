import * as constants from "./constants"

const initialState = {
    horaryDay: [

    ],
    events: [
        {
            day: '10-10',
            event: 'Pasear al perro'
        },
        {
            day: '11-10',
            event: 'Hacer tarea'
        }
    ],
    toDo:[],
    userActive: {}
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.ME:
            state.userActive = action.payload;
        default:
            return state;
    }
}
