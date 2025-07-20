import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditGoalForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [goal, setGoal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://smart-goal-server.onrender.com/goals/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setGoal(data);
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGoal({ ...goal, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://smart-goal-server.onrender.com/goals/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(goal),
    })
      .then((res) => res.json())
      .then(() => navigate('/')); // Redirect to home after editing
  };

  if (loading) return <p>Loading...</p>;
  if (!goal) return <p>Goal not found</p>;

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-md max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Edit Goal</h2>
      <label className="block mb-2">
        Name:
        <input type="text" name="name" value={goal.name} onChange={handleChange} className="w-full border p-2" />
      </label>
      <label className="block mb-2">
        Target Amount:
        <input type="number" name="targetAmount" value={goal.targetAmount} onChange={handleChange} className="w-full border p-2" />
      </label>
      <label className="block mb-2">
        Saved Amount:
        <input type="number" name="savedAmount" value={goal.savedAmount} onChange={handleChange} className="w-full border p-2" />
      </label>
      <label className="block mb-2">
        Category:
        <input type="text" name="category" value={goal.category} onChange={handleChange} className="w-full border p-2" />
      </label>
      <label className="block mb-4">
        Deadline:
        <input type="date" name="deadline" value={goal.deadline} onChange={handleChange} className="w-full border p-2" />
      </label>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Save Changes
      </button>
    </form>
  );
};

export default EditGoalForm;
