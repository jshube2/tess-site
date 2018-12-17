import {SET_FLAG, SET_SCENE, SET_SELECTION} from './actions';
import {initialState} from "./initial_state";

export default reducer;

function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case SET_FLAG:
            return setFlag(state, action.flag);
        case SET_SCENE:
            return setScene(state, action.scene);
        case SET_SELECTION:
            return setSelection(state, action.selection);
        default:
            return state;
    }
}

function setFlag(state, flag) {
    let stateCpy = JSON.parse(JSON.stringify(state));
    stateCpy.flags[flag.flagId].flagState = flag.flagState;
    return stateCpy
}

function setScene(state, scene) {
    let stateCpy = JSON.parse(JSON.stringify(state));
    stateCpy.scene = scene;
    return stateCpy
}

function setSelection(state, selection) {
    let stateCpy = JSON.parse(JSON.stringify(state));
    stateCpy.selections[selection.selectionId] = selection.value;
    return stateCpy
}