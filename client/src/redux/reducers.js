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
    ]
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
    
        default:
            return state;
    }
}
