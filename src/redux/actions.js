// action types
export const SET_FLAG = 'SET_FLAG';
export const SET_SCENE = 'SET_SCENE';
export const SET_SELECTION = 'SET_SELECTION';

// action creators
export const setFlag = function(flag) {
    console.log("setFlag", flag);
    return ({
        type: SET_FLAG,
        flag
    });
};

export const setScene = function(scene) {
    console.log("setScene", scene);
    return ({
        type: SET_SCENE,
        scene
    });
};

export const setSelection = function(selection) {
    console.log("setSelection", selection);
    return ({
        type: SET_SELECTION,
        selection
    });
};