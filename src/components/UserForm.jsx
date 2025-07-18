import React, { useState, useEffect } from 'react';
import { TextField, Button, Box } from '@mui/material';

const UserForm = ({ onAddUser, onUpdateUser, editingUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (editingUser) {
      setName(editingUser.name);
      setEmail(editingUser.email);
    } else {
      setName('');
      setEmail('');
    }
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      if (editingUser) {
        onUpdateUser({ ...editingUser, name, email });
      } else {
        onAddUser({ name, email });
      }
      setName('');
      setEmail('');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      <Button type="submit" variant="contained">
        {editingUser ? 'Update User' : 'Add User'}
      </Button>
    </Box>
  );
};

export default UserForm;