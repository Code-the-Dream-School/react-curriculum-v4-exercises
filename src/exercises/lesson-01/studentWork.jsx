export default function StudentWork() {
  // 1. Add your variables here
  const name = "Matheus";
  const role = "React Developer in training";
  const hobby = "Coding and solving bugs";

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>About Me</h2>
      {/* 2. Inject your variables into the JSX */}
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Role:</strong> {role}</p>
      <p><strong>Favorite Hobby:</strong> {hobby}</p>
    </div>
  );
}