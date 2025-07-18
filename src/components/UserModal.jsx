import React from 'react';
import { Modal, Box, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const UserModal = ({ open, onClose, user }) => {
  if (!user) return null;

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="h6">{user.name}</Typography>
        <Typography>Email: {user.email}</Typography>
        <Typography>Phone: {user.phone}</Typography>
        <Typography>Company: {user.company?.name}</Typography>
      </Box>
    </Modal>
  );
};

export default UserModal;