export const reducer = (state, action) => {
    if (action.type==='increment') {
        // const data = action.payload;
        
        const data = state.data.map((item) => {
            if (item.item===action.payload.item) {
               return action.payload
            } else {
               return item
            }
        })

        
        return {...state,data}
    }
    if (action.type==='decrement') {
        // const data = action.payload;
        
        const data = state.data.map((item) => {
            console.log(item);
            console.log(action.payload);
            if (item.item===action.payload.item) {
               return action.payload
            } else {
               return item
            }
        })
        return {...state,data}
    }
    if (action.type==='login') {
        return {...state,isLogin:true}
    }
    return state
}