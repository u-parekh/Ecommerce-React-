import { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { AuthContext } from "../context/AuthContext";

export default function Profile() {
  const { user } = useContext(AuthContext);
  const [form, setForm] = useState(user);

  const handleUpdate = () => {
    localStorage.setItem("user", JSON.stringify(form));
    alert("Profile Updated!");
  };

  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto mt-10 bg-white p-6 shadow rounded">
        <input
          className="w-full border p-2 mb-3"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="w-full border p-2 mb-3"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          className="w-full border p-2 mb-3"
          value={form.password}
          onChange={e => setForm({ ...form, password: e.target.value })}
        />
        <button
          onClick={handleUpdate}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        >
          Update
        </button>
      </div>
    </>
  );
}
