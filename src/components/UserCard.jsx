import React from 'react';
import { Card, CardContent, Typography, Button, Stack } from '@mui/material';

const UserCard = ({ user, onView, onEdit, onDelete }) => {
  return (
    <Card sx={{ minWidth: 275, mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{user.name}</Typography>
        <Typography color="text.secondary">{user.email}</Typography>
        <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
          <Button variant="outlined" onClick={() => onView(user)}>View</Button>
          <Button variant="contained" color="warning" onClick={() => onEdit(user)}>Edit</Button>
          <Button variant="contained" color="error" onClick={() => onDelete(user.id)}>Delete</Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default UserCard;