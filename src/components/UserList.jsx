import React from 'react';
import UserCard from './UserCard';

const UserList = ({ users, onView, onEdit, onDelete }) => {
  return (
    <div>
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          onView={onView}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default UserList;