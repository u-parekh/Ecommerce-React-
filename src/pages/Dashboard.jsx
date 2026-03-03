import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Dashboard() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user?.name}</h1>
      <div className="space-x-4">
        <Link to="/products" className="text-blue-500">Products</Link>
        <Link to="/cart" className="text-blue-500">Cart</Link>
        <Link to="/profile" className="text-blue-500">Profile</Link>
        <button onClick={logout} className="text-red-500">Logout</button>
      </div>
    </div>
  );
}
