const BASE_URL = 'https://smart-goal-server.onrender.com/goals';

// GET all goals
export const fetchGoals = async () => {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error('Failed to fetch goals');
  return res.json();
};

// POST a new goal
export const createGoal = async (goal) => {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(goal),
  });
  if (!res.ok) throw new Error('Failed to create goal');
  return res.json();
};

// PATCH an existing goal (e.g. update savedAmount or details)
export const updateGoal = async (id, updates) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates),
  });
  if (!res.ok) throw new Error('Failed to update goal');
  return res.json();
};

// DELETE a goal
export const deleteGoal = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Failed to delete goal');
};

// src/api.js
const API_BASE_URL = "https://smart-goal-server.onrender.com";

export default API_BASE_URL;
