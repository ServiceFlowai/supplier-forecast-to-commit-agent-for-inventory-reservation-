import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, deleteUser, updateUser } from '../store/userSlice';

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.list);
  const [newUser, setNewUser] = useState({ name: '', role: '' });

  const handleAddUser = () => {
    dispatch(addUser(newUser));
    setNewUser({ name: '', role: '' });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          className="border p-2 mr-2"
        />
        <select
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
          className="border p-2 mr-2"
        >
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="buyer">Buyer</option>
          <option value="supplier_user">Supplier User</option>
        </select>
        <button onClick={handleAddUser} className="bg-blue-500 text-white p-2">Add User</button>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Name</th>
            <th className="py-2">Role</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="py-2">{user.name}</td>
              <td className="py-2">{user.role}</td>
              <td className="py-2">
                <button onClick={() => dispatch(deleteUser(user.id))} className="bg-red-500 text-white p-1">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;