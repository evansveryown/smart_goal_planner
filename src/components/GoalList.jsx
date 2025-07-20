import GoalCard from './GoalCard';

function GoalList({ goals, onDelete, onUpdate }) {
  return goals.map(goal => (
    <GoalCard key={goal.id} goal={goal} onDelete={onDelete} onUpdate={onUpdate} />
  ));
}
export default GoalList;
