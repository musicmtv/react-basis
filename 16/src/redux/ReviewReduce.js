


export default function (state={content:"",rlist:[]},action) {
    if(action.type==="REVIEW_CONTENT_CHANGE"){
        return Object.assign({},state,{content:action.content})
    }
    if(action.type==="REVIEW_LOAD_SUCCESS"){
        return Object.assign({},state,{rlist:action.reviewData})
    }

    return state;
}