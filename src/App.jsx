import React, { useEffect, useState } from 'react';
import { fetchGoals, createGoal, updateGoal, deleteGoal } from './api';
import GoalList from './components/GoalList';
import AddGoalForm from './components/AddGoalForm';

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetchGoals().then(setGoals).catch(console.error);
  }, []);

  const handleAddGoal = async (goal) => {
    try {
      const newGoal = await createGoal(goal);
      setGoals([...goals, newGoal]);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteGoal(id);
      setGoals(goals.filter(g => g.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdate = async (id, updates) => {
    try {
      const updated = await updateGoal(id, updates);
      setGoals(goals.map(g => g.id === id ? updated : g));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Smart Goal Planner</h1>
      <AddGoalForm onAddGoal={handleAddGoal} />
      <GoalList goals={goals} onDelete={handleDelete} onUpdate={handleUpdate} />
    </div>
  );
}

export default App;
