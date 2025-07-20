import React, { useState } from 'react';
import DepositForm from './DepositForm';

const GoalCard = ({ goal, onDelete, onUpdate }) => {
  const { id, name, category, savedAmount, targetAmount, deadline } = goal;
  const progress = Math.min((savedAmount / targetAmount) * 100, 100);
  const daysLeft = Math.ceil((new Date(deadline) - new Date()) / (1000 * 3600 * 24));

  let status = '';
  if (progress >= 100) status = '✅ Completed';
  else if (daysLeft <= 30 && daysLeft > 0) status = '⚠️ Due Soon';
  else if (daysLeft < 0 && progress < 100) status = '❌ Overdue';

  return (
    <div className="goal-card">
      <h3>{name}</h3>
      <p>Category: {category}</p>
      <p>Deadline: {deadline}</p>
      <p>Status: {status}</p>
      <div className="progress-bar" style={{ width: '100%', background: '#eee' }}>
        <div style={{ width: `${progress}%`, background: 'green', color: 'white' }}>{Math.round(progress)}%</div>
      </div>
      <p>${savedAmount} / ${targetAmount}</p>

      <DepositForm goal={goal} onUpdate={onUpdate} />

      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default GoalCard;
