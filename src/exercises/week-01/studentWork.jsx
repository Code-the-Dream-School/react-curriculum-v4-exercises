//
//students work lives in this file
//test i run will target this file

//if name passes in the prop it will render the name else it will render world
export default function StudentWork({ name }) {
  // Threw an error to test the error boundary
  // throw new Error("Test error from StudentWork component");

  return <h1> Hello, {name || 'World'}!</h1>;
}
