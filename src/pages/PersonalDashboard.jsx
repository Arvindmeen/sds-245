import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PersonalDashboard = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth(); // make sure function name matches

  // const handlebtn = async () => {
  //   try {
  //     await logout();
  //     navigate("/login");
  //   } catch (error) {
  //     console.error("Logout error:", error);
  //   }
  // };

  return (
    <div>
      <h1>Welcome to Dashboard 🔥</h1>
      <p>You are successfully authenticated.</p>

      <h2>Name: {user?.name}</h2>
      <h3>Email: {user?.email}</h3>

      {/* <button
        onClick={handlebtn}
        className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg mt-4"
      >
        Sign Out
      </button> */}
    </div>
  );
};

export default PersonalDashboard;