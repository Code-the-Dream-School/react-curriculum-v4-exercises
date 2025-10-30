//if name passes in the prop it will render the name else it will render world

export default function StudentWork({ name }) {
  return <h1>Hello, {name || 'World'} 04!</h1>;
}
