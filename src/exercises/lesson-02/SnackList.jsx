export default function SnackList() {
  const snacks = [
    { name: 'Rice Crackers', rank: 5 },
    { name: 'Pocky', rank: 4 },
    { name: 'Takoyaki Chips', rank: 3 },
    { name: 'Mochi Ice Cream', rank: 2 },
    { name: 'Melon Pan', rank: 1 },
  ];
  const sortedSnacks = snacks.toSorted((a, b) => a.rank - b.rank);
  return (
    <div>
      <h2>Snack List</h2>
      <ol>
        {sortedSnacks.map((snack) => {
          return <li key={snack.rank}>{snack.name}</li>;
        })}
      </ol>
    </div>
  );
}
