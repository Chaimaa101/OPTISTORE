import { HiOutlineLogout } from "react-icons/hi";
import { useState } from "react";
import { router, usePage } from "@inertiajs/react";


// UserProfile Component
const UserProfile = ({ onLogout }) => {
const { auth } = usePage().props;
   const user = auth.user
  return (
    <div className="absolute py-4 px-4 top-[68px] right-4 bg-gray-200 z-20 border-2 border-gray-300 rounded-md">
      <div className="border-b pb-3 border-gray-300">
        <p className="font-bold text-gray-800">{user.firstname} {user.lastname}</p>
        <small className="font-semibold text-gray-600">{user.email}</small>
      </div>
      <button
        onClick={onLogout}
        className="flex justify-left items-center gap-1 text-blue-500 mt-2"
      >
        Logout
        <HiOutlineLogout size={15} style={{ marginTop: "4px" }} />
      </button>
    </div>
  );
};


// LogoutConfirmationModal Component
const LogoutConfirmationModal = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70 z-20">
      <div className="bg-gray-200 py-4 px-8 rounded-lg shadow-lg z-[10000]">
        <h2 className="text-lg font-bold mb-4 text-gray-800">Confirm logout</h2>
        <hr className="border-gray-300" />
        <p className="text-gray-800 py-2">Are you sure you want to log out?</p>
        <div className="flex justify-end mt-4">
          <button
            className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={onConfirm}
          >
            Yes
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={onCancel}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};



// Header Component
export default function Header({ title }) {
  const [showEmail, setShowEmail] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleLogout = () => {
    setShowAlert(true);
    setShowEmail(false);
  };

  const confirmLogout = () => {
   router.post("/logout")
  };

  const cancelLogout = () => {
    setShowAlert(false);
  };
  const { auth } = usePage().props;
   const user = auth.user

  return (
    <>
      <div className="sticky top-0 right-0 left-0 z-20 flex items-center justify-between bg-gray-200 py-2.5 px-8 border-b border-gray-300">
        <p className="font-semibold text-lg text-gray-800">{title}</p>
        <div
          onClick={() => setShowEmail((prev) => !prev)}
          className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center rounded-full cursor-pointer hover:from-blue-600 hover:to-blue-700 transition-all shadow-mdr"
        >
          <span className="font-semibold text-lg text-white"> {(user.firstname.charAt(0).toUpperCase() || " ")}{(user.lastname.charAt(0).toUpperCase() || " ")}</span>
        </div>
        {showEmail && <UserProfile onLogout={handleLogout} />}
      </div>
      {showAlert && (
        <LogoutConfirmationModal onConfirm={confirmLogout} onCancel={cancelLogout} />
      )}
    </>
  );
}

