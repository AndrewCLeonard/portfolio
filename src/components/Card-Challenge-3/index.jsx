export default function Card({ children }) {
  return (
    <div className="card">
      <div className="card-content">
        <h1>Photo</h1>
        {children}
      </div>
    </div>
  );
}
