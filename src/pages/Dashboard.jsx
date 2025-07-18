import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import UserList from '../components/UserList';
import UserModal from '../components/UserModal';
import UserForm from '../components/UserForm';
import api from '../services/api';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    api.get('/users').then((res) => setUsers(res.data));
  }, []);

  const handleViewUser = (user) => {
    setSelectedUser(user);
    setModalOpen(true);
  };

  const handleAddUser = (newUser) => {
    setUsers((prev) => [...prev, { ...newUser, id: Date.now() }]);
  };

  const handleUpdateUser = (updatedUser) => {
    setUsers((prev) => prev.map((u) => (u.id === updatedUser.id ? updatedUser : u)));
    setEditingUser(null);
  };

  const handleDeleteUser = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        User Panel
      </Typography>
      <UserForm
        onAddUser={handleAddUser}
        onUpdateUser={handleUpdateUser}
        editingUser={editingUser}
      />
      <UserList
        users={users}
        onView={handleViewUser}
        onEdit={handleEditUser}
        onDelete={handleDeleteUser}
      />
      <UserModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        user={selectedUser}
      />
    </Container>
  );
};

export default Dashboard;
