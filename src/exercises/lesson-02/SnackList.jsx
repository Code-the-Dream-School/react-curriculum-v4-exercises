export default function SnackList() {
  const snacks = [
    { name: 'Popcorn 🍿', rank: 3 },
    { name: 'Cookies 🍪', rank: 2 },
    { name: 'Donuts 🍩', rank: 1 },
  ];
  const resortedSnacks = snacks.toSorted((a, b) => a.rank - b.rank);
  return (
    <ol>
      {resortedSnacks.map((snack) => (
        <li key={snack.rank}>{snack.name}</li>
      ))}
    </ol>
  );
}
