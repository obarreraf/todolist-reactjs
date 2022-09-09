import React from 'react';
import { TodoIcon } from './index.js';

function DeleteIcon({ onDelete }) {
  return (
    <TodoIcon
      type="delete"
      onClick={onDelete}
    />
  );
}

export { DeleteIcon };
