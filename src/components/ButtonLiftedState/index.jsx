export default function ButtonLiftedState({ count, onClick }) {
  return <button onClick={onClick}>increment {count}</button>;
}
