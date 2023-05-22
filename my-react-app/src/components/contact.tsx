import { useState } from "react"
import { dataType } from "../redux/contacts/contacts.actions"
import Modal from "./modal"

export interface functionType{
    items:dataType
    handleDelete:(data:dataType)=>void,
    handleUpdate:(data:dataType)=>void
}

export const Contact = ({items,handleDelete,handleUpdate}:functionType) => {
  const [open,setOpen] = useState<boolean>(false)
  const handleUpdateModal = (data:dataType)=>{
    console.log("hi")
    handleUpdate(data)
    console.log(data)
    setOpen(false)
  }
    return (
        <>
                  <div
                    className="px-4 py-2 mt-4 border rounded grid gap-4 sm:flex sm:flex-col md:grid-cols-2 lg:grid-cols-2"
                  >
                    <p>
                      {items?.firstName} {items?.lastName}
                    </p>
                    <p>{items?.status}</p>
                    <button
                      className="border rounded bg-blue-500 text-white cursor-pointer py-2 px-4"
                      onClick={()=>setOpen(true)}
                    >
                      Update
                    </button>
                    <button
                      className="border rounded bg-red-500 text-white cursor-pointer py-2 px-4"
                      onClick={() => handleDelete(items)}
                    >
                      Delete
                    </button>
                    <Modal open={open} setOpen={setOpen} handleSubmit={handleUpdateModal} items={items} />
                  </div>
        </>
      );
}
