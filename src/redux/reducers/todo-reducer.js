import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../actions/action-types"
const initialState=[]

export default (state=initialState,action)=>{
    switch(action.type){
        case ADD_TODO:
            //add todo
            console.log('Adding Todo')
            return [...state,action.payload]

         case DELETE_TODO:
            //delete todo
            const newState= state.filter(todo=>todo.id!==action.payload)  
            return newState 
        
            case UPDATE_TODO:
                //update todo
              const updateState=  state.map(todo=>{
                    if(todo.id===action.payload.todoId){
                        todo.title=action.payload.todo.title
                        todo.description=action.payload.todo.description
                    }
                    return todo
                       
                })
                return updateState

              default: return state  

    }
}