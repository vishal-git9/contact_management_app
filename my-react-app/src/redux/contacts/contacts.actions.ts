import { CREATE_CONTACT, DELETE_CONTACT, GET_CONTACT, UPDATE_CONTACT } from "./contacts.types"

// type interface for payload data
export interface dataType{
    id:string,
    firstName:string,
    lastName:string,
    status:string
}
// action for adding contact that takes data to be added as an argument
export const addContact = (data:dataType)=>{
    return {type:CREATE_CONTACT,payload:data}
}

// action for reading contacts
export const getContact = ()=>{
    return {type:GET_CONTACT}
}

// action for updating contact that takes data to be updated as an argument
export const updateContact = (data:dataType)=>{
    return {type:UPDATE_CONTACT,payload:data}
}

// action for deleting contact that takes data to be deleted as an argument
export const deleteContact = (data:dataType)=>{
    return {type:DELETE_CONTACT,payload:data}
}