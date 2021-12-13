import * as Types from '../constants/ActionTypes';

var intialState = [
    {
        trademark : {
            name : 'Solid gold',
            logo : ''
        }
    },
    {
        trademark : {
            name : 'Wholehearted',
            logo : ''
        }
    },
    {
        trademark : {
            name : 'Royal Canin',
            logo : ''
        }
    },
    {
        trademark : {
            name : 'Bioline',
            logo : ''
        }
    },
    {
        trademark : {
            name : 'Irisese',
            logo : ''
        }
    },
    {
        trademark : {
            name : 'Science diet',
            logo : ''
        }
    }
]

const trademark = (state = intialState, action) => {
    switch(action.type){

        default: return [...state]
    }
}

export default trademark;