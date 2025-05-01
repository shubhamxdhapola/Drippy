import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addUser,
  deleteUser,
  fetchUsers,
  updateUser,
} from "../../redux/slices/adminSlice";
import { ChevronDown, Loader, Loader2 } from "lucide-react";
import ErrorPage from "../Common/ErrorPage";
import { toast } from "sonner";

const initialFormData = {
  name: "",
  email: "",
  password: "",
  role: "customer",
};

const UserManagement = () => {
  const [formData, setformData] = useState(initialFormData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [ userExist, setUserExist ] = useState(false);
  const [deletingUserId, setDeletingUserId] = useState(null);

  const { user } = useSelector((state) => state.auth);
  const { users, loading, error, addUserLoading } = useSelector(
    (state) => state.admin
  );

  useEffect(() => {
    if (user && user.role !== "admin") {
      navigate("/");
    }
  }, [user, navigate]);

  useEffect(() => {
    if (user && user.role === "admin") {
      dispatch(fetchUsers());
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    setformData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!formData.name.trim()) return toast.error("Name is required!")
    if(!formData.email.trim()) return toast.error("Email is required!")
    if(!formData.password.trim()) return toast.error("Password is required!")
    dispatch(addUser(formData))
      .unwrap()
      .then(() => {
        toast.success("User added successfully!");
        setformData(initialFormData);
      })
      .catch((err) => {
        toast.error(err.message);
        setUserExist(true);
      });
  };

  const handleRoleChange = (userId, newRole) => {
    dispatch(updateUser({ id: userId, role: newRole }))
      .unwrap()
      .then(() => toast.success("Role updated successfully!"))
      .catch(() => toast.error("Unable to update role!"));
  };

  const handleDeleteUser = (userId) => {
    setDeletingUserId(userId);
    dispatch(deleteUser(userId))
      .unwrap()
      .then(() => toast.success("User deleted successfully!"))
      .catch(() => toast.error("Unable to delete user!"))
      .finally(() => setDeletingUserId(null));
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader className="text-gray-900 animate-spin" size={30} />
      </div>
    );

  if (!userExist && error)
    return (
      <div className="flex justify-center items-center h-screen">
        <ErrorPage />;
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto p-3 sm:p-6">
      <h2 className="text-2xl font-bold mb-4">User Management</h2>
      {/* Add new user form */}
      <div className="p-2 sm:p-6 rounded-lg mb-6">
        <h3 className="text-lg font-bold mb-4">Add New User</h3>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="">
              <label htmlFor="name" className="block text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                id="name"
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                id="email"
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="">
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <input
                type="text"
                name="password"
                value={formData.password}
                id="password"
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="relative">
              <label htmlFor="role" className="block text-gray-700">
                Role
              </label>
              <select
                name="role"
                id="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full p-2 border rounded custom-select"
              >
                <option value="customer">Customer</option>
                <option value="admin">Admin</option>
              </select>
              <ChevronDown className="absolute top-[37px] right-2" size={20} />
            </div>
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 mt-4 w-[100px] rounded hover:bg-green-600 duration-300"
          >
            {addUserLoading ? <Loader2 className="animate-spin mx-auto" /> : "Add User"}
          </button>
        </form>
      </div>

      {/* Users list management */}
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-sm uppercase text-gray-700">
            <tr>
              <th className="py-3 px-4 whitespace-nowrap">Name</th>
              <th className="py-3 px-4 whitespace-nowrap">Email</th>
              <th className="py-3 px-4 whitespace-nowrap">Role</th>
              <th className="py-3 px-4 whitespace-nowrap">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="border-b hover:bg-gray-50">
                <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                  {user.name}
                </td>
                <td className="p-4 whitespace-nowrap">{user.email}</td>
                <td className="p-4 whitespace-nowrap">
                  <select
                    value={user.role}
                    onChange={(e) => handleRoleChange(user._id, e.target.value)}
                    className="select select-bordered max-w-[130px] whitespace-nowrap"
                  >
                    <option value="customer">Customer</option>
                    <option value="admin">Admin</option>
                  </select>
                </td>
                <td className="p-4 whitespace-nowrap">
                  <button
                    onClick={() => handleDeleteUser(user._id)}
                    className="bg-red-500 text-white px-4 py-2 w-[80px] rounded hover:bg-red-600"
                    disabled={deletingUserId}
                  >
                    {deletingUserId === user._id ? (
                      <Loader2 className="animate-spin mx-auto" />
                    ) : (
                      "Delete"
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
