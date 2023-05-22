import { ChangeEvent, FormEvent, useState } from "react";
import { Contact } from "../components/contact";
import Modal from "../components/modal";
import { addContact, dataType, deleteContact } from "../redux/contacts/contacts.actions";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

export const ContactPage = () => {
    const [details, setDetails] = useState<dataType>({
        firstName: "",
        lastName: "",
        status: "",
        id: "",
      });
    const dispatch = useAppDispatch();
    const contacts = useAppSelector((store) => store.contacts); 
    console.log(contacts)
      const handleContactDetails = (
        event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
      ) => {
        const { name, value } = event.target;
        setDetails((details) => ({ ...details, [name]: value }));
      };
    
      console.log(details);
    
      const handleContactDispatch = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const {firstName,lastName,status} = details
        const id = firstName + Math.random() + lastName;
    
        if(!firstName || !lastName || !status){
          console.log("show alert")
          return;
        }
        dispatch(addContact({firstName,lastName,status,id}))
        setDetails({
            firstName: "",
            lastName: "",
            status: "",
            id: "",
          })
      }


    //   for updating and deleting

    const handleUpdate = (id:string,data:dataType)=>{
        console.log(id)
        return;
    }
    const handleDelete = (id:any)=>{
        dispatch(deleteContact(id))
        return;
    } 
  return (
    <div className="">
        ContactPage
        <div>
        <form onSubmit={handleContactDispatch}>
        <input
          type="text"
          placeholder="firstName"
          name="firstName"
          value={details.firstName || ""}
          onChange={handleContactDetails}
        />
        <input
          type="text"
          placeholder="lastName"
          name="lastName"
          value={details.lastName || ""}
          onChange={handleContactDetails}
        />
        <input
          type="radio"
          name="status"
          value={"active"}
          onChange={handleContactDetails}
        />
        <input
          type="radio"
          name="status"
          value={"inactive"}
          onChange={handleContactDetails}
        />

        <button type="submit">submit</button>
        </form>
      </div>
      <h1 className="text-center mt-6 text-lg">All Contacts</h1>

                <div className="w-full h-screen px-8 py-8 flex justify-center place-items-start">
            <div className="w-full sm:w-80 md:w-60 lg:w-1/3 xl:w-1/3 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl flex-col justify-center items-center border px-4 py-4 text-center rounded">

        {
            contacts?.map((el)=><Contact handleDelete={handleDelete} handleUpdate={handleUpdate} items={el}/>)
        }
        </div>
        </div>
    </div>
  )
}
