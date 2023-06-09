import { Contact } from "../components/contact";
import {
  dataType,
  deleteContact,
  updateContact,
} from "../redux/contacts/contacts.actions";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import Create from "../components/createModal";

export const ContactPage = () => {
  // hooks for dispatching actions and reading the redux state
  const dispatch = useAppDispatch();
  const contacts = useAppSelector((store) => store.contacts);

  //   functions for updating and deleting

  const handleUpdate = (data: dataType) => {
    dispatch(updateContact(data));
  };
  const handleDelete = (data: dataType) => {
    dispatch(deleteContact(data));
    return;
  };

  return (
    <div className="">
      <Create />
      {/* reflecting contacts on UI by mapping through data  */}
      {contacts.length > 0 ? (
        <div className="w-3/4 bg-black h-1 m-auto mt-10 grid lg:grid-cols-2 sm:grid-cols-1 gap-x-1.5">
          {contacts?.map((el) => (
            <Contact
              key={el.id}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
              items={el}
            />
          ))}
        </div>
      ) : (
        <div className="mt-12 text-center w-full">
          <p>
            No Contact Found.
            <br /> Please add contact from Create contact button.
          </p>
        </div>
      )}
    </div>
  );
};
