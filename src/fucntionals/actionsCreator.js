import * as actions from "./actionTypes";


export fucntion bugAdded(description){
    return {
        type: actions.BUG_ADDED,
        payload: {
          description: "bug1",
        },
    }
}