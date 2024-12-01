
const initialState = {
    title: 'old title'
}

export default function reducer (state = initialState, action)  {
    if (action.type === 'CHANGE_TITLE') {
        return {title: 'new title'}
    }
    return state ;
}