import { useState } from 'react';

const AddGoalForm = ({ onAddGoal }) => {
  const [formData, setFormData] = useState({
    name: '',
    targetAmount: '',
    category: '',
    deadline: '',
    savedAmount: 0,
    createdAt: new Date().toISOString().split('T')[0],
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddGoal(formData);
    setFormData({
      name: '',
      targetAmount: '',
      category: '',
      deadline: '',
      savedAmount: 0,
      createdAt: new Date().toISOString().split('T')[0],
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Goal Name" value={formData.name} onChange={handleChange} />
      <input name="targetAmount" type="number" placeholder="Target Amount" value={formData.targetAmount} onChange={handleChange} />
      <input name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
      <input name="deadline" type="date" value={formData.deadline} onChange={handleChange} />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default AddGoalForm;
