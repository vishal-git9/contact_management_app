import { dataType } from "./contacts.actions"
import { CREATE_CONTACT, DELETE_CONTACT, GET_CONTACT, UPDATE_CONTACT } from "./contacts.types"

interface stateProps{
    loading:boolean,
    error:boolean,
    contacts:dataType[]
}
const initialState = {
    loading:false,
    error:false,
    contacts:[]
}


export const contactsReducer = (state:stateProps=initialState,{type,payload}:{type:string,payload:dataType})=>{
    switch(type){
        case CREATE_CONTACT:{
            return {
                ...state,loading:false,contacts:[...state.contacts,payload]
            }
        }
        case GET_CONTACT:{
            return {
                ...state,loading:false,contacts:[...state.contacts]
            }
        }
        case UPDATE_CONTACT:{
            return {
                ...state,loading:false,contacts:state.contacts.map((el)=>{
                    if(payload.id===el.id){
                        return {...el,firstName:payload.firstName,lastName:payload.lastName,status:payload.status}
                    }
                    return {...el}
                })
            }
        }
        case DELETE_CONTACT:{
            return {
                ...state,loading:false,contacts:state.contacts.filter((el)=>{
                    return payload.id!==el.id
                })
            }
        }

        default :{
            return state
        }
    }
}