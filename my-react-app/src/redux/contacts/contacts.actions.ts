import { CREATE_CONTACT, DELETE_CONTACT, GET_CONTACT, UPDATE_CONTACT } from "./contacts.types"

export interface dataType{
    id:string,
    firstName:string,
    lastName:string,
    status:string
}
export const addContact = (data:dataType)=>{
    return {type:CREATE_CONTACT,payload:data}
}
export const getContact = ()=>{
    return {type:GET_CONTACT}
}
export const updateContact = (data:dataType)=>{
    return {type:UPDATE_CONTACT,payload:data}
}
export const deleteContact = (data:dataType)=>{
    return {type:DELETE_CONTACT,payload:data}
}