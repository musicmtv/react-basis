


export default function (state={newslist:[]},action) {
    if(action.type==="GET_NEWS")
    {
        let count=state.count;
        count++;
        return Object.assign({},state,{newslist:action.getNewsData})
    }

    return state;

}