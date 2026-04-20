export default function FilterButton({ filter, validationCheck, children }) {
  return (
    <>
      <button onClick={() => validationCheck(filter)}>{children}</button>
    </>
  );
}
