import { Fragment, useRef, useState, ChangeEvent, FormEvent } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { dataType } from "../redux/contacts/contacts.actions";
interface modalType {
  open: boolean;
  items: dataType;
  setOpen: (val: boolean) => void;
  handleSubmit: (data: dataType) => void;
}
export default function Modal({
  open,
  setOpen,
  handleSubmit,
  items,
}: modalType) {
  // it restores the current value to the edit modal and update it based on the users changes
  const [editedData, setEditedData] = useState<dataType>({ ...items });
  const cancelButtonRef = useRef(null);

  // it keeps the record of new changes done by users using onchange handler
  const handleEditChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  // this function invokes when user submits this updated form which goes to the handleSubmit function that carries out the updated functionality
  const handleSubmitData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(editedData);
  };
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"></div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <form onSubmit={handleSubmitData}>
                        <input
                          className="border mt-2 px-2 py-2"
                          placeholder="Enter New First Name"
                          name="firstName"
                          value={editedData?.firstName}
                          onChange={handleEditChange}
                        />
                        <input
                          className="border mt-2 px-2 py-2"
                          placeholder="Enter New Last Name"
                          name="lastName"
                          value={editedData?.lastName}
                          onChange={handleEditChange}
                        />
                        <div className="mt-4 mb-2">
                          <label className="mx-2">Status:</label>
                          <input
                            className="mx-2"
                            type="radio"
                            name="status"
                            value="active"
                            checked={editedData?.status === "active"}
                            onChange={handleEditChange}
                          />
                          Active
                          <input
                            className="mx-2"
                            type="radio"
                            name="status"
                            onChange={handleEditChange}
                            checked={editedData?.status === "inactive"}
                            value="inactive"
                          />
                          Inactive
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                          <button
                            type="submit"
                            className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                          >
                            Update
                          </button>
                          <button
                            type="button"
                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                            onClick={() => setOpen(false)}
                            ref={cancelButtonRef}
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
