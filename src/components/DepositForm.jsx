import { useState } from 'react';

const DepositForm = ({ goal, onUpdate }) => {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAmount = goal.savedAmount + parseFloat(amount);
    onUpdate(goal.id, { savedAmount: newAmount });
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Deposit amount" />
      <button type="submit">Deposit</button>
    </form>
  );
};

export default DepositForm;
